package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Admin;
import com.klef.jfsd.springboot.model.Election;
import com.klef.jfsd.springboot.model.User;
import com.klef.jfsd.springboot.service.AdminService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // <-- ADD THIS LINE
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Admin login POST request handling
    @PostMapping("/api/admin/login")
    public Map<String, Object> checkAdminLogin(@RequestBody Admin loginRequest) {
        Map<String, Object> response = new HashMap<>();
        
        // Extract username and password from the request body
        String auname = loginRequest.getUsername();
        String apwd = loginRequest.getPassword();
        
        // Check admin credentials by calling the service
        Admin admin = adminService.checkadminlogin(auname, apwd);
        
        if (admin != null) {
            // If admin exists, return success
            response.put("success", true);
            response.put("message", "Login successful!");
            response.put("redirectTo", "/AdminDashboard");  // Redirect to dashboard on success
        } else {
            // If credentials are invalid, return failure
            response.put("success", false);
            response.put("message", "Invalid username or password");
        }
        
        return response;  // Return JSON response
    }

    // Additional methods that were already there (like viewing users, elections, etc.)
    @GetMapping("/viewallusers")
    public ModelAndView viewAllUsers() {
        ModelAndView mv = new ModelAndView("viewallusers");
        List<User> userList = adminService.ViewAllUsers();
        mv.addObject("userlist", userList);
        return mv;
    }

    @GetMapping("/verifyuser")
    public ModelAndView verifyUser(@RequestParam("id") long id) {
        ModelAndView mv = new ModelAndView();
        String msg = adminService.verifyUser(id);
        mv.addObject("msg", msg);
        mv.setViewName("redirect:/viewallusers");
        return mv;
    }

    @GetMapping("/viewallelections")
    public ModelAndView viewAllElections() {
        ModelAndView mv = new ModelAndView("viewallelections");
        List<Election> electionList = adminService.getAllElections();
        mv.addObject("electionList", electionList);
        return mv;
    }
}
