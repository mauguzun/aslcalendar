import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  public logined = false;
  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('token')) {
    
      this.logined = true;
    }
  }

}
