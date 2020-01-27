import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  data:any;
  constructor(public router:Router,public service:FeedbackService) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
      this.getdata()
   }
   ngOnInit() {
  }

   getdata()
   {
     this.service.userlistgetdata().subscribe((res)=>{
       this.data=res;
     })
   }
   deleteUser(uid)
{
  
    this.service.deleteusers(uid).subscribe((res:any)=>{
     
      this.getdata();
      this.ngOnInit();
      
        console.log("in log");
     
      })
}  

 
}
