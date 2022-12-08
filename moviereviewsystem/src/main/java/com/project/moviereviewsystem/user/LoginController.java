package com.project.moviereviewsystem.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(allowedHeaders = {"Authorization", "Origin"},origins="http://localhost:4200")
@RestController
@RequestMapping(path="/movie")
public class LoginController {

	@Autowired
	private Userrepository userRepo;
	@Autowired
	private Userservice userService;
	
	@PostMapping(path="/login")
	public boolean loginUser(@RequestBody LoginBean login) {
		String email = login.getEmail();
		String password = login.getPassword();
		User user1= userRepo.findByEmail(email);
		if(user1 == null) {
			return false;
		}
		else {
		String encodedPassword = user1.getPassword();
		String result = userService.encodermatches(password, encodedPassword);
		if(result=="True") {
			return true;
		}
		else {
			return false;
		}
//		User user2=userRepo.findByPassword(encodedPassword);
		}
		
	}
	
}
