package facade;

public class BankAccountFacade {
    private int accNum;
    private int secCode;

    AccountNumberCheck accountNumberCheck;
    FundsCheck fundsCheck;
    SecurityCodeCheck securityCodeCheck;


    public BankAccountFacade(int accNum,int secCode){
        System.out.println("Welcome to ABC Bank");
        this.accNum=accNum;
        this.secCode=secCode;
        accountNumberCheck=new AccountNumberCheck();
        securityCodeCheck=new SecurityCodeCheck();
        fundsCheck=new FundsCheck();
    }

    public int getAccNum() {
        return accNum;
    }

    public int getSecCode() {
        return secCode;
    }

    public void withdrawCash(double cashToGet){
        if(accountNumberCheck.accountActive(accNum)&&securityCodeCheck.isCodeCorrect(secCode)&&fundsCheck.haveEnoughMoney(cashToGet)){
            System.out.println("Transaction complete...\n");
        }
        else
            System.out.println("Transaction failed...\n");
    }

    public void depositCash(double cashToDeposit){
        if(accountNumberCheck.accountActive(accNum) &&
                securityCodeCheck.isCodeCorrect(secCode)) {

            fundsCheck.makeDeposit(cashToDeposit);

            System.out.println("Transaction Complete\n");

        } else {

            System.out.println("Transaction Failed\n");

        }

    }
}
