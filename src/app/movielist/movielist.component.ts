import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies! : Movie[];
imageSrc!: "https://upload.wikimedia.org/wikipedia/en/4/47/Orphanposter.jpg";
  constructor(private movieService: MovieService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovies();
  }
  private getMovies() {
    
    this.movieService.getMovieList().subscribe(data => 
      {this.movies=data;
      });
  }
  public ratingOfMovie(m1:Movie){
    let y=m1.movieReviews;
    var count=0;
    var sum_1=0;
    var avg_rating =0;
    for (var val of y) {
      count+=1
      sum_1+=val.rating
      avg_rating = sum_1/count
  }
  return avg_rating

}

}