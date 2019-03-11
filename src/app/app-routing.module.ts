import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GojsComponent } from './components/gojs/gojs.component';
import { SinglePageComponent } from './components/single-page/single-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: DatatableComponent },
 { path: 'gojs', component: GojsComponent },
 { path: 'home', component: SinglePageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
