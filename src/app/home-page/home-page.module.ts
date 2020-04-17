import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import {HomePageRoutes} from './home-page.routing' ;


@NgModule({
  declarations: [HomePageComponent, HomeDetailsComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRoutes),
  ]
})
export class HomePageModule { }
