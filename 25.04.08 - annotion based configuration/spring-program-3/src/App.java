import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import config.MyConfig;
import model.Employee;
import model.Student;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        ApplicationContext context = new AnnotationConfigApplicationContext(MyConfig.class);

        Student student = (Student) context.getBean("stdObj");
        System.out.println(student);

        Employee employee = (Employee) context.getBean("employee");
        System.out.println(employee);
    }
}
