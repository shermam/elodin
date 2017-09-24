(function () {
    'use strict';

    angular.module('elodin').factory('AuthService', AuthService);

    AuthService.$inject = ['$q', '$firebaseAuth'];

    function AuthService($q, $firebaseAuth) {

        var auth = $firebaseAuth();
        auth.getUser = function () {
            return $q(function (resolve, reject) {

                if (auth.user) {
                    resolve(auth.user);
                    return;
                }

                auth.$onAuthStateChanged(function (user) {
                    auth.user = user;

                    if (user) {
                        resolve(user);
                    } else {
                        reject(new Error('Nenhum usuário logado'));
                    }
                });
            });
        };

        auth.$onAuthStateChanged(function (user) {
            auth.user = user;
        });

        return auth;

    }

})();