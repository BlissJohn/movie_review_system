package com.project.moviereviewsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.project","com.wipro"})
public class MoviereviewsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviereviewsystemApplication.class, args);
	}

}
