function ContenutiCtrl($scope, $location, $routeParams, $http, ContentService)
{
    ContentService.GetContentServer($routeParams.GroupId, $scope);

    $scope.Delete = function (IdContenuto,index)
    {
        ContentService.DeleteContentServer(IdContenuto,index, $scope);
    }
}