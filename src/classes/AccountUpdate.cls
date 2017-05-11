public class AccountUpdate {
    @AuraEnabled
    public static String saveRecord(String acc) {
    	Account thisAccount = (Account)JSON.deserialize(acc, Account.class);
    	return thisAccount.Name;
        
    }

    @AuraEnabled
    public static Account init( String accId) {
    	//Account thisAccount = (Account)JSON.deserialize(acc, Account.class);
    	return [SELECT Name
    			FROM Account WHERE Id =: accId LIMIT 1];
        
    }
}