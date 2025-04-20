package com.jt.bean_life_cycle;

import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Component
public class Whatsup {
    public Whatsup() {
        System.out.println("Whatsup Object is constructed");
    }

    @PostConstruct
    public void initWhatsupObj() {
        System.out.println("Init method of Whatsup class");
    }

    @PreDestroy
    public void destroyEmployeeObj() {
        System.out.println("Whatsup Object destroyed");
    }
}
