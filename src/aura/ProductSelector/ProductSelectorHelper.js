({
    showSpinner: function(cmp) {
        let cmpTarget = cmp.find('spin');
        $A.util.removeClass(cmpTarget,'slds-hide');
        $A.util.addClass(cmpTarget, 'slds-show');
    },
    
    removeSpinner: function(cmp) {
        let cmpTarget = cmp.find('spin');
        $A.util.removeClass(cmpTarget,'slds-show');
        $A.util.addClass(cmpTarget, 'slds-hide'); 
    },
    
    getProducts : function(component,  pricebookId) {
        
        this.showSpinner(component); 
		let queryAction = component.get("c.getAvailableProductsList");
        queryAction.setParams({ pricebook2Id : pricebookId });
        
        queryAction.setCallback(this, function(response){
            let state = response.getState();
            
            if( state === 'SUCCESS') {
                component.set("v.availableProducts", response.getReturnValue());
				this.removeSpinner(component);
            } else {
                this.removeSpinner(component);
            }
            
        });
        
        $A.enqueueAction(queryAction);
	}
})