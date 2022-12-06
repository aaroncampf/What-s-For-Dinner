import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  

  rp: Recipe;

  constructor() {

    let retrievedRecipes = localStorage.getItem('Recipes') as string; 
    
    const Recipes:Recipe[] = JSON.parse(retrievedRecipes);

    this.rp = Recipes[0];
    
    
    const RecipeName = localStorage.getItem('Recipe')
    console.log(RecipeName)
    for (let i = 0; i <= Recipes.length-1; i++) {
      if (RecipeName == Recipes[i].name) {
        this.rp = Recipes[i];

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

