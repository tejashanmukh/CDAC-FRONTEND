import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  san: any;
  x: any;

  constructor(public router:Router,public service:FeedbackService) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
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
  gotodoctorhome()
  {
    this.router.navigate(['doctor']);
  }
}
