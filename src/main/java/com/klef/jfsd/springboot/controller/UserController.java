package com.klef.jfsd.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.springboot.model.User;
import com.klef.jfsd.springboot.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend origin
public class UserController {

    @Autowired
    private UserService userService;

    // Registration endpoint
    @PostMapping("/register")
    public Map<String, Object> registerUser(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        // Check if Aadhaar number already exists
        List<User> usersWithSameAadhar = userService.findByAdharnumber(user.getAdharnumber());
        if (usersWithSameAadhar != null && !usersWithSameAadhar.isEmpty()) {
            response.put("success", false);
            response.put("message", "Aadhaar number already registered.");
            return response;
        }

        user.setVerified(true); // or your verification logic
        userService.Register(user);

        response.put("success", true);
        response.put("message", "Registration successful!");
        return response;
    }

    // Login endpoint
    @PostMapping("/login")
    public Map<String, Object> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");
        Map<String, Object> response = new HashMap<>();

        User user = userService.checkLogin(email, password);
        if (user == null) {
            response.put("success", false);
            response.put("message", "Invalid credentials.");
        } else if (!user.isVerified()) {
            response.put("success", false);
            response.put("message", "Your account is not verified. Kindly contact Admin.");
        } else {
            response.put("success", true);
            response.put("message", "Login successful!");
        }
        return response;
    }
}
