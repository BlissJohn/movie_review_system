package com.wipro.moviereviewsystem.bean;

import java.util.List;

public class MovieBean {
	
	long id;
	String name ;
	String description;
	String image;
	List<MovieReviewBean> movieReviews;
	
	public List<MovieReviewBean> getMovieReviews() {
		return movieReviews;
	}
	public void setMovieReviews(List<MovieReviewBean> movieReviews) {
		this.movieReviews = movieReviews;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
	

	
}
