import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RatingComponent } from './rating/rating.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarHomepageComponent } from './Components/navbar-homepage/navbar-homepage.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    FavoritesComponent,
    RatingComponent,
    PreferencesComponent,
   
    RecipesComponent,
    RecipeComponent,
    NavbarHomepageComponent,
    MainpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
