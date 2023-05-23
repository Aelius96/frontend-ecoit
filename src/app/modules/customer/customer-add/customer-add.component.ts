import { Component } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { Customer } from '../../../core/model/customer/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {


  customer:Customer = new Customer();

  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;



  imageChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload=files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this.url= reader.result;
    }
  }
}
