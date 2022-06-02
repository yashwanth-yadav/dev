package com.cool.observer;

public class Test {
    public static void main(String[] args) {
        //creating stocks
        IBM ibm=new IBM();
        Apple apple=new Apple();
        Microsoft microsoft=new Microsoft();

        //Create Observers
        Mobile mobile = new Mobile();
        DisplayBoard displayBoard = new DisplayBoard();

        //Register Observers for stocks
        ibm.registerObserver(mobile);
        ibm.registerObserver(displayBoard);

        microsoft.registerObserver(mobile);
        microsoft.registerObserver(displayBoard);

        apple.registerObserver(mobile);
        apple.registerObserver(displayBoard);

        //Setting some random stock prices
        for(int i =0; i<300; i++){
            ibm.updateStockPrice((int)(Math.random()*101)+1);
            microsoft.updateStockPrice((int)(Math.random()*101)+1);
            apple.updateStockPrice((int)(Math.random()*101)+1);
        }
    }
}
