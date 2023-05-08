import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  informations = [
    {
      id:1,
      href:'/ve-chung-toi',
      title:'Về Chúng Tôi'
    },
    {
      id:2,
      href:'/ho-so-nang-luc',
      title:'Hồ Sơ Năng Lực'
    },
    {
      id:3,
      href:'/khach-hang-tieu-bieu',
      title:'Khách Hàng Tiêu Biểu'
    },
  ]
}
