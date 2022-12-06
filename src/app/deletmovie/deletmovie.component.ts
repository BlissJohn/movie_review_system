import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-deletmovie',
  templateUrl: './deletmovie.component.html',
  styleUrls: ['./deletmovie.component.css']
})
export class DeletmovieComponent implements OnInit {

  movies! : Movie[];
  constructor(private movieService : MovieService,private router : Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  deleteMovie(id : number){
    this.movieService.deleteMovie(id).subscribe( data => {
      this.getMovies();
      this.gotoComponent();
    },
    error => console.log(error));
  }

  private getMovies() {
    this.movieService.getMovieList().subscribe(data => 
      {this.movies=data;
      });
  }
  private gotoComponent(){
    this.router.navigate(['/deletmovie']);
  }


}
