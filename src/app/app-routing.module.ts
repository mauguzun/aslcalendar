import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './pages/start/start.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './modal/event/event.component';
import { StepsComponent } from './pages/steps/steps.component';


const routes: Routes = [
  {

    path: '', component: LayoutComponent, children: [
      { path: '', component: StartComponent },
      { path: 'step', component: StepsComponent },

    ]
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
