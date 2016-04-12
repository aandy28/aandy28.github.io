/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.controllers {
    export class TSDemoController {

        playListService: angularWithTS.Interfaces.IPlaylistService;
        static $inject = ["angularWithTS.Services.PlayListService"];
        constructor(playListService: angularWithTS.Interfaces.IPlaylistService) {
            this.playListService = playListService;
        }
        favorites: Array<angularWithTS.Interfaces.ITrack>;

        getFavorites = () => {
            this.favorites = this.playListService.getPlayList();
        } 
    }

    angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
}