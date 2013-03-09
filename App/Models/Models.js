function Content(ContentId, ContentName, ContentDescription, ContentPath, ContentFile, ContentImage, ContentType, ContentDate, ContentDuration,ContentDepartment, ContentPlu)
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



