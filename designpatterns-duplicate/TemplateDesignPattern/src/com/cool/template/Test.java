package com.cool.template;

public class Test {
    public static void main(String[] args) {
        BusinessAccountCreator businessAccount=new BusinessAccountCreator();
        businessAccount.createAccount();

        System.out.println("----------------------------------------------------------------------");

        PrivateAccountCreator privateAccount=new PrivateAccountCreator();
        privateAccount.createAccount();
    }
}
