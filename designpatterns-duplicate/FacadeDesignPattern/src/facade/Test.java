package facade;

public class Test {
    public static void main(String[] args) {
        BankAccountFacade bankAccountFacade=new BankAccountFacade(126278091,1234);
        bankAccountFacade.depositCash(900);
        bankAccountFacade.withdrawCash(400);
        bankAccountFacade.depositCash(100);
    }
}
