angular.module('LoginServices', []).
    service('LoginService', function ($http,$location)
    {
        return {
            login: function (data,$scope)
            {
                $http.post('/Account/JsonLogin/', data)
                    .success(function (data, status, headers)
                    {
                        if (data.success == true)
                        {
                            $location.path('/ListaPuCo/');
                        }
                        else
                        {
                            $scope.errors = "L'utente non è stato riconosciuto";
                        }
                    })
                    .error(function (data, status)
                    {
                        $scope.errors = "Errore server durante il login";
                    });
            },
        };
    });
    