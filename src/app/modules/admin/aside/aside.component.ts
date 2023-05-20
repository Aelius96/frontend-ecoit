import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  aside =[
    {
      id:1,
      tittle:'dashboard',
      a: '/admin',
      icon:'far fa-home'
    },
    {
      id:2,
      tittle:'Tin tức - Tuyển dụng',
      a: 'news',
      icon:'far fa-newspaper'
    },
    {
      id:3,
      tittle:'Blog',
      a: 'blogs',
      icon:'far fa-rss-square'
    },
    {
      id:4,
      tittle:'Khách hàng',
      a: 'news',
      icon:'far fa-handshake'
    },
    {
      id:5,
      tittle:'sản phầm',
      a: '/admin',
      icon:'far fa-box'
    },
    {
      id:6,
      tittle:'Trình chiếu',
      a: '/admin',
      icon:'far fa-columns'
    },
    {
      id:7,
      tittle:'Điều hướng',
      a: '/admin',
      icon:'far fa-bars'
    },
    {
      id:8,
      tittle: 'Tài khoản',
      a: '/admin',
      icon:'far fa-user'
    }

  ]

}
