import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent} from './reactive/reactive.component';
import {AppComponent} from './app.component';
import {TemplatedrivenComponent} from './templatedriven/templatedriven.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes =[
  {
    path: '',
   component: DashboardComponent
  },
  {
    path: 'reactive/:id',
    component: ReactiveComponent
    },
  {
    path: 'templatedriven/:id',
    component: TemplatedrivenComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
