module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "plugin:vue/essential",
    "globals": {
      "Promise": "off"

    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      // override default options
      "comma-dangle": "off",
      "indent": "off",
      "no-cond-assign": "off",

      // disable now, but enable in the future
      "one-var": "off", // ["error", "never"]

      // disable
      "init-declarations": "off",
      "no-console": "off",
      "no-inline-comments": "off",
    }
};
