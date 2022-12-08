package com.project.moviereviewsystem.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.moviereviewsystem.admin.Admin;
import com.project.moviereviewsystem.admin.AdminRepository;
import com.project.moviereviewsystem.security.roles.Role;
import com.project.moviereviewsystem.security.roles.RoleRepository;

@Service
public class Userservice {

	@Autowired Userrepository userRepo;
	PasswordEncoder passwordEncoder;
	@Autowired private RoleRepository repo;
	@Autowired AdminRepository adminRepo;
	
	public Userservice(Userrepository userRepo) {
		this.userRepo=userRepo;
		this.passwordEncoder=new BCryptPasswordEncoder();
	}
	 
	public String save(User user) {
		String encodedPassword = this.passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		String useremail = user.getEmail();
		long usermobilenumber = user.getMobilenumber();
		User user1 = userRepo.findByEmail(useremail);
		User user2 = userRepo.findByMobilenumber(usermobilenumber);
		
		
		if(user1==null && user2 == null) {
		int roleId=2;
		user.addRole(new Role(roleId));
		this.userRepo.save(user);
		return "user added";}
		return "user already existed";
	}
	
	public String delete(long id) {
		User user = userRepo.findById(id);
		userRepo.delete(user);
		return "Deleted";
		
	}
	public String update(User user,long id) {
		User user_repo = userRepo.findById(id);
		if(user_repo!=null) {
		user_repo.setId(id);
		user_repo.setFirstname(user.getFirstname());
		user_repo.setLastname(user.getLastname());
		user_repo.setEmail(user.getEmail());
		user_repo.setMobilenumber(user.getMobilenumber());
		user_repo.setPassword(user.getPassword());
		userRepo.save(user_repo);
		return "User updated";
	}
		else {
			return "User not present";
			}
		}
	public User aUser(long id) {
		return userRepo.findById(id);
	}

	public List<User> show() {
		// TODO Auto-generated method stub
		return this.userRepo.findAll();
	}
	
	public String encodermatches(String password,String encodedPassword) {
		
		boolean result = this.passwordEncoder.matches(password,encodedPassword);
		if(result)
			return "True";
		else {
			return "False";
		}
	}
	
}
