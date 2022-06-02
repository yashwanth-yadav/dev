package com.cool.chainofresponsibility;

public class SubtractNumbers implements Chain{
    private Chain nextChain;

    @Override
    public void setNextChain(Chain nextChain) {
        this.nextChain=nextChain;
    }

    @Override
    public void calculate(Numbers request) {
        if(request.getCalcWanted()=="sub"){
            System.out.print(request.getNumber1() + " - " + request.getNumber2() + " = "+
                    (request.getNumber1()-request.getNumber2()));
        }
        else {
            nextChain.calculate(request);
        }
    }
}
