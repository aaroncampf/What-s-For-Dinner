import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/Classes/recipes';
@Component({
  selector: 'week-display',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.css']
})
export class WeekDisplayComponent implements OnInit {
  Monday: RECIPES[]  = [];
  Tuesday: RECIPES[]  = [];
  Wednesday: RECIPES[]  = [];
  Thursday: RECIPES[]  = [];
  Friday: RECIPES[]  = [];
  Saturday: RECIPES[]  = [];
  Sunday: RECIPES[]  = [];

  constructor() {
    let retrievedRecipes = localStorage.getItem('Recipes') as string;    
    var Data: RECIPES[]= JSON.parse(retrievedRecipes);

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