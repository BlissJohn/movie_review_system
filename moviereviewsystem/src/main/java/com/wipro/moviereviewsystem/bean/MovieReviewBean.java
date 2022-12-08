package com.wipro.moviereviewsystem.bean;

public class MovieReviewBean {

	long id;
	long MovieId;
	double rating;
	String comments;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getMovieId() {
		return MovieId;
	}
	public void setMovieId(long movieId) {
		MovieId = movieId;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	
}
