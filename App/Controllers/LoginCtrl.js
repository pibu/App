function LoginCtrl($scope, $location, $http, LoginService)
{
    $scope.Submit = function ()
    {
        $scope.errors = ""
        var data =
        {
            //UserName: $scope.username,
            //Password: $scope.password,
            UserName: "admin",
            Password: "@@admin@@",
            RememberMe: false
        }
        LoginService.login(data, $scope);
    }
}