package model;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Student implements InitializingBean, DisposableBean{
    private int roll;
    private String name;

    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Student() {
        System.out.println("Student Object is constructed");
    }

    // public Student(int roll, String name) {
    //     System.out.println("parameterized constructor is called");
    //     this.roll = roll;
    //     this.name = name;
    // }

    // static factory method
    // public static Student getStudent() {
    //     System.out.println("static factory method called");
    //     return new Student(101, "Varun");
    // }

    // <constructor-arg> in the xml file





    // bean initialisation phase
    // custom init method
    // public void initializeStudentObject() {
    //     System.out.println("custom init method called");
    //     name = "Arthur";
    //     roll = 100;
    // }

    // by implementing InitializingBean interface
    @Override
    public void afterPropertiesSet()  {
        System.out.println("afterPropertiesSet() is called");
        name = "Arthur";
        roll = 100;
    }

    // by using @PostConstruct annotaion => SpringBoot




    // bean destruction phase
    // custom destroy method
    // public void destroyStudentObject() {
    //     System.out.println("custom destroy method called");
    //     name = "";
    //     roll = 0;
    // }

    // by implementing DisposableBean interface
    @Override
    public void destroy() {
        System.out.println("Destroy method is invoked of the Disposal bean interface");
        roll = 0;
        name = "";
    }

    // @PreDestroy => Springboot
}
