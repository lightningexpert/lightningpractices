({
    initPage : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Account",
            "recordTypeId": "01241000000ytIf"
        });
        createRecordEvent.fire();

    }
})