angular.module('i18nModule', ['pascalprecht.translate', 'ngSanitize', 'localeHelperModule'])
    .config(['$translateProvider', 'localeHelperProvider', function ($translateProvider, localeHelperProvider) {
        $translateProvider.useLoader('translationLoader');
        var locale = localeHelperProvider.getLocale(window.location.pathname);
        $translateProvider.preferredLanguage(locale);
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }])
    .factory('translationLoader', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        return function (options) {
            var dfd = $q.defer();

            // Filled by grunt
            var data = {};

            if (data[options.key]) {
                dfd.resolve(data[options.key]);

                return dfd.promise;
            }

            $http({
                method: 'GET',
                url: '/locales/' + options.key + '.json'
            })
                .success(function (result) {
                    dfd.resolve(result);

                    console.log('localeResource:load');
                    $rootScope.$emit('localeResource:load');
                })
                .error(dfd.reject);

            return dfd.promise;
        };
    }])
;