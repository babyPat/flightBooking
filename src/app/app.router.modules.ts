import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import {BookingComponent }from './booking/booking.component';
import { ViewComponent } from './view/view.component';

export const AppRoutes= [

    {path:'', Component:HomeComponent},
    {path:'booking', Component:BookingComponent },
    {path:'view', Component:ViewComponent}

];