(function () {
    'use strict';
    var dependencies = [
        'ngMaterial',
        'ngMessages',
        'firebase',
        'ui.router',
        'ui.carousel',
        'md.data.table'
    ];

    angular.module('elodin', dependencies)
        .run(config);

    config.$inject = ['$timeout', 'AuthService'];

    function config($timeout, AuthService) {
        console.log('Iniciou');
    }
})();