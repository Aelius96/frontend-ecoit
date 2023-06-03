import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-adress',
  templateUrl: './about-adress.component.html',
  styleUrls: ['./about-adress.component.css']
})
export class AboutAdressComponent {

  constructor( private router: Router) { }

  rollbackToList(){
    this.router.navigate(['/admin/about']);
  }
}
