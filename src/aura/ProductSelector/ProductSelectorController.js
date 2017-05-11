({
	getPriceBookList : function(component, event, helper) {
        
        helper.showSpinner(component); 
		let queryAction = component.get("c.getPricebookList");
        
        queryAction.setCallback(this, function(response){
            let state = response.getState();
            console.log(state);
            
            if( state === 'SUCCESS') {
                component.set("v.availablePriceBooks", response.getReturnValue());
				helper.removeSpinner(component);
            } else {
                helper.removeSpinner(component);
            }
            
        });
        
        $A.enqueueAction(queryAction);
	},
    
    pricebookSelected : function(component, event, helper) {
		let selected = component.find("InputSelectSingle");
		
        let selectedId = selected.get("v.value");
        helper.getProducts(component, selectedId);
    }
    
})