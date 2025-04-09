import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class SpringConfig {
    @Bean(name = "student") // This method returned Object will be managed by Spring Container or IoC Container (so this Object is now treated as bean)
    
    // @Scope(value = "prototype")
    // @Scope("prototype")
    
    @Scope("singleton")
    public Student getStudent() {
        Student s = new Student();
        s.setRoll(101);
        s.setName("Varun");

        return s;
    }
}
