function HomeCtrl($scope, $location)
{
    $scope.Login = function ()
    {
        $location.path('/Login');
    }
}

