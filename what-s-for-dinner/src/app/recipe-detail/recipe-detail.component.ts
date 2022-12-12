import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


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
   
    for (let i = 0; i <= Recipes.length-1; i++) {
      if (RecipeName == Recipes[i].name) {
        this.rp = Recipes[i];
      }
    }
    console.log(this.rp);

  }
  // public getRecipe (){
  // const RecipeName = localStorage.getItem('Recipe')
  //   for (let i = 0; i <= recipes.length; i++){
  //     if (RecipeName == recipes[i].name){
  //       this.rp = recipes[i];
        

  //     }
  //   }
  
  public exportPDF() {
    let doc = new jsPDF('p','pt','letter');
    let margin = 10;
    let scale = (doc.internal.pageSize.width - margin *2) / document.body.scrollWidth;
    doc.html(document.body, {
     x: margin,
     y: margin,
     html2canvas: {
       scale: scale,
     },
     callback:function(doc){
       doc.save('recipe.pdf')
     }
    });
     
 }

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

