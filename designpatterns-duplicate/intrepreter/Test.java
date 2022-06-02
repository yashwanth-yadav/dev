package com.cool.intrepreter;

public class Test {
    public static void main(String[] args) {
        InterpreterEngine interpreterEngine=new InterpreterEngine();

        InterpreterClient interpreterClient=new InterpreterClient(interpreterEngine);

        System.out.println("Addition Example :- " + interpreterClient.interpret("add 300 and 75"));
        System.out.println("---------------------------------------------------------------------------------");
        System.out.println("Subtraction Example:- = " + interpreterClient.interpret("subtract 40 from 100"));

    }
}
