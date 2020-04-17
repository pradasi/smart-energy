import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component'
import {HomeDetailsComponent} from './components/home-details/home-details.component'
import {AboutUsComponent} from './components/about-us/about-us.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
export const HomePageRoutes: Routes = [
    
    //{ path: 'homePage',      component: HomePageComponent },
    { path: 'homePage',      component: HomeDetailsComponent },
    { path: 'about-us',   component: AboutUsComponent },
    { path: 'contact-us',     component: ContactUsComponent },
    
];

