import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(public router:Router,public service:FeedbackService){ 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
  }
  add(myForm)
  {
   let  data=myForm.form.value;
   console.log(data);
   this.service.addarticle(data).subscribe((res)=>{
     if(res==1)
     {
     this.router.navigate(['doctor']);
     }
   })
  }
  

  ngOnInit() {
  }

}
