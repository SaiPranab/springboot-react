import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import model.Student;

public class App {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello, World!");

        ApplicationContext context = new ClassPathXmlApplicationContext("resources/applicationContext.xml");
        Student student = (Student) context.getBean("stdObj");

        // System.out.println(student);

        student.display();
    }
}
