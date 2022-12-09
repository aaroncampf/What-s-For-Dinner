import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'week-display',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.css']
})
export class WeekDisplayComponent implements OnInit {
  Monday: Recipe[]  = [];
  Tuesday: Recipe[]  = [];
  Wednesday: Recipe[]  = [];
  Thursday: Recipe[]  = [];
  Friday: Recipe[]  = [];
  Saturday: Recipe[]  = [];
  Sunday: Recipe[]  = [];

  constructor() {
    
    let retrievedRecipes = localStorage.getItem('Recipes') as string;    
    var Data: Recipe[]= JSON.parse(retrievedRecipes);
    let randomArr: Recipe[] = [];

    for (let i = 0; i < Data.length; i++){
      let randomRecipe = Data[Math.floor(Math.random() * Data.length)];
      if (!randomArr.includes(randomRecipe))
      randomArr.push(randomRecipe)
    }
 
    console.log(randomArr)
  


    this.Monday.push(randomArr[0]);
    this.Tuesday.push(randomArr[1]);
    this.Wednesday.push(randomArr[2]);
    this.Thursday.push(randomArr[3]);
    this.Friday.push(randomArr[4]);
    this.Saturday.push(randomArr[5]);
    this.Sunday.push(randomArr[6]);
  }

  
  ngOnInit(): void {
  }
}