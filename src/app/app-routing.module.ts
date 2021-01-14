import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
