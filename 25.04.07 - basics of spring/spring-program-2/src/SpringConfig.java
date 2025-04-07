import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean 
    public Student getStudent() {
        Student s = new Student();
        s.setRoll(101);
        s.setName("Varun");

        return s;
    }
}
