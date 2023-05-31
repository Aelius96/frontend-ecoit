import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent {


  
  constructor(private router:Router,
             ) {
  }
  
    updateNews(id: number){
      return this.router.navigate(['new/update', id]);
  
    }
  
  

}
