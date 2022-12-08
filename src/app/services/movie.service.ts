import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "http://localhost:8080/movie/list";
  
  constructor(private httpClient: HttpClient) {}
  
  getMovieList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseUrl}`);
  }
  saveMovie(movie : Movie) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,movie,{responseType: 'text'});
  }
  deleteMovie(id :number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  getMovie(id:number): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  updateMovie(movie:Movie,id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,movie,{responseType: 'text'});
  }
}
