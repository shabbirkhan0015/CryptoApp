package com.crypto.cyrptoapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.crypto.cyrptoapp.entity.User;
import com.crypto.cyrptoapp.services.UserService;

@SpringBootApplication
public class CyrptoappApplication {

	public static void main(String[] args) {
		SpringApplication.run(CyrptoappApplication.class, args);
		System.out.println("application running");
	}
	
}
