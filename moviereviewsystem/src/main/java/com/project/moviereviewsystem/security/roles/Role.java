package com.project.moviereviewsystem.security.roles;

import javax.persistence.*;

import com.project.moviereviewsystem.user.User;

@Entity
@Table(name = "roles")
public class Role {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
     
    @Column(nullable = false, length = 50, unique = true)
    private String name;
 
    public Role() { }
     
    public Role(String name) {
        this.name = name;
    }
     
    public Role(long id) {
        this.id = id;
    }
 
 
    @Override
    public String toString() {
        return this.name;
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
	
     
    // getters and setters are not shown for brevity   
}