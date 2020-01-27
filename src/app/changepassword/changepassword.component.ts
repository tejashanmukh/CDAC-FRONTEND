import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  msg:string;
  flag:boolean;
  constructor(public service:DataserviceService,public router:Router) { 
    //sessionStorage['userId']==null)
      // this.router.navigate(['login']);
  }
    
  ngOnInit() {
  }
  updatepass(data)
  {
    this.service.setpass(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.msg="suucessfully changed password";
        this.flag=true;
        
      }
      else{
        this.flag=false
        this.msg="Enter valid OTP";
      }
    })
    console.log(data);
  }

  navigate()
  {
    this.router.navigate(['login']);
  }


}
