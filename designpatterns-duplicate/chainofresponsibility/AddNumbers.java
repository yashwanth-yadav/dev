package com.cool.chainofresponsibility;

public class AddNumbers implements Chain{
    private Chain nextChain;

    @Override
    public void setNextChain(Chain nextChain) {
        this.nextChain=nextChain;
    }

    @Override
    public void calculate(Numbers request) {
        if(request.getCalcWanted()=="add"){
            System.out.print(request.getNumber1() + " + " + request.getNumber2() + " = "+
            (request.getNumber1()+request.getNumber2()));
        }
        else {
            nextChain.calculate(request);
        }
    }
}
