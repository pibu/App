
function UploadCtrl($scope, $location, $timeout, $routeParams, $resource, $log, UploadService)
{

    var GroupId = $routeParams.GroupId;

    $(function ()
    {
        'use strict';

        // Initialize the jQuery File Upload widget:
        $('#fileupload').fileupload();

        $('#fileupload').fileupload('option',
        {
            maxFileSize: 5000000000,
            resizeMaxWidth: 1920,
            resizeMaxHeight: 1200,
            dataType: 'json',
            always: function (e, data)
            {
                var ppp = $resource('/api/Upload/:idGroup');
                ppp.foo = 'bar';
                ppp.something = 123;
                ppp.$save();
            }
        });
    });

    function InsertContentElementDb(data)
    {
        var i = 0;
        results = data.result;
        for (var i in results)
        {
            var content = new Content(1, "cippo", "lippo", "path", "file", "image", "tipo", 2013 - 03 - 08, 10, 1, 1);
            //var contents = ContentUpload.query({idGroup: 1}),function() {};
            //var contents = ContentUpload.get({ idGroup: 1 }, function ()
            //{
              //  console.log(contents);
            //});
            
            ContentUpload.get(
            { idGroup: 1 }, //params
            function (data)
            {   //success
                console.log("ok");
            },
            function (data)
            {   //failure
                console.log("errore");
            });
                
            //alert(results[i].error);
            i++;
        }
    }
}
   

function Content(ContentId, ContentName, ContentDescription, ContentPath, ContentFile, ContentImage, ContentType, ContentDate, ContentDuration, ContentDepartment, ContentPlu)
{
    this.ContentId = ContentId;
    this.ContentName = ContentName;
    this.ContentDescription = ContentDescription;
    this.ContentPath = ContentPath;
    this.ContentFile = ContentFile;
    this.ContentImage = ContentImage;
    this.ContentType = ContentType;
    this.ContentDate = ContentDate;
    this.ContentDuration = ContentDuration;
    this.ContentDepartment = ContentDepartment;
    this.ContentPlu = ContentPlu;
};

function UploadFile(_GroupId, _ContentType, _FileName, _Status)
{
    this.GroupId = _GroupId;
    this.ContentType = _ContentType;
    this.FileName = _FileName;
    this.Stato = _Status;
}
