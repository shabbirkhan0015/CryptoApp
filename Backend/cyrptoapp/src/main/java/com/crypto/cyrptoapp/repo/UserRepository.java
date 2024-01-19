package com.crypto.cyrptoapp.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crypto.cyrptoapp.entity.User;
import com.crypto.cyrptoapp.exception.UserNotFoundException;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByEmail(String email);
	
}