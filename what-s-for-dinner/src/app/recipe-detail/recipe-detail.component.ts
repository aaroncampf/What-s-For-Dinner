import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/Classes/recipes';
import recipes from 'src/assets/recipes.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  rp: RECIPES;

  constructor() {
    this.rp = recipes[0];

    /*
    let name = this.route.snapshot.paramMap.get("name");
    //let name = "Bisquick Quiche"
    console.log(name)
    for (let i = 0; i <= recipes.length; i++){
      if (name === recipes[i].name){
        this.rp = recipes[i]
      }
    }
    */
  }
  ngOnInit(): void {
  }
//   constructor(private route: ActivatedRoute, public rp: RECIPES){}



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
}
