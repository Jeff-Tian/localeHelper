var i18n = require('i18n');
var localeHelper = require('./localeHelper');
var fs = require('fs');

i18n.configure({
    locales: localeHelper.supportedLocales,
    directory: __dirname + '/locales',
    updateFiles: true
});

module.exports = function (app) {
    app.use(i18n.init);
};