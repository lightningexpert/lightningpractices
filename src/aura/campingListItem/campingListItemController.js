({
	packItem : function(component, event, helper) {
        var item = Component.get("v.item");
        item.Packed__c = true;
		component.set("v.item", item);
        event.getSource().set("v.disabled", true);
	}
})