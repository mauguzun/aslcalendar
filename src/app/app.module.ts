import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './pages/start/start.component';
import { FullCalendarModule  } from '@fullcalendar/angular'; // for FullCalendar!

import {
  MatChipsModule,
  MatButtonModule,
  MatListModule, 
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDialog,
  MatDialogModule
} from '@angular/material';
import { BeginFormComponent } from './pages/begin-form/begin-form.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './modal/event/event.component';
import { StepsComponent } from './pages/steps/steps.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { ConfirmComponent } from './pages/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    StartComponent,
    BeginFormComponent,
    CalendarComponent,
    EventComponent,
    StepsComponent,
    ConfirmComponent,
  ],
  imports: [
    TextInputAutocompleteModule,
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EventComponent]

})
export class AppModule { }
