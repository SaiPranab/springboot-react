package com.jt.bean_life_cycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Component
public class Employee {
    private Person person;

    public Employee() {
        System.out.println("Employee Object is constructed");
    }

    @Autowired
    public void setPerson(Person person) {
        System.out.println("Person Dependency Injected through setter method in Employee");
        this.person = person;
    }

    @PostConstruct
    public void initEmployeeObj() {
        System.out.println("Init method of Employee class");
    }

    @PreDestroy
    public void destroyEmployeeObj() {
        System.out.println("Employee Object destroyed");
    }
}
