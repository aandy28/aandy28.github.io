((): void=> {
    var app = angular.module("angularWithTS", ['ngRoute']);
    app.config(angularWithTS.Routes.ConfigureRoutes);
})() 