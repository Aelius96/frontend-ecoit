import { Component } from '@angular/core';

@Component({
  selector: 'app-number-home',
  templateUrl: './number-home.component.html',
  styleUrls: ['./number-home.component.css']
})
export class NumberHomeComponent {

numbers=[
  {
    id:1,
    icon:'fa fa-users',
    num: '+100000',
    tittle: 'Người Dùng'
  },
  {
    id:2,
    icon:'fa fa-laptop',
    num: '+10',
    tittle: 'Năm Kinh Nghiệm'
  },
  {
    id:3,
    icon:'fa fa-book',
    num: '+150',
    tittle: 'Dự Án Đã Hoàn Thành'
  },
  {
    id:4,
    icon:'fa fa-user',
    num: '+50',
    tittle: 'Cán Bộ Nhân Viên'
  },
]

}
