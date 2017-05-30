import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { IndexComponent } from './components/index/component';
import { NavbarComponent } from './components/navbar/component';

import { AboutPage } from './pages/about/component';
import { ActivityPage } from './pages/activity/component';
import { AccountPage } from './pages/account/component';
import { ContactPage } from './pages/contact/component';
import { IndexPage } from './pages/index/component';

const routes: Routes = [
  { path: 'index', component: IndexPage },
  { path: 'about', component: AboutPage },
  { path: 'activity', component: ActivityPage },
  { path: 'account', component: AccountPage },
  { path: 'contact', component: ContactPage },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterializeModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
    ],
    declarations: [
        IndexComponent,
        NavbarComponent,

        AboutPage,
        ActivityPage,
        AccountPage,
        ContactPage,
        IndexPage
    ],
    bootstrap: [ 
        IndexComponent 
    ]
})
export class AppModule { }