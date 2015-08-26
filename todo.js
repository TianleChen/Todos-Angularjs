var app = angular.module('todo', []);
app.controller('myCtrl', function($scope) {
    $scope.todolist = [
    { name: 'task1', click: false},
    { name: 'task2', click: false}
    ];
    $scope.markall = false;
    $scope.numrem = $scope.todolist.length;

    $scope.add = function (event) {
    	var x = event.which;
    	if (x == 13 && document.getElementById("addtodo").value) {
    		$scope.todolist.push({name: document.getElementById("addtodo").value, click: false});
    		document.getElementById("addtodo").value = "";
    	};
    	$scope.numrem = $scope.todolist.length;
    };

    $scope.Markall = function () {
    	angular.forEach($scope.todolist, function (todo) {
    		todo.click = $scope.markall;
    	});
    };

    $scope.clear = function () {
    	var oldtodolist = $scope.todolist;
    	$scope.todolist = [];
    	angular.forEach(oldtodolist, function (todo) {
    		if (!todo.click) {$scope.todolist.push(todo)};
    	});
        $scope.numrem = $scope.todolist.length;
    };

})