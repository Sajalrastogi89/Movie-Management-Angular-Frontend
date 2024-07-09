import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MovieComponent
    },
    {
        path: 'movies',
        component: MovieComponent
    },
    {
        path: 'actors',
        component: ActorComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
