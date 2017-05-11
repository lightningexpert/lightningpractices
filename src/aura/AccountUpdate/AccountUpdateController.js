({
    save : function(component, event, helper) {

        var saveAction = component.get("c.saveRecord");
        saveAction.setParams({ acc: JSON.stringify(component.get("v.acc"))});
        console.log('test 1');
        saveAction.setCallback(this, function(response){
            var state = response.getState();
            
            if( state === 'SUCCESS') {
                alert('from server' + response.getReturnValue());
            }
            
        });

        console.log('ted')

       $A.enqueueAction(saveAction);
    }
})