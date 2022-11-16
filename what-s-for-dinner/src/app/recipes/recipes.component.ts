import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';
import { RECIPES as rp } from 'src/app/Classes/recipes';
import { keyframes } from '@angular/animations';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Recipes: rp[] = recipes;
 
  constructor() {
    this.Recipes;
  
   }


  // getRecipe(recipe: any ) {
  //   const selectedRecipe = localStorage.setItem('myRecipe', recipe);
  //   localStorage.getItem(selectedRecipe);
    // for (let i = 0; i <= recipes.length; i++) {
    //   if (recipe.name  === recipes[i].name) {
    //   selectedRecipe.push(recipes[i]);
    //   }
    // }


  

  showMe: boolean=false

  ngOnInit(): void {
  }

  toggleTag() {
    this.showMe = !this.showMe
  }

}