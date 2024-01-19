package com.crypto.cyrptoapp.controller;
import org.aspectj.weaver.tools.Trace;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.crypto.cyrptoapp.entity.UpdatePasswordRequest;
import com.crypto.cyrptoapp.entity.User;
import com.crypto.cyrptoapp.exception.UserNotFoundException;
import com.crypto.cyrptoapp.jwt.JwtHelper;
import com.crypto.cyrptoapp.jwt.JwtRequest;
import com.crypto.cyrptoapp.jwt.JwtResponse;
import com.crypto.cyrptoapp.services.UserService;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper helper;
    
    
    @Autowired
    PasswordEncoder passwordEncoder;
    
    private Logger logger = LoggerFactory.getLogger(UserController.class);

    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

        this.doAuthenticate(request.getEmail(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
    	
    	
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);
            
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }
    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/signup")
    public User createUser(@RequestBody User user) {
    	
    	user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userService.createUser(user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
    
//    @PostMapping("send-verification-mail/{email}")
//    public ResponseEntity<User> findByEmail(@PathVariable String email) {
//        Optional<User> userOptional = userService.findByEmail(email);
//        return userOptional
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
    
    @PutMapping("/forgot-password")
    public ResponseEntity<String> updatePassword(@RequestBody UpdatePasswordRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();
        password = passwordEncoder.encode(password);

        try {
            userService.updatePassword(email, password);
            return ResponseEntity.ok("Password updated successfully");
        } catch (UserNotFoundException e) {
        	 return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        }
    }
    
}
