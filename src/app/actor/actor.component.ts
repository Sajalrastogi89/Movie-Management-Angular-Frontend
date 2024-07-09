import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsService } from '../services/products.service';
import { Actor } from '../../types';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss'
})
export class ActorComponent implements OnInit {
  actors: Actor[] = []; 

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getActors("http://127.0.0.1:8000/api/actors/")
      .subscribe({
        next: (data: Actor[]) => {
          this.actors = data; 
          console.log(this.actors);
        },
        error: (err) => {
          console.error('Error fetching actors:', err);
        }
      });
  }
}
