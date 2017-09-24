(function () {
    'use strict';

    angular.module('elodin').factory('DialogService', DialogService);

    DialogService.$inject = ['$mdDialog'];

    function DialogService($mdDialog) {

        return {
            alert: function (title, message, ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title(title)
                        .textContent(message)
                        .ariaLabel(message)
                        .ok('Ok')
                        .targetEvent(ev)
                );
            }
        };
    }

})();