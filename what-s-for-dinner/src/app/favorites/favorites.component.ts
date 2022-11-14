import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RECIPES } from '../Classes/recipes';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  // @Input() addToFavorites = false;
  // @Output() selectedChange = new EventEmitter<boolean>();
addToFavorites = false;
selectedChange = new EventEmitter<boolean>()

  constructor() { }

  
  ngOnInit(): void {
  }

  public toggleSelected() {
    if (this.addToFavorites){
    // this.addTofavorites = !this.addTofavorites;
    this.selectedChange.emit(this.addToFavorites);
    }
  }

// addToFavorites(){
//   let favoriteList = []
//   if (favorite === 'true') {
//     return favoriteList.push(RECIPES.name)

//   }
}
