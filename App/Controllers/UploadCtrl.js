
function UploadCtrl($scope, $location, $timeout)
{
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
            done: function (e, data)
            {
                InsertContentElementDb(data)
            }
        });
    });
}
   
function InsertContentElementDb(data)
{
    var i = 0;
    results = data.result;
    for (var i in results)
    {
        alert(results[i].error);
        i++;
    }
}