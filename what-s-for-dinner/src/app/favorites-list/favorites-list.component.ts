import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  @Input() favoritesList = [];
    


  constructor() { }

  ngOnInit(): void {
  }

}
