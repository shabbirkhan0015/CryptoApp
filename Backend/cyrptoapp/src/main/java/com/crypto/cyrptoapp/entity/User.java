package com.crypto.cyrptoapp.entity;

import java.util.Collection;

import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.crypto.cyrptoapp.jwt.JwtResponse;
import com.crypto.cyrptoapp.jwt.JwtResponse.Builder;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_table")
public class User implements UserDetails {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 	
	 	 
	    private String firstName;
	 	 
	 
	    private String lastName;
	 	
	 	
	    private String email;
	 	
	 
	    private String password;
	    
	 	
	    
		public User() {
			super();
		}

		public User(String firstName, String lastName, String email, String password) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
		}
		
		public String getFirstName() {
			return firstName;
		}
		
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		
		public String getLastName() {
			return lastName;
		}
		
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		
		public String getEmail() {
			return email;
		}
		
		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getPassword() {
			return password;
		}
		
		public void setPassword(String password) {
			this.password = password;
		}
		
		 public static Builder builder() {
		        return new Builder();
		    }
		
		public static class Builder {
	        private final User user;

	        public Builder() {
	            this.user = new User();
	        }

	        public Builder firstName(String firstName) {
	            user.firstName = firstName;
	            return this;
	        }

	        public Builder lastName(String lastName) {
	            user.lastName = lastName;
	            return this;
	        }

	        public Builder email(String email) {
	            user.email = email;
	            return this;
	        }

	        public Builder password(String password) {
	            user.password = password;
	            return this;
	        }

	        public User build() {
	            return user;
	        }

			public Builder username(String string) {
				user.email = string;
				return this;
			}
	    }

		public static User Builder() {
			
			return new User();
		}

		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
			return null;
		}

		@Override
		public String getUsername() {
			
			return this.email;
		}

		@Override
		public boolean isAccountNonExpired() {
			return true;
		}

		@Override
		public boolean isAccountNonLocked() {
			return true;
		}

		@Override
		public boolean isCredentialsNonExpired() {
			
			return true;
		}

		@Override
		public boolean isEnabled() {
			return true;
		}

}
