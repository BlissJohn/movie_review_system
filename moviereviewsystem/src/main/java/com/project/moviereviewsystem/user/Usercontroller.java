package com.project.moviereviewsystem.user;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Predicate;

import javax.annotation.security.RolesAllowed;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.moviereviewsystem.admin.Admin;


@CrossOrigin(allowedHeaders = {"*"},origins="*")
@RestController
public class Usercontroller {
	
	@Autowired
	Userservice userService;

	//DISPLAY USERS
	@GetMapping(path="/userdetails")
	
	public List<User> returnuser() {
		return this.userService.show();
	}
	
	@GetMapping(path="/userdetails/{id}")
	
	public User returnAuser(@PathVariable long id) {
		return this.userService.aUser(id);
	}
	@PostMapping(path="/userdetails")
	public String createUser(@RequestBody  User user) {
		return this.userService.save(user);
	}
	
	
	@PutMapping(path="/userdetails/{id}")
	public String updateUser(@RequestBody  User user,@PathVariable long id) {
		return this.userService.update(user,id);
	}
	@DeleteMapping(path="/userdetails/{id}")
	public  String deletuser(@PathVariable long id) {
		return this.userService.delete(id);
		
	}
	
	
	
}
