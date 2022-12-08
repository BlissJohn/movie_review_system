package com.project.moviereviewsystem.movie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Movierepository extends JpaRepository<Movie, Long>{
	
	Movie findByName(String name);
	Movie findById(long id);

}
