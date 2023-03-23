package project.code;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.annotation.PostConstruct;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@SpringBootApplication
public class LearnMyWayApplication {

	@Autowired
	private ObjectMapper objectMapper;


	public static void main(String[] args) {
		SpringApplication.run(LearnMyWayApplication.class, args);
	}

	@PostConstruct
	public void setUp() {
		objectMapper.registerModule(new JavaTimeModule());
	}

}
