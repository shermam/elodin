(function () {
    'use strict';

    angular.module('elodin').factory('CreateUserService', CreateUserService);

    CreateUserService.$inject = ['$state', 'UsersService'];

    function CreateUserService($state, UsersService) {

        return function (auth) {

            var users = UsersService();

            return users.$loaded()
                .then(function () {
                    users[auth.user.uid] = users[auth.user.uid] || {};
                    users[auth.user.uid].displayName = auth.user.displayName;
                    users[auth.user.uid].email = auth.user.email;
                    users[auth.user.uid].uid = auth.user.uid;
                    return users.$save();
                })
                .then(function () {
                    $state.go('areacliente');
                }).catch(function (error) {
                    console.log('Deu erro', error);
                });
        };

    }

})();