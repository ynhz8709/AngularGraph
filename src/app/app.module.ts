import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';

import {DataTableModule} from "angular-6-datatable";
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GojsComponent } from './components/gojs/gojs.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DatatableComponent,
    DashboardComponent,
    GojsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
