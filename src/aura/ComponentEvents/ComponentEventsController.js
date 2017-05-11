({
	 handleClick : function(component, event) {
		console.log('Controller handle click');
        var compEvent = component.getEvent("ComponentEventExample");
        compEvent.setParams({ 'message': 'Clicked! ' + 
            (new Date().toGMTString()) });
        compEvent.fire();
    },
    handleSampleEvent : function(component, event, helper) {
		console.log('Controller handle sample event');  
        console.log(event.getParam( 'message'));
		component.set("v.setMeOnEventFiring", "OK I Set It " + event.getParam( 'message'));        
    }
})