package com.luv2code.springboot.thymeleafdemo.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Aspect
@Component
public class CRMLoggingAspect {
    private Logger myLogger=Logger.getLogger(getClass().getName());

    @Pointcut("execution(* com.luv2code.springboot.thymeleafdemo.service.FlightServiceImpl.deleteById(..))")
    private void forDelete(){
        //pointcut
    }

    @Pointcut("execution(* com.luv2code.springboot.thymeleafdemo.service.FlightServiceImpl.save(..))")
    private void forSave(){
        //pointcut
    }


    @Pointcut("forDelete()||forSave()")
    private void forAppFlow(){}

    @Before("forAppFlow()")
    public void before(JoinPoint theJoinPoint){
        String method=theJoinPoint.getSignature().toShortString();
        myLogger.info("===>> changes are being made to planes avalilable : "+method);
        Object[] args=theJoinPoint.getArgs();
        for (Object tempArg:args){
            myLogger.info("===>> argument : "+method+"\n\n\n\n\n");
        }
    }

    @AfterReturning(
            pointcut = "forAppFlow()",
            returning = "theResult"
    )
    public void afterReturning(JoinPoint theJoinPoint,Object theResult){
        String method=theJoinPoint.getSignature().toShortString();
        myLogger.info("===>> changes are made by using method "+method);

    }
}
