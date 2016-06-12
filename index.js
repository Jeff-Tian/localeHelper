var i18n = require('i18n');
var localeHelper = require('./localeHelper');

module.exports = function (app, dirname) {
    i18n.configure({
        locales: localeHelper.supportedLocales,
        directory: dirname + '/locales',
        updateFiles: true
    });

    app.use(i18n.init);
    app.all('*', localeHelper.setLocale, localeHelper.setLocalVars);
};