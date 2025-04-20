package com.jt.miscellaneous_topics;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MiscellaneousTopicsApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(MiscellaneousTopicsApplication.class, args);
	}

	// This method is implicitely extecutes after the Spring Container is fully initialized / prepared
	// preloading the data into a database
	// logging some startup info
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Inside thr run() of CommandLineRunner");
	}

}
