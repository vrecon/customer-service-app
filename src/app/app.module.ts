import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TemplatedrivenComponent} from './templatedriven/templatedriven.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchPipe} from './dashboard/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    DashboardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
