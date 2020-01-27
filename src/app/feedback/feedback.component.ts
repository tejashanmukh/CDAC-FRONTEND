import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
x:any;
value:any;
  sevar: string;
  sid: any;
  constructor(public service:FeedbackService,public router:Router,public route:ActivatedRoute) { 
    if(sessionStorage['userId']==null)
    this.router.navigate(['login']);
    this.x=this.route.snapshot.paramMap.get('did');
  console.log(this.x);
    this.sevar=sessionStorage.getItem('userId');//sevar=session variable
    console.log(this.sevar);
    this.sid=parseInt(this.sevar);
  }
add(form)
{
this.value=form;
let fd={
  "feedback":this.value.feedback,
  "did":this.x
}
this.service.add(fd,this.sid).subscribe((res)=>{

this.router.navigate(['feedbacklist']);

})
}
  ngOnInit() {
  }

}
