import { Component, OnInit, Input } from '@angular/core';
import { RECIPES } from 'src/app/Classes/recipes';
import recipes from 'src/assets/recipes.json';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  // @Input() favoritesList = [];
    


  

  rp: RECIPES;

  constructor() {
    this.rp = recipes[0];

    
    const RecipeName = localStorage.getItem('Recipe')
    // console.log(RecipeName)
    for (let i = 0; i <= recipes.length - 1; i++) {
      if (RecipeName == recipes[i].name) {
        this.rp = recipes[i];

      }
    }


  

}
  ngOnInit(): void {
  }

}