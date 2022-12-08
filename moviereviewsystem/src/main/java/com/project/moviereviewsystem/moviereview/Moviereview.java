package com.project.moviereviewsystem.moviereview;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Moviereview")
public class Moviereview {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@Column(name="MovieId")
	long movieId;
	
	@Column(name="MovieName")
	String movieName;

	@Column(name="rating")
	double rating ;
	
	
	@Column(name="comments")
	String comments;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
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
	public String getMovieName() {
		return movieName;
	}


	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}


	public long getMovieId() {
		return movieId;
	}


	public void setMovieId(long movieId) {
		this.movieId = movieId;
	}
	
	



	public Moviereview(int id, int rating, String comments) {
		super();
		this.id = id;
		this.rating = rating;
		this.comments = comments;
	}


	public Moviereview() {
		
	}
	
	

}
