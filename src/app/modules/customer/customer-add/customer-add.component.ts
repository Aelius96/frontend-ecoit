import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { Customer } from '../../../core/model/customer/customer';
import {CustomerService} from "../../../services/customer/customer.service";
import {Product} from "../../../core/model/product/product";
import {ProductService} from "../../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Constant } from 'src/app/core/config/constant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {

  ckeConfig: any;
  url: any;
  id: any;
  customer: Customer = new Customer();
  products: Product[] = [];
  // baseUrl = `${Constant.BASE_URL}`;

  submitFail = false;
  errorMessage = "";

  image: any;
  fileToUpload: string [] = [];

  constructor(private customerService: CustomerService, private productService: ProductService,
              private route: ActivatedRoute, private router: Router) {
  }

  // ngOnInit(): void {
  //   window.sessionStorage.removeItem("redirect");
  //   this.id = this.route.snapshot.params['id'];
  //   if (this.id) {
  //     this.getCustomById(this.id);
  //   }else{
  //     this.getProducts();
  //   }
  // }

  getCustomById(id: number) {
    this.customerService.getCusById(id).subscribe(data => {
      this.customer = data;
      this.image = this.customer.thumb.pathUrl;
      this.getProductUpdate(this.customer);
    });
  }

  getProductUpdate(customer: Customer){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      if(customer.products != null){
        const sid = customer.products.map(item => item.id);
        for (let i=0; i<sid.length; i++){
          this.products.find( e => {
            if(e.id === sid[i]) e.selected = true;
          })
        }
      }
    })
  }

  getProducts(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
    })
  }

  // prepareFormData(customer: Customer, products: Product[]): FormData {
  //   const  formData = new FormData();
  //   formData.append(
  //     'customer',
  //     new Blob([JSON.stringify(customer)], {type: 'application/json'})
  //   );
  //   formData.append(
  //     'products',
  //     new Blob([JSON.stringify(products)], {type: 'application/json'})
  //   )
  //   for (let j = 0; j < this.fileToUpload.length; j++){
  //     formData.append(
  //       'thumb',
  //       this.fileToUpload[j]
  //     )
  //   }

  //   return formData;
  // }

  // addCustomer(){
  //   let customerFormData = this.prepareFormData(this.customer, this.products.filter(item => item.selected));
  //   this.customerService.addCustomer(customerFormData).subscribe(data =>{
  //     this.submitFail = false;
  //     this.goToCustomerList();
  //   },err =>{
  //     this.submitFail = true;
  //     this.errorMessage = err.error.message;
  //   })
  // }

  // updateCustomer(id: number){
  //   let customerFormData = this.prepareFormData(this.customer, this.products.filter(item => item.selected));
  //   this.customerService.updateCustomer(id, customerFormData).subscribe(data =>{
  //     this.submitFail = false;
  //     this.goToCustomerList();
  //   })
  // }

  // goToCustomerList(){
  //   this.router.navigate(['/admin/customer']);
  // }

  // onSubmit(){
  //   if(this.id){
  //     this.updateCustomer(this.id);
  //   }else{
  //     this.addCustomer();
  //   }
  // }

  // onChange(event: any) {
  //   const files = event.target.files;
  //   if (files.length === 0) return;

  //   const reader = new FileReader();
  //   this.fileToUpload = files;

  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.image = reader.result;
  //   }
  // }

  onCheckChange(event: any, product: Product){
    product.selected = event.currentTarget.checked;
  }

  notNeedFile(){
    // @ts-ignore
    document.getElementById("file-in").value = null;
    this.image = null;
    // this.onChange(this.fileToUpload);
  }

  addMoreProduct(){
    window.sessionStorage.setItem("redirect", "/admin/customer/add-new-customer");
    this.router.navigate(['/admin/product/new']);
  }
// ///
  prepareFormData(customer: Customer , products: Product[]):FormData{
    const formData= new FormData();
    formData.append(
      'customer',
      new Blob([JSON.stringify(customer)], {type: 'application/json'})
    );
     for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'imageFile',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      )
    }
      return formData;
  }

  goToCustomerList(){
    this.router.navigate(['admin/customer'])
  }

  addDataToForm(id: any){
    const cusFormData = this.prepareFormData(this.customer , this.products.filter(item => item.selected));
    this.customerService.updateCustomer(id, cusFormData).subscribe(data=>
      this.goToCustomerList());
  }

    saveCustomer(){
    let customerFormData = this.prepareFormData(this.customer, this.products.filter(item => item.selected));
    this.customerService.addCustomer(customerFormData).subscribe(data =>{
      this.submitFail = false;
      this.goToCustomerList();
    },err =>{
      this.submitFail = true;
      this.errorMessage = err.error.message;
    })
  }



  ///
  onSubmit(){
    if(this.id){
      this.addDataToForm(this.id);
    }else{
      this.saveCustomer();
    }
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    if(this.id){
      this.customerService.getCusById(this.id).subscribe(data =>{
        this.customer = data;
        this.url = this.customer.thumb.pathUrl;
      });
    }
    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      // filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
      // filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    };
    }

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
