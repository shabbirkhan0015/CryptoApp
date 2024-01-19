package com.crypto.cyrptoapp.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class JwtResponse {
    private String jwtToken;
    private String username;

    // private constructor, getters, and other properties

    private JwtResponse(String jwtToken, String username) {
        this.jwtToken = jwtToken;
        this.username = username;
    }
    
    public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	// Builder pattern
    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String jwtToken;
        private String username;

        public Builder jwtToken(String jwtToken) {
            this.jwtToken = jwtToken;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public JwtResponse build() {
            return new JwtResponse(jwtToken, username);
        }
    }

   
}
