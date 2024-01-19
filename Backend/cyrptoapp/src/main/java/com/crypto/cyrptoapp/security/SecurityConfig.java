package com.crypto.cyrptoapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.crypto.cyrptoapp.jwt.JwtAuthenticationEntryPoint;
import com.crypto.cyrptoapp.jwt.JwtAuthenticationFilter;

@Configuration
public class SecurityConfig {


    @Autowired
    private JwtAuthenticationEntryPoint point;
    
    @Autowired
    private JwtAuthenticationFilter filter;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Autowired 
    PasswordEncoder passwordEncoder;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable())
        	.cors(cors->cors.disable())
        	.authorizeHttpRequests(auth->auth.requestMatchers("/test")
        	.authenticated().requestMatchers("/users/login").permitAll()
        	.requestMatchers("users/signup").permitAll()
        	.requestMatchers("users/forgot-password").permitAll()
        	.anyRequest().authenticated())
        	.exceptionHandling(ex -> ex.authenticationEntryPoint(point))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        
        	http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        	
        return http.build();
    }
        @Bean
        public DaoAuthenticationProvider daoAuthenticationProvider() {
            DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
            daoAuthenticationProvider.setUserDetailsService(userDetailsService);
            daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);

            return daoAuthenticationProvider;
        }
//      @Bean
//      public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
//          return builder.getAuthenticationManager();
//      }
//      
//	    @Bean
//	    public PasswordEncoder passwordEncoder() {
//	       return new BCryptPasswordEncoder();
//	   }
        
    }
 