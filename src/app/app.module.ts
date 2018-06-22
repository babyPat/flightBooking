import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ViewComponent } from './view/view.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes =[
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactUsComponent},
  {path: 'booking', component:BookingComponent},
  {path:'view',component:ViewComponent},
  {path:'', redirectTo: '/home',pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    ViewComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
