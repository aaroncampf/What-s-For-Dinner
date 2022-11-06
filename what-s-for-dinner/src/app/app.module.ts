import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RatingComponent } from './rating/rating.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    FavoritesComponent,
    RatingComponent,
    PreferencesComponent,
    RandomizerComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
