public class testActionExt {
	
    public testActionExt(ApexPages.StandardController ctrl) {
        
    }
     
    public PageReference cancel() {
        Id recordId = ApexPages.currentPage().getParameters().get('id');
        PageReference pr = new PageReference('/'+recordId);
        pr.setRedirect(true);
        return pr;
    }
}