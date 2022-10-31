package com.zemoso.patientservice.exception;

public class InvalidArgumentsException extends RuntimeException{
    public InvalidArgumentsException(String message) {
        super(message);
    }
}
