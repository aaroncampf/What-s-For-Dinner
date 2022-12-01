import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = "What's for Dinner?";

  constructor(private router: Router) { }
  //add a recipe into the constructor.
  


  navigate(destination: string)
  {
    this.router.navigateByUrl(destination);
  }


}


