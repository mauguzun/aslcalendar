import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { EventComponent } from 'src/app/modal/event/event.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {


  }

}
