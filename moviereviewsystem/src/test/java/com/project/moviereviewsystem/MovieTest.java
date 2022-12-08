package com.project.moviereviewsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.project.moviereviewsystem.movie.Movie;
import com.project.moviereviewsystem.movie.Movierepository;

import com.wipro.moviereviewsystem.service.MovieService;

public class MovieTest extends MoviereviewsystemApplication {
	@Autowired
	@InjectMocks
	private MovieService service;
	@MockBean
	private Movierepository repository;




	@Test
	public void update() {



		 Movie movie = new Movie("hi",2,"hie","hie");
		 when(repository.findById(2L)).thenReturn(movie);
		  assertEquals("Movie updated",service.updateMovie(movie,2));



		}
	}