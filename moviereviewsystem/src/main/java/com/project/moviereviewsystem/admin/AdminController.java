package com.project.moviereviewsystem.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepo;
	
	@GetMapping("/admin")
	public List<Admin> getAdmin() {
		return adminRepo.findAll();
	}
	
	@PostMapping("/admin")
	public Admin addAdmin(@RequestBody Admin a) {
		return adminRepo.save(a);
	}
	
	
}
