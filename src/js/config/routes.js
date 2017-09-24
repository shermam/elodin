(function () {
    'use strict';

    angular.module('elodin').config(config);

    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state({
                name: 'teste',
                url: '/teste',
                templateUrl: 'teste.html',
                controller: 'TesteController',
                controllerAs: 'teste',
            })
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController',
                controllerAs: 'home',
            })
            .state({
                name: 'institucional',
                url: '/institucional',
                templateUrl: 'institucional.html',
                controller: 'InstitucionalController',
                controllerAs: 'institucional',
            })
            .state({
                name: 'servicos',
                url: '/servicos',
                templateUrl: 'servicos.html',
                controller: 'ServicosController',
                controllerAs: 'servicos',
            })
            .state({
                name: 'contato',
                url: '/contato',
                templateUrl: 'contato.html',
                controller: 'ContatoController',
                controllerAs: 'contato',
            })
            .state({
                name: 'clientes',
                url: '/clientes',
                templateUrl: 'clientes.html',
                controller: 'ClientesController',
                controllerAs: 'clientes',
            })
            .state({
                name: 'areacliente',
                url: '/areacliente',
                templateUrl: 'areacliente.html',
                controller: 'AreaClienteController',
                controllerAs: 'areacliente',
            })
            .state({
                name: 'login',
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController',
                controllerAs: 'login',
            })
            .state({
                name: 'registro',
                url: '/registro',
                templateUrl: 'registro.html',
                controller: 'RegistroController',
                controllerAs: 'registro',
            })
            .state({
                name: 'admin',
                url: '/admin',
                templateUrl: 'admin.html',
                controller: 'AdminController',
                controllerAs: 'admin',
            })
            .state({
                name: 'user',
                url: '/user/{uid}',
                templateUrl: 'userConfig.html',
                controller: 'UserConfigController',
                controllerAs: 'userConfig',
            });
    }

})();