package com.jt.bean_life_cycle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeanLifeCycleApplication {

	public static void main(String[] args) {
		System.out.println("main start");
		SpringApplication.run(BeanLifeCycleApplication.class, args);
		System.out.println("container started beans are ready to use");
		// beans are used
		System.out.println("main end");

		
	}
}

/**
 * Bean Life Cycle
 * ===============
 * 
 * Bean Instantiation
 * Dependency Injection
 * Bean Initialization
 * Bean Use
 * Bean destruction
 */
