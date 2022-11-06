import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'recipe', component: RecipesComponent },
  { path: 'favorites', component: FavoritesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
