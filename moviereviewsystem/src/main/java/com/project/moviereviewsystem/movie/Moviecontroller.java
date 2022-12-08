package com.project.moviereviewsystem.movie;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.moviereviewsystem.bean.MovieBean;
import com.wipro.moviereviewsystem.service.MovieService;



@CrossOrigin(allowedHeaders = {"*"},origins="*")
@RestController
@RequestMapping("/movie")
public class Moviecontroller {

	@Autowired
	Movierepository movierepository;
	
	@Autowired
	MovieService movieService;
	
	
	//DISPLAY USERS
	
	@GetMapping(path="/all")

	public List<Movie> returnmovie() {
		return movierepository.findAll();
	}
	
	
	@GetMapping(path="/list")

	public ResponseEntity<List<MovieBean>> returnMovies() {
		return new ResponseEntity<List<MovieBean>>(movieService.getMovieDeatils(),HttpStatus.OK);
	}
	@PostMapping(path="/list")

	public String saveMovieReview(@RequestBody Movie movie,@RequestHeader String authorization) {
		return movieService.setMovieDeatils(movie);
	}
	
	@GetMapping(path="/list/{id}")
	public MovieBean returnAMovie(@PathVariable long id){
		
		MovieBean m = movieService.getMovie(id);
		if(m==null) {
			return null;
		}
		else {
			return m;
		}
		
	}
	@PostMapping(path="/all")
	public Movie createmovie(@RequestBody Movie movie) {
		return movierepository.save(movie);
	}
	
	@PutMapping(path="/list/{id}")
	public String updateMovie(@PathVariable long id,@RequestBody Movie movie) {
		
		return movieService.updateMovie(movie,id);
	}
	
	
	@DeleteMapping(path="/all/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMovie(@PathVariable long id) {
		
		
		 Movie m = movierepository.findById(id);
		 movierepository.delete(m);
		 
		 Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		
	}
	@DeleteMapping(path="/list/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMovie1(@PathVariable long id) {
		
		
		 Movie m = movierepository.findById(id);
		 movierepository.delete(m);
		 
		 Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		
	}
	
}
