public class ProductSelectorCtrl {
    
	@AuraEnabled
    public static List<Pricebook2> getPricebookList() {
        return [SELECT Name 
               FROM Pricebook2
               Limit 300];
    }
    
    @AuraEnabled
    public static List<PricebookEntry> getAvailableProductsList(Id pricebook2Id) {
        return [SELECT Product2.Name, UnitPrice
                FROM PricebookEntry
                WHERE IsActive = true
                AND Pricebook2Id = : pricebook2Id
                Limit 200];
        
    }
}