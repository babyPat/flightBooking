import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  
  firstName:string;
  surname:string;
  age:number;
  date: string;
  time:string;
  Atime:string;
  userSelect:String;
  userSelect1:String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    
    this.route.queryParams.subscribe(params=>{

      this.firstName =params['firstName'];
      this.surname =params['surname'];
      this.age = params['age'];
      this.date = params['date'];
      this.time = params['time'];
      this.Atime=params['Atime'];
      this.userSelect=params['userSelect'];
      this.userSelect1=params['userSelect1'];
      
      
      console.log(this.firstName);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
      console.log(this.time);
      console.log(this.Atime);
      console.log(this.userSelect);
      console.log(this.userSelect1);
    })

}
}