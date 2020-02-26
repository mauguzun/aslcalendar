import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {


  form: FormGroup;

  constructor() {



  }

  ngOnInit() {



    this.form = new FormGroup({
      Name: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.min(6)]),

    });

  }



  onSubmit() {
    const formData = this.form.value;


  }


}
