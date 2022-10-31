import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';

interface RECIPES {
  name: string;
  ingredient: string;
  instruction: string;
  time: number;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  Recipes: RECIPES[] = recipes;
 
  constructor() {
    this.Recipes;
   }

  ngOnInit(): void {
  }

}
