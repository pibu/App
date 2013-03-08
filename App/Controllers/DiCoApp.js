angular.module('DiCoApp', ['LoginServices', 'UsAcCoPoGrServices', 'ContentServices' ]).config(function ($routeProvider)
{
    $routeProvider.when('/Home', { templateUrl: 'Views/Home.html', controller: HomeCtrl });
    $routeProvider.when('/Login', { templateUrl: 'Views/Login.html' , controller: LoginCtrl});
    $routeProvider.when('/ListaAzioni/:GroupId', { templateUrl: 'Views/ListaAzioni.html', controller: ListaAzioniCtrl });
    $routeProvider.when('/Upload/:GroupId', { templateUrl: 'Views/Upload.html', controller: UploadCtrl });
    $routeProvider.when('/Palinsesti/:GroupId', { templateUrl: 'Views/Palinsesti.html', controller: PalinsestiCtrl });
    $routeProvider.when('/Palinsesto/:GroupId', { templateUrl: 'Views/Palinsesto.html', controller: PalinsestiCtrl });
    $routeProvider.when('/PuCo/:GroupId', { templateUrl: 'Views/PuCo.html', controller: PuCoCtrl });
    $routeProvider.when('/Contenuti/:GroupId', { templateUrl: 'Views/Contenuti.html', controller: ContenutiCtrl });
    $routeProvider.when('/ListaPuCo/', { templateUrl: 'Views/ListaPuCo.html', controller: ListaPuCoCtrl });
    $routeProvider.otherwise({ redirectTo: '/Home' });
});


