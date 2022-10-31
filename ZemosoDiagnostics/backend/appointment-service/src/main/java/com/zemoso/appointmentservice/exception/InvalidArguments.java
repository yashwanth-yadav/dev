package com.zemoso.appointmentservice.exception;

public class InvalidArguments extends RuntimeException {
    public InvalidArguments(String msg) {
        super(msg);
    }
}
