import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';
import { RECIPES as rp } from 'src/app/Classes/recipes';
import { keyframes } from '@angular/animations';


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

  showMe: boolean=false

  ngOnInit(): void {
  }

  toggleTag() {
    this.showMe = !this.showMe
  }

}