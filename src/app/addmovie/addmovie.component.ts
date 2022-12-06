import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  errormsg="";
  constructor(private router:Router,private movieService:MovieService){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

  saveMovies(m:Movie){
    this.movieService.saveMovie(m).subscribe({
      next: (data) => {console.log(data); this.goToMovieList();},
      error: (err) => {console.log(err);}
    });
  }
  goToMovieList(){
    this.router.navigate(['/movielist']);
  }

}
