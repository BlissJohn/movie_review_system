import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviReview } from '../MovieReview';

@Injectable({
  providedIn: 'root'
})
export class MoviereviewService {
  private baseUrl="http://localhost:8080/moviereview";

  constructor(private httpClient : HttpClient) { 
  }

  getMovieReviewList():Observable<MoviReview[]>{
    return this.httpClient.get<MoviReview[]>(`${this.baseUrl}`);
  }

  saveMovieReviewList(movieReview : MoviReview):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,movieReview,{responseType: 'text'});
  }
}
