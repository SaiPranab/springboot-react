import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import model.Student;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        // ApplicationContext context1 = new ClassPathXmlApplicationContext("resources/app.xml");
        // incase of destroy object use the below one
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("resources/app.xml");
        
        Student student1 = (Student) context.getBean("student");
        System.out.println(student1);

        // use
        System.out.println("Name is " + student1.getName());
        System.out.println("Roll is " + student1.getRoll());

        context.registerShutdownHook();
    }
}
