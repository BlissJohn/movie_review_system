package com.wipro.moviereviewsystem.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.moviereviewsystem.movie.Movie;
import com.project.moviereviewsystem.movie.Movierepository;
import com.project.moviereviewsystem.moviereview.Moviereview;
import com.project.moviereviewsystem.moviereview.Moviereviewrepository;
import com.project.moviereviewsystem.user.User;
import com.wipro.moviereviewsystem.bean.MovieBean;
import com.wipro.moviereviewsystem.bean.MovieReviewBean;
import com.wipro.moviereviewsystem.bean.MovieReviewBean2;

@Service
public class MovieService {
	
	@Autowired
	private Moviereviewrepository movieReviewRepo;
	
	@Autowired
	private Movierepository movieRepo;

	private Moviereview movieReview;
	
	public List<MovieBean> getMovieDeatils(){
		
		List<Movie> movies = movieRepo.findAll();
		List<Moviereview> movieReviews = movieReviewRepo.findAll();
		
		List<MovieBean> movieBeans = new ArrayList<MovieBean>();
		if(movies.isEmpty()) {
			return Collections.emptyList();
		}
		for(Movie movie:movies) {
			MovieBean movieBean = new MovieBean();
			BeanUtils.copyProperties(movie,movieBean);
			if(!movieReviews.isEmpty()) {
			List<Moviereview> movieReview1 =movieReviews.stream().filter(i -> i.getMovieId()==movie.getId()).collect(Collectors.toList());
			List<MovieReviewBean> movieReveiewBeans = new ArrayList<MovieReviewBean>();
			for(Moviereview moviereview2:movieReview1) {
				MovieReviewBean movieReviewBean = new MovieReviewBean();
				BeanUtils.copyProperties(moviereview2,movieReviewBean);
				movieReveiewBeans.add(movieReviewBean);
			}
			
			movieBean.setMovieReviews(movieReveiewBeans);
			}
			movieBeans.add(movieBean);
		}
		return movieBeans;
		
	}
	
public MovieBean getMovie(long id){
		
		List<Movie> movies = movieRepo.findAll();
		List<Moviereview> movieReviews = movieReviewRepo.findAll();
		MovieBean newmovieBean = new MovieBean(); 
		
		List<MovieBean> movieBeans = new ArrayList<MovieBean>();
		if(movies.isEmpty()) {
			return null;
		}
		for(Movie movie:movies) {
			MovieBean movieBean = new MovieBean();
			BeanUtils.copyProperties(movie,movieBean);
			if(!movieReviews.isEmpty()) {
			List<Moviereview> movieReview1 =movieReviews.stream().filter(i -> i.getMovieId()==movie.getId()).collect(Collectors.toList());
			List<MovieReviewBean> movieReveiewBeans = new ArrayList<MovieReviewBean>();
			for(Moviereview moviereview2:movieReview1) {
				MovieReviewBean movieReviewBean = new MovieReviewBean();
				BeanUtils.copyProperties(moviereview2,movieReviewBean);
				movieReveiewBeans.add(movieReviewBean);
			}
			
			movieBean.setMovieReviews(movieReveiewBeans);
			}
			movieBeans.add(movieBean);
		}
		
		for (MovieBean m:movieBeans) {
			if(m.getId()== id) {
				newmovieBean.setName(m.getName());
				newmovieBean.setMovieReviews(m.getMovieReviews());
				newmovieBean.setDescription(m.getDescription());
				newmovieBean.setImage(m.getImage());
				newmovieBean.setId(id);
			}
		}
		return newmovieBean;
		
	}

public String deleteMovieReview(long id) {
	Moviereview movieReview = movieReviewRepo.findById(id);
	if(movieReview!=null) {
		movieReviewRepo.delete(movieReview);
		return "Review Deleted";
	}
	else {
		return "operation is not valid";
	}
}

	
	
	public String setMovieDeatils(Movie movie) {
		String moviename = movie.getName();
		Movie movie1 = movieRepo.findByName(moviename);
		if(movie1==null) {
			movieRepo.save(movie);
			return "movie Added";
		}
		else {
			return "Movie Already existed";
		}
		
	}
	
	public String updateMovie(Movie movie,long id) {
		Movie movie_repo = movieRepo.findById(id);
		if(movie_repo!=null) {
			movie_repo.setId(id);
			movie_repo.setName(movie.getName());
			movie_repo.setDescription(movie.getDescription());
			movie_repo.setImage(movie.getImage());
			movieRepo.save(movie_repo);
			
			return "Movie updated";
		}
		else {
		return "Movie not there";
	}
		}
		
		
	public String addMovieReview(MovieReviewBean movieReviewBean) {
		if(movieReviewBean.getMovieId()!=0) {
			Movie movie =movieRepo.findById(movieReviewBean.getMovieId());
			if(movie!=null) {
			 Moviereview movieReview = new Moviereview();
			 BeanUtils.copyProperties(movieReviewBean, movieReview);
			 movieReviewRepo.save(movieReview);
			 return "Moviereview added";
			 }
			else {
				return "Movie is not present in the list of movies";
			}
		}
		else {
			return "Movie is not present in the list of movies";
		}
	}
	
//	public String addMovieReview2(MovieReviewBean2 movieReviewBean) {
//		if(movieReviewBean.getMovieName()!="") {
//			Movie movie =movieRepo.findByName(movieReviewBean.getMovieName());
//			if(movie!=null) {
//			 Moviereview movieReview = new Moviereview();
//			 movieReview.setMovieId(movie.getId());
//			 BeanUtils.copyProperties(movieReviewBean, movieReview);
//			 movieReviewRepo.save(movieReview);
//			 return "Moviereview added";
//			 }
//			else {
//				return "Movie is not present in the list of movies";
//			}
//		}
//		else {
//			return "Movie is not present in the list of movies";
//		}
//	}
	

	
//	public String setMovieReview(int id) {
//		
//	}
//public MovieBean setMovieDeatils(){
//		
//		List<Movie> movies = movieRepo.findAll();
//		List<Moviereview> movieReviews = movieReviewRepo.findAll();
//		
//		
//		for(Movie movie:movies) {
//			MovieBean movieBean = new MovieBean();
//			BeanUtils.copyProperties(movie,movieBean);
//			if(!movieReviews.isEmpty()) {
//			List<Moviereview> movieReview1 =movieReviews.stream().filter(i -> i.getMovieId()==movie.getId()).collect(Collectors.toList());
//			List<MovieReviewBean> movieReveiewBeans = new ArrayList<MovieReviewBean>();
//			for(Moviereview moviereview2:movieReview1) {
//				MovieReviewBean movieReviewBean = new MovieReviewBean();
//				BeanUtils.copyProperties(moviereview2,movieReviewBean);
//				movieReveiewBeans.add(movieReviewBean);
//			}
//			
//			movieBean.setMovieReviews(movieReveiewBeans);
//			}
//			
//		}
//	
//		
//	}
	
	
}
