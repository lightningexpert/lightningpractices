({

  selectAddress:      function(component, event, helper) {
    const address = component.find('sendTo');
    const addressId     = address.get('v.value'); // The default lightning:option has a {! null } value

    if (addressId && addressId.trim() !== '') {
        component.find("street").set("v.value", addressId);
      component.set("v.customAddress", true); // lightning:input has to be disabled
    } else {
      component.find('street').set("v.value", '');
        component.set('v.customAddress', false); // lightning:input has to be enabled
    }
      
    event.preventDefault();
    return false;

  }

})