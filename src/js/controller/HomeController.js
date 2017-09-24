(function () {
    'use strict';

    angular.module('elodin').controller('HomeController', HomeController);

    HomeController.$inject = ['$timeout'];

    function HomeController($timeout) {

        var home = this;

        home.title = "Elodin App";
    }

})();