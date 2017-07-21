(function () {
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function ($http) {

       // this.contacts = [];

        var self = this;
        
        self.getContacts = function () {
            return $http.get('./db.json');
        }

        self.update = function (userData) {
            $http.put('./db.json/' + userData.id, userData);
        }

        self.add = function (userData) {
            $http.post('./db.json/', userData);
        }

        self.delete = function (userData) {
            $http.delete('./db.json/' + userData.id, userData);
        }


    });

})();
