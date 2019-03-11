import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {DataTableModule} from "angular-6-datatable";
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GojsComponent } from './components/gojs/gojs.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DatatableComponent,
    DashboardComponent,
    GojsComponent,
    SinglePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
