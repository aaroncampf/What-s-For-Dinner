import { Component, OnInit } from '@angular/core';
import recipes from 'src/assets/recipes.json';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor() {
    this.getMultipleRandomRecipes;
  }

  ngOnInit(): void {
  }

  getMultipleRandomRecipes(array: string) {
    const arr = recipes;
    const multipleRandomRecipes =[];

    for(let i=0; i < 7; i++){
      const index = Math.floor(Math.random() * arr.length);
      multipleRandomRecipes.push(arr.splice(index, 1)[0]);
    }
    
    return multipleRandomRecipes;
  }

}