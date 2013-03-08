function ListaPuCoCtrl($scope, $location, $routeParams, $http, UsAcCoPoGrService)
{
    UsAcCoPoGrService.GetUsAcCoPoGroups($scope);
    
    $scope.SelGroup = function (GroupId)
    {
        $location.path('/ListaAzioni/' + GroupId);
    }
}


