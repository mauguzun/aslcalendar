import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { ApiService } from '../../api.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  public doLogin = false;

  form: FormGroup;
  constructor(private api: ApiService, private route: Router, private snackBar: MatSnackBar) {


    if (window.localStorage.getItem('token')) {
      this.route.navigate(['/logout']);
    }

  }

  ngOnInit() {



    this.form = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.min(5)]),

    });

  }



  onSubmit() {
    const formData = this.form.value;

     this.doLogin = true;  
    this.api.login(formData.Email, formData.Password).subscribe(e => {

      if (e['error'] === null) {
        window.localStorage.setItem('token', e['token']);
        this.route.navigate(['/step']);
      } else {
        this.snackBar.open(e['error'], null, { duration: 2000 });
      }
      this.doLogin = false;
    },
      err => { this.snackBar.open('servers error', null, { duration: 2000 }); },
      () => { this.doLogin = false; })

  }

}
