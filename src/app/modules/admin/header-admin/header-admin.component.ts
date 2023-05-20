import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit{
  ngOnInit(): void {
    this.week();
  }

  today: any;
  day: any;
  month: any;
  year: any ;




  week() {
    const weekday=[
      "Chủ nhật", "Thứ 2 ", "Thứ 3" , "Thứ 4" , "Thứ 5", "Thứ 6", "Thứ 7"
    ];
    const days = new Date();
    this.today = weekday[days.getDay()];
    this.day = days.getDate();
    this.month= days.getMonth() + 1;
    this.year= days.getFullYear();
  }


}

