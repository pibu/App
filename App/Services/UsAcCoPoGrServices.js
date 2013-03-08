angular.module('UsAcCoPoGrServices', []).
    service('UsAcCoPoGrService', function ($http, $location)
    {
        var UsAcCoPoGroups=new Array;
        var ComPointGroups = new Array;
        var UserActions = new Array;

        return {
            GetUsAcCoPoGroups: function ($scope)
            {
                $http.get('/api/UserAction')
                    .success(function (data)
                    {
                        if (data != null)
                        {
                            UsAcCoPoGroups = data;
                            GetComPointGroups(UsAcCoPoGroups, ComPointGroups);
                            $scope.ComPointGroups = ComPointGroups;
                        }
                    })
                    .error(function (data)
                    {
                        $scope.errors = "Richiesta dati punti comunicazione al server fallita";
                    });
            },
            GetUserActionGroup: function ($scope,Group)
            {
                GetUserActions(UsAcCoPoGroups, UserActions, Group);
                $scope.UserActions = UserActions;
            },
        };
    });

function GetComPointGroups(datiActionsGroups, ComPointGroups)
{
    var k = 0;
    var result = 0;
    var GroupsTmp = new Array;
    try
    {
        for (k in datiActionsGroups)
        {
            if (datiActionsGroups[k] != null)
            {
                GroupsTmp = datiActionsGroups[k].CommunicationPointGroups;
                if (GroupsTmp.length <= 0) continue;
                InsertGroupNoDuplicate(ComPointGroups, GroupsTmp);
            }
            k++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}

function InsertGroupNoDuplicate(ComPointGroups, GroupsTmp)
{
    var result = 0;
    try
    {
        var i = 0;
        var group;
        for (var i in GroupsTmp)
        {
            group = GroupsTmp[i];
            if (IsGroupDuplicate(ComPointGroups, group) == 0)
            {
                ComPointGroups[ComPointGroups.length] = group;
            }
            i++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}

function IsGroupDuplicate(ComPointGroups, Group)
{
    var result = 0;
    try
    {
        var i = 0;
        var _group;
        for (var i in ComPointGroups)
        {
            _group = ComPointGroups[i];
            if (Group.CommunicationPointGroupId == _group.CommunicationPointGroupId)
            {
                result = 1;
                break;
            }
            i++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}

function GetUserActions(datiActionsGroups, UserActions, Group)
{
    var k = 0;
    var result = 0;
    var UserActionTmp;
    var GroupsTmp = new Array
    try
    {
        for (k in datiActionsGroups)
        {
            if (datiActionsGroups[k] != null)
            {
                GroupsTmp = datiActionsGroups[k].CommunicationPointGroups;
                if (GroupsTmp.length <= 0) continue;
                UserActionTmp = datiActionsGroups[k];
                InsertUserActionNoDuplicate(GroupsTmp,UserActionTmp,UserActions,Group);
            }
            k++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}

function InsertUserActionNoDuplicate(GroupsTmp, UserActionTmp, UserActions, Group)
{
    var result = 0;
    try
    {
        var i = 0;
        var group;
        for (var i in GroupsTmp)
        {
            group = GroupsTmp[i];
            if (group.CommunicationPointGroupId != Group) continue;

            if (IsUserActionDuplicate(UserActions, UserActionTmp) == 0)
            {
                UserActions[UserActions.length] = UserActionTmp;
            }
            i++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}

function IsUserActionDuplicate(UserActions, UserActionTmp)
{
    var result = 0;
    try
    {
        var i = 0;
        for (var i in UserActions)
        {
            if (UserActions[i].UserActionId == UserActionTmp.UserActionId)
            {
                result = 1;
                break;
            }
            i++;
        }
    }
    catch (e)
    {
        result = -1;
    }
    return result;
}


    