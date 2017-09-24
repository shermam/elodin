(function () {
    'use strict';

    angular.module('elodin').config(config);

    config.$inject = ['$mdThemingProvider'];

    function config($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');
    }

})();