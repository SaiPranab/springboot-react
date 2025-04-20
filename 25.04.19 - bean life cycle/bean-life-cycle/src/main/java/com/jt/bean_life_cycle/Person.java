package com.jt.bean_life_cycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
// @Component, @Service, @Repository, @Controller, @RestController

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Component
public class Person {
    private Whatsup whatsup;

    public Person() {
        System.out.println("Person Object is constructed");
    }

    @Autowired
    public void setWhatsup(Whatsup whatsup) {
        System.out.println("Whatsup dependency is injected inside Person class");
        this.whatsup = whatsup;
    }

    @PostConstruct
    public void initPersonObj() {
        System.out.println("Init method of Person class");
    }

    @PreDestroy
    public void destroyEmployeeObj() {
        System.out.println("Person Object destroyed");
    }
}
