(function () {
    var app = angular.module("ContactApp");
    app.controller("HeaderCtrl", HeaderCtrl );
    function HeaderCtrl(AppDataServiceSvc) {
        this.appTittle = AppDataServiceSvc.name;
    }
})();
