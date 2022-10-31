package com.zemoso.userservice.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserRestExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<UserErrorResponse> handleInvalidUser(UserNotFoundException exception){
        UserErrorResponse userErrorResponse=new UserErrorResponse();

        userErrorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        userErrorResponse.setMessage(exception.getMessage());
        userErrorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(userErrorResponse,HttpStatus.NOT_FOUND);
    }
}