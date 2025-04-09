package model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

// @Component
@Scope("prototype")
@Component(value = "stdObj")
public class Student { // student //> PrintStream -> printStream
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
}

