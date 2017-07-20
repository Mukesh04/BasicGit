var app = angular.module("myApp" , []);

app.controller("myCtrl", myCtrl);

//app.service("AppDataserviceSvc", Student );



    function myCtrl($scope) {
    $scope.errorMsg = "";
    $scope.editMode = false;

        var Student = function (name,age,dob,dept){
            this.name = name;
            this.age = age;
            this.dob = dob;
            this.dept = dept;
        }

    $scope.studentArray = [
        {
            "name" : "Sandeep",
            age : 27,
            dob : "20-07-89",
            "dept": "Computer Science"
        },
        {
            "name" : "Santhosh",
            age : 28,
            dob : "01-05-89",
            "dept": "Mechanical"
        },
        {
            "name" : "Shishir",
            age : 27,
            dob : "27-07-89",
            "dept": "EEE"
        },
        {
            "name" : "Suhas",
            age : 26,
            dob : "11-05-91",
            "dept": "Computer Science"
        },
        {
            "name" : "Mukesh",
            age : 25,
            dob : "18-09-92",
            "dept": "Information Science"
        }
    ]

    $scope.selectStudent = function(index){
        $scope.selectedStudent = $scope.studentArray[index];
    }

    $scope.addItem = function () {
        $scope.studentArray.push(new Student($scope.name,$scope.age,$scope.dob,$scope.dept));
        $scope.name = "";
        $scope.age = "";
        $scope.dob = "";
        $scope.dept = "";
        $scope.errorMsg = "Student details Added Successfully";
    }

    $scope.removeItem = function (index) {
        $scope.studentArray.splice(index,1);
        $scope.errorMsg = "Student details  Removed Successfully";
    }

    $scope.triggerMode = function(){
        $scope.editMode = !$scope.editMode;
    }

}
