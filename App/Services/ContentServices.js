angular.module('ContentServices', ['ng']).
    service('ContentService', function ($http, $location)
    {
        return {
            GetContentServer: function (idGroup, $scope)
            {
                $http.get('/api/ContentByGroup/'+ idGroup)
                    .success(function (data, status, headers)
                    {
                            $scope.Contents = data;
                    })
                    .error(function (data, status)
                    {
                        $scope.errors = "Errore server durante il prelievo dei dati";
                    });
            },
            DeleteContentServer: function (idGroup,index, $scope)
            {
                $http.delete('/api/ContentByGroup/' + idGroup)
                    .success(function (data, status, headers)
                    {
                        if (status == 200)
                        $scope.Contents.splice(index,1);
                    })
                    .error(function (data, status)
                    {
                        $scope.errors = "Errore server durante il prelievo dei dati";
                    });
            },
        };
    });