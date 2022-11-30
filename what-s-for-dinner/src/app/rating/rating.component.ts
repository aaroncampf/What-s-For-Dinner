import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  review = "";
  postReview : string[] = [];

  post() {
    this.postReview.push(this.review);
    this.review = ""; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
