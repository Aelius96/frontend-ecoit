import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { TokenStorageService } from '../../../services/token-storage/token-storage.service';
import { Recruit } from 'src/app/core/model/recuit/recuit';

@Component({
  selector: 'app-recuit-control',
  templateUrl: './recuit-control.component.html',
  styleUrls: ['./recuit-control.component.css']
})
export class RecuitControlComponent implements OnInit {

  recruitlist: Recruit[]=[];
  role: string;
  
  constructor(private router:Router,
              private recruitService: RecruitService,
              private tokenStorageService: TokenStorageService
     ) {  }
  ngOnInit(): void {
    if( this.tokenStorageService.getToken())
    this.listAll();
    const user =this.tokenStorageService.getUser();
    this.role = user.roles;
  }

  listAll(){
    this.recruitService.listAll().subscribe(data => {
      return this.recruitlist = data;
    })
  }
  
  updateRecruit(id: number){
    return this.router.navigate([`admin/recruit/update/${id}` ])
  }

  deleteRecruit(id:number){
    let option = confirm("Dữ liệu sẽ bị xóa. Bạn có muốn tiếp tục");
     if (option){
      this.recruitService.deleteRecruit(id).subscribe(data =>{
        this.recruitService.listAll();
      })
     }
  }
}
