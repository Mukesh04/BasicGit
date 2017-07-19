var app = angular.module('routing-app', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('firstMessage', {
        url:'/first-msg',
        template: '<strong>This is my first Message</strong>'
    })
}]);