import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent {

  constructor(private route: Router) {
   localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

}

