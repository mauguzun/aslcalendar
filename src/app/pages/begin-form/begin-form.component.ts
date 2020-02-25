import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-begin-form',
  templateUrl: './begin-form.component.html',
  styleUrls: ['./begin-form.component.less']
})
export class BeginFormComponent implements OnInit {


  form: FormGroup;
  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }



  onSubmit() {
    const formData = this.form.value;
    this.eventService.title = formData.title;
    this.eventService.type = formData.type;
    this.eventService.notes = formData.notes;

  }
}
