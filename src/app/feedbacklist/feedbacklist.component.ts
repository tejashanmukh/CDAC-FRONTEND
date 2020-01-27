import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit {
  
  sedoc: any;
  sid: number;
  shanmukh: any;

  constructor(public router:Router,public service:FeedbackService) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
    this.sedoc=sessionStorage.getItem('userId');//secdoc=session of doctor that has doctor logged in
     console.log(this.sedoc);
     this.sid=parseInt(this.sedoc);
     this.getdata();
   }
  getdata()
  {
     this.service.getfeedback(this.sid).subscribe((res)=>{
       console.log(res);
       this.shanmukh=res;
     })
  }

  ngOnInit() {
  }

}
