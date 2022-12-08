package com.project.moviereviewsystem.moviereview;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Moviereviewrepository extends JpaRepository<Moviereview, Long> {
	
	List<Moviereview> findByMovieId(long movieId);
	Moviereview findById(long id);

}

