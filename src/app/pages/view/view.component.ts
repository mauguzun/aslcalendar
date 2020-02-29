import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { ViewLoginComponent } from 'src/app/modal/view-login/view-login.component';
import { OptionService } from 'src/app/option.service';
import { EventService } from 'src/app/event.service';
import { ViewLogin, CalendarEvent, CalendarEventOption } from 'src/app/calendar-event.model';
import { ViewLoginService } from 'src/app/view-login.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {


  public id: string = null;
  public code: string = null;


  public loading = false;
  public event: CalendarEvent = null;

  public selected = new Set<string>();

  public viewLogin: ViewLogin = null;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public viewLoginService: ViewLoginService,
    public service: OptionService,
    public eventService: EventService,
  ) {
    this.viewLogin = this.viewLoginService.getData();
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe(code => {
      if (code.code) {
        this.code = code.code;
      }
      this.apiCall();
    })

  }
  apiCall() {
    this.apiService.viewEvent(this.id, this.viewLogin).subscribe((e) => {
      this.selected = new Set<string>();

      if (e['error'] === null) {
        this.event = e['data']['event'];
        this.event.options = [];

        e['data']['options'].forEach(option => {
          const createdOption = new CalendarEventOption(new Date(option.start), new Date(option.end));
          createdOption.id = option.id;
          this.event.options.push(createdOption);
        });


        if (e['data']['voted']) {
          e['data']['voted'].forEach(option => {
            this.selected.add(option)
          });
        }


      } else {
        this.snackBar.open(e['error'], null, { duration: 7000 });

      }
      this.loading = false;
    });
  }
  vote(id: string) {
    if (this.selected.has(id)) {
      this.selected.delete(id);
    } else {
      this.selected.add(id);
    }

  }
  open() {
    if (!this.viewLogin) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '80%';
      const dialogRef = this.dialog.open(ViewLoginComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.viewLogin = this.viewLoginService.getData();
        window.location.reload();

      });
    }

  }

  changeViewLogin() {

    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');

    this.viewLogin = this.viewLoginService.getData();
  }

  save() {


    if (this.viewLogin !== null) {
      this.loading = true;
      this.apiService.vote(this.event, this.viewLogin, this.selected, this.code).subscribe(e => {
        if (e['error'] === null) {
          this.snackBar.open("Done ! thank you", null, { duration: 2000 });
        } else {
          this.snackBar.open(e['error'], null, { duration: 2000 });
        }
        this.loading = false;

      });
    }



  }
}
