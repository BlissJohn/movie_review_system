package com.project.moviereviewsystem.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Userrepository extends JpaRepository<User, Long> {

	public User findByEmailAndPassword(String email,String password);
	public User findByEmail(String email);
	public User findByMobilenumber(long mobilenumber);
	public User findByPassword(String password);
	public User findById(long id);
}
