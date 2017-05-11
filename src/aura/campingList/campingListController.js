({
    doInit : function(component, event, helper) {
        var action = component.get("c.getItems");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if( component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    
    handleAddItem: function(component, event, helper) { 
        var newItem = event.getParam("item");
        console.log(newItem);
        //helper.createItem(component, newItem);
        var action = component.get("c.saveItem");
        action.setParams({
            "item":newItem
        });
        
        action.setCallback(this, function(){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }     
        });
        
        $A.enqueueAction(action);
        
    }
})