package com.laweb.webshop.service;
import com.laweb.webshop.model.User;
import com.laweb.webshop.model.LoginBody;
import com.laweb.webshop.model.RegistrationBody;
import com.laweb.webshop.repository.UserRepository;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final EncryptingService encryptingService;
    private final JWTService jwtService;

    public UserService(UserRepository userRepository, EncryptingService encryptingService, JWTService jwtService) {
        this.userRepository = userRepository;
        this.encryptingService = encryptingService;
        this.jwtService = jwtService;
    }

    public ResponseEntity<User> registerUser(RegistrationBody userDto) {
        // Check if username or email already exists
        if (userRepository.findByUsername(userDto.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        if (userRepository.findByEmail(userDto.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        // Encrypt the password
        String encryptedPassword = encryptingService.encryptPassword(userDto.getPassword());

        // Create a new User entity from the DTO
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(encryptedPassword);

        // Save the new user
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    public String loginUser(LoginBody loginBody) {
        Optional<User> opUser = Optional.ofNullable(userRepository.findByUsername(loginBody.getUsername()));
        if (opUser.isPresent()) {
          User user = opUser.get();
          if (encryptingService.verifyPassword(loginBody.getPassword(), user.getPassword())) {
            return jwtService.generateJWT(user);
          }
        }
        return null;
      }
}
