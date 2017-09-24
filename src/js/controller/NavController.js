(function () {
    'use strict';

    angular.module('elodin').controller('NavController', NavController);

    NavController.$inject = ['$mdSidenav'];

    function NavController($mdSidenav) {
        var nav = this;

        nav.toggle = function () {
            $mdSidenav('right').toggle();
        };

    }

})();