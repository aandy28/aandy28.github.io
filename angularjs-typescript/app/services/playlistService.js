var angularWithTS;
(function (angularWithTS) {
    /// <reference path="../interfaces/interfaces.ts" />
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
                this.getPlayList = function () {
                    // for the purpose of this demo i am returning hard coded values, however in real world application
                    // you would probably use "this.httpService.get" method to call backedn rest apis to fetch data
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 5 },
                        { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { title: "Yellow", artist: "coldplay", rating: 4.5 },
                        { title: "Skyfall", artist: "Adele", rating: 4.5 }
                    ];

                    return res;
                };
                this.httpService = $http;
            }
            PlayListService.$inject = ["$http"];
            return PlayListService;
        })();
        Services.PlayListService = PlayListService;

        angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
    })(angularWithTS.Services || (angularWithTS.Services = {}));
    var Services = angularWithTS.Services;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=playlistService.js.map
