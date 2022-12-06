import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { MoviReview } from '../MovieReview';
import { MovieService } from '../services/movie.service';
import { MoviereviewService } from '../services/moviereview.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieId!: any;
  movies! : Movie[];
  movie:any;
  aMovie!: any;
  id!:number;
  movieReviews1 : MoviReview = new MoviReview();
  checkoutForm!: FormGroup<{ movieId: FormControl<number | null>; rating: FormControl<any>; comments: FormControl<any>; }>;
  
  

  constructor(private activatedRoute : ActivatedRoute,public movieService :MovieService,private movieReviewService: MoviereviewService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      'movieId': new FormControl(),
      'rating': new FormControl(),
      'comments':new FormControl()
    });

    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.aMovie=this.movieService.getMovie(this.movieId).subscribe(data =>
      {
        this.getMovies();
        console.log(data);
        this.aMovie=data;
      });
      
  }
  
  getMovies() {
    this.movieService.getMovieList().subscribe(data => 
      {this.movies=data;
      });
  }
  private saveMovieReview(){
    this.movieReviewService.saveMovieReviewList(this.movieReviews1).subscribe({
      next: (data) => {console.log(data); this.goToMovieList();},
      error: (err) => {console.log(err);}
    });
  }
  
  goToMovieList(){
    this.router.navigate(['/home']);
  }
  OnSubmit(){
    this.movieReviews1.movieId=this.aMovie.id;
    this.saveMovieReview();
  }
  
}
