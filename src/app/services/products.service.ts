import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Actor, Movie, vote} from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }
  getActors=(url:string): Observable<Actor[]>=>{
    return this.apiService.get(url);
  }
  getMovies=(url:string): Observable<Movie[]>=>{
    return this.apiService.get(url);
  }
  postVote(url: string): Observable<vote> {
    return this.apiService.post<any>(url); 
  }
}
