({
	init : function(component, event, helper) {
		//create simple objects
        var simples = [];
        simples.push({"a": "a","b": "b"});
        simples.push({"a": "c","b": "d"});
        //set objects into attribute
        var origns = component.set("v.strings", simples);

        var passStrs = component.get("c.getStringArrs");
        passStrs.setParams({ "strs" : JSON.stringify(component.get("v.strings")) });//pass parameter
        
        passStrs.setCallback(this, function(response){
            let state = response.getState();
            
            if( state === 'SUCCESS') {
                console.log('good');
            } 
            
        });
        $A.enqueueAction(passStrs);
	}
})