/// <reference path="../interfaces/interfaces.ts" />
module angularWithTS.Services {

    export class PlayListService implements angularWithTS.Interfaces.IPlaylistService
    {
        httpService: ng.IHttpService;
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlayList = () => {
            // for the purpose of this demo i am returning hard coded values, however in real world application
            // you would probably use "this.httpService.get" method to call backedn rest apis to fetch data

            var res: Array<angularWithTS.Interfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];

            return res;
        }
    }

    angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
}