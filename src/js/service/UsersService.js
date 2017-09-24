(function () {
    'use strict';

    angular.module('elodin').factory('UsersService', UsersService);

    UsersService.$inject = ['$firebaseObject'];

    function UsersService($firebaseObject) {

        return function (uid) {
            var ref = 'users';

            if (uid) {
                ref += '/' + uid;
            }

            return $firebaseObject(firebase.database().ref(ref));
        };
    }

})();