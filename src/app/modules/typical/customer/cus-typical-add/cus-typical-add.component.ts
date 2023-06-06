import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { TypicalCustomerService } from 'src/app/services/typical-customer/typical-customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TypicalCustomer } from '../typical-customer';
import { CustomerService } from '../../../../services/customer/customer.service';

@Component({
  selector: 'app-cus-typical-add',
  templateUrl: './cus-typical-add.component.html',
  styleUrls: ['./cus-typical-add.component.css']
})
export class CusTypicalAddComponent implements OnInit {

 typicalCustomer: TypicalCustomer= new TypicalCustomer()


  fileToUpload:string [] = [];
  url: any;
  id: any;
  baseUrl=`${Constant.BASE_URL}`
  
  constructor(private typicalcusService: TypicalCustomerService,
                private http: HttpClient,
                private router: Router,
               private route: ActivatedRoute

     ){}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    if(this.id){
      this.typicalcusService.getTypicalcusById(this.id).subscribe(data=>{
        this.typicalCustomer = data;
        this.url = this.typicalCustomer.image.pathUrl;
      })
    }
  }
  
  prepareFormData(typicalCustomer: TypicalCustomer):FormData{
    const formData = new FormData();
    formData.append(
       'customer-typical',
       new Blob([JSON.stringify(typicalCustomer)] , {type:'application/json'})
    );
    for (let i=0 ; i<this.fileToUpload.length; i++){
      formData.append(
        'imageFile',
        this.fileToUpload[i]
      )
    }
    return formData
  }

  gototypicalList(){
    this.router.navigate(['/admin/customer-typical'])
  }

  saveTyCus(){
    const tycusFormData = this.prepareFormData(this.typicalCustomer);
    this.typicalcusService.createtycus(tycusFormData).subscribe(data =>{
        this.gototypicalList();
      },
      error => console.log(error)); 
  }

  addDataToForm(id: any){
    const newsFormData = this.prepareFormData(this.typicalCustomer);
    this.typicalcusService.updatetycus(id, newsFormData).subscribe(data =>{
      this.gototypicalList();
    });
  }

  onSubmit(){
    if(this.id){
      this.addDataToForm(this.id);
    }else{
      this.saveTyCus()
    }
  }

  // notFile(){
  //   document.getElementById("file-input").value =null;
  //   this.url =null;
  //   this.fileToUpload =null;
  // }

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
