(function () {
    'use strict';

    angular.module('elodin').factory('FileService', FileService);

    FileService.$inject = ['$firebaseStorage'];

    function FileService($firebaseStorage) {

        return function (uid, fileId) {
            var storageRef = firebase.storage().ref('files/' + uid + '/' + fileId);
            return $firebaseStorage(storageRef);
        };

    }

})();