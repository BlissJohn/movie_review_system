package com.project.moviereviewsystem.moviereview;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.moviereviewsystem.bean.MovieReviewBean;
import com.wipro.moviereviewsystem.bean.MovieReviewBean2;
import com.wipro.moviereviewsystem.service.MovieService;

@CrossOrigin(allowedHeaders = {"*"},origins="*")
@RestController
public class Moviereviewcontroller {

	@Autowired
	Moviereviewrepository moviereviewrepository;
	
	@Autowired
	MovieService movieService;
	
	//DISPLAY USERS
	@GetMapping(path="/moviereview")
	public List<Moviereview> returnmovie() {
		return moviereviewrepository.findAll();
	}
	
	@PostMapping(path="/moviereview")
	public String createmovie(@RequestBody MovieReviewBean moviereview) {
		return movieService.addMovieReview(moviereview);
	}
	@DeleteMapping(path="/moviereview/{id}")
	public  String deletuser(@PathVariable long id) {
		return this.movieService.deleteMovieReview(id);
		
	}
	
//	@PostMapping(path="/moviereview/{id}")
//	public String createmovie(@RequestBody MovieReviewBean moviereview ,@PathVariable long id) {
//		return movieService.addMovieReviewByLong(moviereview,id);
//	}
//}
}