angular.module('UploadServices', ['ngResource']).
    factory('UploadService', function ($resource)
    {
        return $resource("/api/Upload/:idGroup");
    });
  

