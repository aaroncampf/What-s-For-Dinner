import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randonSelect(array: string) {
    let randomElement = array[Math.floor(Math.random() * array.length)];
  }

}
