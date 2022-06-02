package com.luv2code.springboot.thymeleafdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ThymeleafdemoApplication {
	static String[] args2;

	public static void main(String[] args) {
		args2=args;
		SpringApplication.run(ThymeleafdemoApplication.class, args);
	}

}
