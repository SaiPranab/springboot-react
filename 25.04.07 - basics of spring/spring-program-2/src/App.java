import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) throws Exception {
        // ApplicationContext context = new ClassPathXmlApplicationContext("app.xml");

        // Student student = (Student) context.getBean("stdObj");
        // student.display();
        // System.out.println(student);
        // System.out.println();

        // Student student1 = (Student) context.getBean("stdObj1");
        // student1.display();
        // System.out.println(student1);
        // System.out.println();

        // Student student2 = (Student) context.getBean("stdObj2");
        // student2.display();
        // System.out.println(student2);

        ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
        Student student3 = (Student) context.getBean("getStudent");
        student3.display();
    }
}
