import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  
  firstName:string='';
  surname:string ='';
  age:number;
  date: string ='';
  time:string;
  Atime:string;
  userSelect:String;
  userSelect1:String;

  constructor (private router:Router) { }

  ngOnInit() {
  }

  
  onBooking(){

    this.router.navigate(['/view'], {queryParams:{firstName:this.firstName, surname:this.surname, age:this.age, date:this.date,time:this.time,Atime:this.Atime,userSelect:this.userSelect, userSelect1:this.userSelect1 }});
   }

}
