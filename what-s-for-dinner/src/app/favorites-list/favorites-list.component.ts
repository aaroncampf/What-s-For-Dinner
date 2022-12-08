import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
// import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  // @Input() favoritesList = [];
    
  rp: Recipe;

  constructor() {
    let retrievedRecipes = localStorage.getItem('Recipes') as string; 
    
    const Recipes:Recipe[] = JSON.parse(retrievedRecipes);

    this.rp = Recipes[0];

    
    const RecipeName = localStorage.getItem('addFavorite')
    // console.log(RecipeName)
    for (let i = 0; i <= Recipes.length - 1; i++) {
      if (RecipeName == Recipes[i].name) {
        this.rp = Recipes[i];

      }
    }


  

}
  ngOnInit(): void {
  }

}