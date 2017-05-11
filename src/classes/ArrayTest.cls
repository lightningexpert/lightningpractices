public class ArrayTest {
    
    @AuraEnabled
    public static void getStringArrs(string strs) {
        System.debug(strs);
		List<simple> fieldList = (List<simple>) JSON.deserialize(strs, List<simple>.class);
        system.debug(fieldList[0]);
    }
    
    public class simple {
        @AuraEnabled
        public String a {get; set;}
        
        @AuraEnabled
        public String b {get; set;}
        
    }

}