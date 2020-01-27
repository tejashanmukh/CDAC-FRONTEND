import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  san: any;
  x: any;
  constructor(public router:Router,public service:FeedbackService) { 
    // if(sessionStorage['userId']==null)
    //   this.router.navigate(['login']);
    this.getdata();
  }
  getdata()
  {
    this.service.getdata().subscribe((res)=>{
      console.log(res);
      this.san=res;
      this.x=this.san.drDetails;
    })
  }
  ngOnInit() {
  }

}
