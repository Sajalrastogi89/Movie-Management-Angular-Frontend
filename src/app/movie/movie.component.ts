import { Component } from '@angular/core';
import { Movie } from '../../types';
import { CommonModule } from '@angular/common'; 
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movies: Movie[] = []; 

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchMovies(); 
  }

  fetchMovies(): void {
    this.productsService.getMovies("http://127.0.0.1:8000/api/movies/")
      .subscribe({
        next: (data: Movie[]) => {
          this.movies = data; 
          console.log(this.movies);
        },
        error: (err) => {
          console.error('Error fetching movies:', err); 
        }
      });
  }

  sortMovies(sortBy: string): void {
    const url = `http://127.0.0.1:8000/api/movies/?ordering=${sortBy}`;
    this.productsService.getMovies(url)
      .subscribe({
        next: (data: Movie[]) => {
          this.movies = data;
          console.log(`Movies sorted by ${sortBy}:`, this.movies);
        },
        error: (err) => {
          console.error(`Error sorting movies by ${sortBy}:`, err); 
        }
      });
  }

  upvoteMovie(movieId: number): void {
    const url = `http://127.0.0.1:8000/api/movies/${movieId}/upvote/`;
    this.productsService.postVote(url)
      .subscribe({
        next: (response) => {
          console.log('Upvoted:', response);
          this.fetchMovies();
        },
        error: (err) => {
          console.error('Error upvoting movie:', err); 
        }
      });
  }

  downvoteMovie(movieId: number): void {
    const url = `http://127.0.0.1:8000/api/movies/${movieId}/downvote/`;
    this.productsService.postVote(url)
      .subscribe({
        next: (response) => {
          console.log('Downvoted:', response);
          this.fetchMovies(); 
        },
        error: (err) => {
          console.error('Error downvoting movie:', err); 
        }
      });
  }
}
