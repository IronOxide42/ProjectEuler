module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "warn",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "curly": [
            "warn"
        ],
        "brace-style": [
            "warn",
            "stroustrup",
            {
                "allowSingleLine": true
            }
        ],
        "key-spacing": [
            "warn",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "minimum",
                "align": "value"
            }
        ],
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "array-bracket-spacing": [
            "warn",
            "always"
        ],
        "comma-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": [
            "warn"
        ],
        "no-console": 0,
        "no-constant-condition": 0
    }
};