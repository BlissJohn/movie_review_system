import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {


  movies! : Movie[];
  id!: number;

  constructor(private movieService:MovieService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
  }

  
  private getMovies() {
    this.movieService.getMovieList().subscribe(data => 
      {this.movies=data;
      });
  }
  private gotoComponent(){
    this.router.navigate(['/deletmovie']);
  }

  updateMovie(movie:Movie,id:number){
    this.movieService.updateMovie(movie,this.id).subscribe(data =>{
      this.getMovies();
      this.gotoComponent();
    },
    error => console.log(error));
  }

}
