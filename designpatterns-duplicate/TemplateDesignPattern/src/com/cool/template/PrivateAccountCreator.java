package com.cool.template;

public class PrivateAccountCreator extends AccountCreator{
    @Override
    public void generateAccountNumber() {
        System.out.println("private account number generated...");
    }

    @Override
    public void sendATMCard() {
        super.sendATMCard();
        System.out.println("send gift movie tickets..");
    }
}
