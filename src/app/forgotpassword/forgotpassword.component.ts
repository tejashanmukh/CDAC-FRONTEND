import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
message;
msg;
  constructor(public dataservice:DataserviceService,public router:Router) {
   
   }

  ngOnInit() {
  }
getotp(data)
{
  console.log(data);
  this.dataservice.GetOtp(data).subscribe((res)=>{
    this.message="change password";
    console.log(this.message);
  },error=>{
    if(error.status===200){
      this.router.navigate(['changepassword']);
    }
    else{
      this.msg="enter valid email";
    }
  
  })
}
}
