var angularWithTS;
(function (angularWithTS) {
    /// <reference path="../services/playlistservice.ts" />
    /// <reference path="../interfaces/interfaces.ts" />
    /// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
    (function (controllers) {
        var TSDemoController = (function () {
            function TSDemoController(playListService) {
                var _this = this;
                this.getFavorites = function () {
                    _this.favorites = _this.playListService.getPlayList();
                };
                this.playListService = playListService;
            }
            TSDemoController.$inject = ["angularWithTS.Services.PlayListService"];
            return TSDemoController;
        })();
        controllers.TSDemoController = TSDemoController;

        angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
    })(angularWithTS.controllers || (angularWithTS.controllers = {}));
    var controllers = angularWithTS.controllers;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=tsDemoController.js.map
