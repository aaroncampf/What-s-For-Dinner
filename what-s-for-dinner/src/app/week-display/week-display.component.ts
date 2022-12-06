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

    this.Monday.push(Data[0]);
    this.Monday.push(Data[1]);
    this.Tuesday.push(Data[0]);
    this.Tuesday.push(Data[1]);
    this.Wednesday.push(Data[0]);
    this.Wednesday.push(Data[1]);
    this.Thursday.push(Data[0]);
    this.Thursday.push(Data[1]);
    this.Friday.push(Data[0]);
    this.Friday.push(Data[1]);
    this.Saturday.push(Data[0]);
    this.Saturday.push(Data[1]);
    this.Sunday.push(Data[0]);
    this.Sunday.push(Data[1]);
  }
  ngOnInit(): void {
  }
}