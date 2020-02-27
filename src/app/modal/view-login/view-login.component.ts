import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/option.service';
import { EventComponent } from '../event/event.component';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewLoginService } from 'src/app/view-login.service';
import { ViewLogin } from 'src/app/calendar-event.model';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.less']
})
export class ViewLoginComponent implements OnInit {

  constructor(private service: OptionService,
              private matDialogRef: MatDialogRef<EventComponent>,
              private viewLogin: ViewLoginService,
              private snackBar: MatSnackBar) { }
  form: FormGroup;
  ngOnInit() {

    this.form = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Name: new FormControl(null, [Validators.required, Validators.min(5)]),

    });

  }
  onSubmit() {
    const formData = this.form.value;
    this.viewLogin.setData(new ViewLogin(formData.Name, formData.Email));
    this.matDialogRef.close();
  }
}
