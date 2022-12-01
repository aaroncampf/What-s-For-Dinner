import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WeekDisplayComponent } from './week-display/week-display.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  // { path: 'favorites', component: FavoritesComponent },
  // { path: 'detail', component: RecipeDetailComponent },
  { path: 'detail/:name', component: RecipeDetailComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'favorites-list', component: FavoritesListComponent},
  { path: 'manage', component: RecipeManagerComponent},
  { path: 'week-display', component: WeekDisplayComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }