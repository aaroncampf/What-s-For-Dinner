import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/Classes/recipes';
import recipes from 'src/assets/recipes.json';
@Component({
  selector: 'week-display',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.css']
})
export class WeekDisplayComponent implements OnInit {

  rp: RECIPES;

  constructor() {
    this.rp = recipes[0];
    let day1 = "Monday";
    let day2 = "Tuesday";
    let day3 = "Wednesday";
    let day4 = "Thursday";
    let day5 = "Friday";
    let day6 = "Saturday";
    let day7 = "Sunday";

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    

    // const daysOfWeek = [];
    // day[0] = "Monday";
    // day[1] = "Tuesday";
    // day[2] = "Wednesday";
    // day[3] = "Thursday"; 
    // day[4] = "Friday";
    // day[5] = "Saturday";
    // day[6] = "Sunday";
    // add array of the week and in the constructor add a sample ingredient
    
    const RecipeName = localStorage.getItem('Recipes')
    console.log(RecipeName)
    for (let i = 0; i <= recipes.length-1; i++) {
      if (RecipeName == recipes[i].name) {
        this.rp = recipes[i];

      }
    }


  }
  // public getRecipe (){
  // const RecipeName = localStorage.getItem('Recipe')
  //   for (let i = 0; i <= recipes.length; i++){
  //     if (RecipeName == recipes[i].name){
  //       this.rp = recipes[i];
        

  //     }
  //   }
  

  //   let name = this.router.snapshot.paramMap.get("name");
  //   getRecipe(){
  //   for (let i = 0; i <= recipes.length; i++){
  //     if (selectedRecipe === recipes[i].name){
  //       this.rp = recipes[i]
  //     }
  //   }
  
    
  // }
  ngOnInit(): void {
  }

  // getRecipe(recipe: any) {

  //   for (let i = 0; i <= recipes.length; i++) {
  //     if (recipe.name === recipes[i].name) {
  //       recipes.push(recipes[i]);
  //     }
  //   }


  // }
//   constructor(private route: ActivatedRoute, public rp: RECIPES){}

  }


// ngOnInit() {
  
//   // let name = this.route.snapshot.paramMap.get("name");
//   let name = "Bisquick Quiche"
//   console.log(name)
//   for (let i = 0; i <= recipes.length; i++){
//     if (name === recipes[i].name){
//       this.rp = recipes[i]
//     }
//   }
// this.rp = recipes[0]

// }

