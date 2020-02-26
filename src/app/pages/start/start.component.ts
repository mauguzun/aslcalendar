import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { EventComponent } from 'src/app/modal/event/event.component';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  constructor(public eventService : EventService) { }

  ngOnInit() {


  }

}
