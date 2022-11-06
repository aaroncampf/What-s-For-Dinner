import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'favorites', component: FavoritesComponent},
  { path: 'recipe', component: RecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
