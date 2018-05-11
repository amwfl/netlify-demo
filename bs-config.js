/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "files": "dist/**",
    "watchEvents": ["add", "change", "addDir"],
    "proxy": {
        "target": "http://localhost:9000",
        "route": "/.netlify/functions"
    },
    "port": 3000,
    "serveStatic": ["./dist"],
    "ghostMode": false,
    "rewriteRules": [],
    "open": false
};
