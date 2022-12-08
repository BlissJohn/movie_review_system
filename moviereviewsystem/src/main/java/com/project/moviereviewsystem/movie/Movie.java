package com.project.moviereviewsystem.movie;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Movies")
public class Movie {
	
	@Column(name="Moviename")
	String name ;
	@Id
	@GeneratedValue
	long id;
	@Column(name="MovieImage")
	String image ;
	@Column(name="Moviedescription")
	String description;
	
	
	
	public Movie(String name, long id, String image, String description) {
		super();
		this.name = name;
		this.id = id;
		this.image = image;
		this.description = description;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public Movie(){
		
	}
	

}
