import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // trendingMovies: any;
  // theatreMovies: any;
  // popularMovies: any;
  movies! : Movie[];
  movie:any;


  constructor( private router: Router,private movieService:MovieService) {}

  ngOnInit(): void {
    this.getMovies();
    // this.getTrendingMovies();
    // this.getTheatreMovies();
    // this.getPopularMovies();
  }
  private getMovies() {
    this.movieService.getMovieList().subscribe(data => 
      {this.movies=data;
      });
  }
  gotoComponent(){
    
    this.router.navigate(['/addreview']);
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
  // getTrendingMovies() {
  //   this.http
  //     .get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
  //       this.trendingMovies = movies;
  //     });
  // }

  // getTheatreMovies() {
  //   this.http
  //     .get('http://localhost:4200/assets/data/theatre-movies.json')
  //     .subscribe((movies) => {
  //       this.theatreMovies = movies;
  //     });
  // }

  // getPopularMovies() {
  //   this.http
  //     .get('http://localhost:4200/assets/data/popular-movies.json')
  //     .subscribe((movies) => {
  //       this.popularMovies = movies;
  //     });
  // }

  // goToMovie(type: string, id: string) {
  //   this.router.navigate(['movie', type, id]);
  // }

}