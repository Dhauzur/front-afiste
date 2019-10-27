(function(factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory;
  } else {
    factory(Highcharts);
  }
})(function(H) {
  H.Data.prototype.init = function(options, chartOptions, chart) {
    var decimalPoint = options.decimalPoint,
      hasData;
    if (chartOptions) {
      this.chartOptions = chartOptions;
    }
    if (chart) {
      this.chart = chart;
    }
    if (decimalPoint !== "." && decimalPoint !== ",") {
      decimalPoint = undefined;
    }
    this.options = options;
    this.columns = options.columns || this.rowsToColumns(options.rows) || [];
    this.firstRowAsNames = H.pick(
      options.firstRowAsNames,
      this.firstRowAsNames,
      true
    );
    this.decimalRegex =
      decimalPoint && new RegExp("^(-?[0-9]+)" + decimalPoint + "([0-9]+)$"); // eslint-disable-line security/detect-non-literal-regexp
    // This is a two-dimensional array holding the raw, trimmed string
    // values with the same organisation as the columns array. It makes it
    // possible for example to revert from interpreted timestamps to
    // string-based categories.
    this.rawColumns = [];
    // No need to parse or interpret anything
    if (this.columns.length) {
      this.dataFound();
      hasData = true;
    }

    if (this.hasURLOption(options)) {
      clearTimeout(this.liveDataTimeout);
      hasData = false;
    }

    if (!hasData) {
      // Fetch live data
      hasData = this.fetchLiveData();
    }
    if (!hasData) {
      // Parse a CSV string if options.csv is given. The parseCSV function
      // returns a columns array, if it has no length, we have no data
      hasData = Boolean(this.parseCSV().length);
    }
    if (!hasData) {
      // Parse a HTML table if options.table is given
      hasData = Boolean(this.parseTable().length);
    }
    if (!hasData) {
      // Parse a Google Spreadsheet
      hasData = this.parseGoogleSpreadsheet();
    }
    if (!hasData && options.afterComplete) {
      options.afterComplete();
    }
  };

  H.Data.prototype.hasURLOption = function(options) {
    return Boolean(
      options && (options.rowsURL || options.csvURL || options.columnsURL)
    );
  };

  H.Data.prototype.fetchLiveData = function() {
    var data = this,
      chart = this.chart,
      options = this.options,
      maxRetries = 3,
      currentRetries = 0,
      pollingEnabled = options.enablePolling,
      updateIntervalMs = (options.dataRefreshRate || 2) * 1000,
      originalOptions = H.merge(options);

    if (!this.hasURLOption(options)) {
      return false;
    }

    // Do not allow polling more than once a second
    if (updateIntervalMs < 1000) {
      updateIntervalMs = 1000;
    }

    delete options.csvURL;
    delete options.rowsURL;
    delete options.columnsURL;

    function performFetch(initialFetch) {
      // Helper function for doing the data fetch + polling
      function request(url, done, tp) {
        if (!url || url.indexOf("http") !== 0) {
          if (url && options.error) {
            options.error("Invalid URL");
          }
          return false;
        }

        if (initialFetch) {
          clearTimeout(data.liveDataTimeout);
          chart.liveDataURL = url;
        }

        function poll() {
          // Poll
          if (pollingEnabled && chart.liveDataURL === url) {
            // We need to stop doing this if the URL has changed
            data.liveDataTimeout = setTimeout(performFetch, updateIntervalMs);
          }
        }

        H.ajax({
          url: url,
          dataType: tp || "json",
          success: function(res) {
            if (chart && chart.series) {
              done(res);
            }

            poll();
          },
          error: function(xhr, text) {
            if (++currentRetries < maxRetries) {
              poll();
            }

            return options.error && options.error(text, xhr);
          }
        });

        return true;
      }

      if (
        !request(
          originalOptions.csvURL,
          function(res) {
            chart.update({
              data: {
                csv: res
              }
            });
          },
          "text"
        )
      ) {
        if (
          !request(originalOptions.rowsURL, function(res) {
            chart.update({
              data: {
                rows: res
              }
            });
          })
        ) {
          request(originalOptions.columnsURL, function(res) {
            chart.update({
              data: {
                columns: res
              }
            });
          });
        }
      }
    }

    performFetch(true);

    return this.hasURLOption(options);
  };

  H.Data.prototype.update = function(options, redraw) {
    var chart = this.chart;

    if (options) {
      // Set the complete handler
      options.afterComplete = function(dataOptions) {
        // Avoid setting axis options unless the type changes. Running
        // Axis.update will cause the whole structure to be destroyed
        // and rebuilt, and animation is lost.
        if (dataOptions) {
          if (
            dataOptions.xAxis &&
            chart.xAxis[0] &&
            dataOptions.xAxis.type === chart.xAxis[0].options.type
          ) {
            delete dataOptions.xAxis;
          }

          chart.update(dataOptions, redraw, true);
        }
      };
      // Apply it
      H.merge(true, this.options, options);
      this.init(this.options);
    }
  };
});
