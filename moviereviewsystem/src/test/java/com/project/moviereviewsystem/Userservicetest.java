package com.project.moviereviewsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;



import java.util.Optional;



import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;




import com.project.moviereviewsystem.user.User;
import com.project.moviereviewsystem.user.Userrepository;
import com.project.moviereviewsystem.user.Userservice;



public class Userservicetest extends MoviereviewsystemApplicationTests {
@Autowired
@InjectMocks
private Userservice service;
@MockBean
private Userrepository repository;



@Test



public void delete() {



 User user = new User(1,"Gogineni","Uma","uma123@gmail.com",98765434,"Uma@123");

  when(repository.findById(1L)).thenReturn(user);
  assertEquals("Deleted",service.delete(1));



}
@Test
public void save() {



	 User user = new User(1,"Gogineni","Uma","uma123@gmail.com",98765434,"Uma@123");

//	  when(repository.findById(1L)).thenReturn(user);
	  assertEquals("user added",service.save(user));



	}


@Test
public void upadate() {

	 User user = new User(1,"Gogineni","Uma","uma123@gmail.com",98765434,"Uma@123");

      when(repository.findById(1L)).thenReturn(user);
	  assertEquals("User updated",service.update(user,1));



	}

}