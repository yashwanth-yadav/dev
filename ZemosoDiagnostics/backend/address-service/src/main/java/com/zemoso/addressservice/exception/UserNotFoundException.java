package com.zemoso.addressservice.exception;

public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(String msg) {
        super(msg);
    }
}
