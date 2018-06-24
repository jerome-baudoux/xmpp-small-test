module.exports = {
    "root": true,
    "globals" : {
        "window":true,
        "document":true,
        "$":true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules" : {
        "no-console":0,
        "semi":[0,'never'],
        "no-redeclare":1,
        "comma-style": [2, "last"],
    },
    "env": {
        "browser": true,
        "node": true
    }
};