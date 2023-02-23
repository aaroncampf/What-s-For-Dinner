import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { FavoritesComponent } from './favorites/favorites.component';
import { RatingComponent } from './rating/rating.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
import { FormsModule } from '@angular/forms';
import { WeekDisplayComponent } from './week-display/week-display.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    // FavoritesComponent,
    RatingComponent,
    PreferencesComponent,
    RecipesComponent,
    RecipeDetailComponent,
    FavoritesListComponent,
    RecipeManagerComponent,
    WeekDisplayComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
