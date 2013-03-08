function ListaAzioniCtrl($scope, $location, $routeParams, UsAcCoPoGrService)
{
    UsAcCoPoGrService.GetUserActionGroup($scope, $routeParams.GroupId);

    $scope.SelAction = function (Action)
    {
        $location.path(Action + $routeParams.GroupId);
    }
}