import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../models/recipe.model';
// import { FavoritesComponent } from '../favorites/favorites.component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  // @Input() favoritesList = [];
    
  rp: Recipe;

  constructor() {
    let retrievedRecipes = localStorage.getItem('Recipes') as string; 
    
    const Recipes:Recipe[] = JSON.parse(retrievedRecipes);

    this.rp = Recipes[0];

    
    const RecipeName = localStorage.getItem('addFavorite')
    // console.log(RecipeName)
    for (let i = 0; i <= Recipes.length - 1; i++) {
      if (RecipeName == Recipes[i].name) {
        this.rp = Recipes[i];

      }
    }
}

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
  
ngOnInit(): void {
  }

}