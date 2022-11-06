import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';

interface RECIPES {
  name: string;
  ingredient: string;
  instruction: string;
  time: number;
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Recipes: RECIPES[] = recipes;
 
  constructor() {
    this.Recipes;
  
   }

  ngOnInit(): void {
  }

}
