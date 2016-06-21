# localeHelper
One line code to setup localization to your express js based web site using node i18n.

# Usage
```
npm install https://github.com/Jeff-Tian/localeHelper.git --save
```
Edit your app.js by insert the following line of code:
```
require('localeHelper')(app, __dirname);
```

And modify all your routes as the following shows: (notice the `/:locale?/` part)
```
module.exports = require('express').Router()
  .get('/:locale?', function(req, res, next) {...})
  .get('/:locale?/xxx', function(req, res, next) {...})
  ;
```
