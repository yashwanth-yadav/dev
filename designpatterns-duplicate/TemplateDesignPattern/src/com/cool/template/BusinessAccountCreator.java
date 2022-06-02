package com.cool.template;

public class BusinessAccountCreator extends AccountCreator{
    @Override
    public void generateAccountNumber() {
        System.out.println("Bussiness acc num generated");
    }


    public void sendATMCard(){
        super.sendATMCard();
        System.out.println("send a small gift voucher..");
    }
}
