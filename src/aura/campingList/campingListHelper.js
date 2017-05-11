({
	createItem : function(component, newItem) {
		var action = component.get("c.saveItem");
        action.setParams({
            "item":newItem
        });
        console.log(newItem);
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if( component.isValid() && state === "SUCCESS") {
                var list = component.get("v.items");
                list.push(response.getReturnValue());
                component.set("v.items", list);
                console.log('item added');
            } 

        });
        
        $A.enqueueAction(action);
	}
})