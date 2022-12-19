import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'week-display',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.css']
})
export class WeekDisplayComponent implements OnInit {
  Monday: Recipe[] = [];
  Tuesday: Recipe[]  = [];
  Wednesday: Recipe[]  = [];
  Thursday: Recipe[]  = [];
  Friday: Recipe[]  = [];
  Saturday: Recipe[]  = [];
  Sunday: Recipe[]  = [];

  constructor() {
    
    let savedRandomRecipes = localStorage.getItem('RandomRecipes') as string;
    let savedRandomArray = JSON.parse(savedRandomRecipes);
    
    if(savedRandomArray) {
      this.Monday.push(savedRandomArray[0]);
      this.Tuesday.push(savedRandomArray[1]);
      this.Wednesday.push(savedRandomArray[2]);
      this.Thursday.push(savedRandomArray[3]);
      this.Friday.push(savedRandomArray[4]);
      this.Saturday.push(savedRandomArray[5]);
      this.Sunday.push(savedRandomArray[6]);
    }
  }

  public getRandomRecipes (){
    let retrievedRecipes = localStorage.getItem('Recipes') as string; 
    var Data: Recipe[] = JSON.parse(retrievedRecipes);
    let randomArr: Recipe[] = [];

    for (let i = 0; i < Data.length; i++) {
      let randomRecipe = Data[Math.floor(Math.random() * Data.length)];
      if (!randomArr.includes(randomRecipe))
        randomArr.push(randomRecipe)
    }
    localStorage.setItem('RandomRecipes', JSON.stringify(randomArr) ) ;
    window.location.reload();
   
  }
  
//   
  ngOnInit(): void {
  }
}