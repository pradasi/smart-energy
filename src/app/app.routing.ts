import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HomePageComponent} from '../app/home-page/components/home-page/home-page.component' 
import {LoginComponent} from '../app/home-page/components/login/login.component'
const routes: Routes =[
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full',
  },
 
  {
    path: '',
    component: HomePageComponent,
    children: [{
      path: '',
      loadChildren: './home-page/home-page.module#HomePageModule'
    }]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
