import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviReview } from '../MovieReview';
import { MoviereviewService } from '../services/moviereview.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  
  movieReviews1 : MoviReview = new MoviReview();
  myrating!: number;
  constructor(private movieReviewService:MoviereviewService,private router :Router) { }

  ngOnInit(): void {
   
  }

  // getMoviesReviews(){
  //   return this.movieReviewService.getMovieReviewList().subscribe(data =>
  //     {
  //       this.movieReviews=data;
  //     });
  // }
  private saveMovieReview(){
    this.movieReviewService.saveMovieReviewList(this.movieReviews1).subscribe(data =>
    {
      console.log(data);
      this.goToMovieList();
    },
    error => console.log(error));
  }
  goToMovieList(){
    this.router.navigate(['/userlist']);
  }
  OnSubmit(){
    this.saveMovieReview();
  }
  
 

  

}
