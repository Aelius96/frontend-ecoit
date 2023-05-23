import {Component, OnInit} from '@angular/core';
import {Recruit} from "../../../core/model/recuit/recuit";
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitService} from "../../../services/recruit/recruit.service";

@Component({
  selector: 'app-recruit-add',
  templateUrl: './recruit-add.component.html',
  styleUrls: ['./recruit-add.component.css']
})
export class RecruitAddComponent implements OnInit{

  recruit: Recruit = new Recruit()
  fileToUpload:string [] = [];
  id: any;
  url: any;
  isUpdate= false;
  ckeConfig: any;

constructor(private router:Router ,
            private route:ActivatedRoute,
            private recruitService:RecruitService ) {
}

ngOnInit() {
  

}

  getRecruitById(id: any) {
    this.recruitService.getById(id).subscribe(data => {
      this.recruit = data;
      this.url = this.recruit.thumb.pathUrl;
    });
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
