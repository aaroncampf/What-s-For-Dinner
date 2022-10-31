import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeData: any;
  

  constructor() {
    this.recipeData = recipes;
   }

  ngOnInit(): void {
  }

}
