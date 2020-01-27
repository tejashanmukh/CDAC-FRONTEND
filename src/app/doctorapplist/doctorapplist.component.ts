import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctorapplist',
  templateUrl: './doctorapplist.component.html',
  styleUrls: ['./doctorapplist.component.css']
})
export class DoctorapplistComponent implements OnInit {
  Uid: string;
  appId: any;
  msg: any;
  appTptdt: any;
  result: any;

  constructor(public router:Router,public service:DoctorsService) {
    this.Uid=sessionStorage.getItem("userId");
    this.getApptList();
   }
   getApptList()
   {
    
      this.service.getApptDetails(this.Uid).subscribe((res)=>
      {
        this.result=res;                
      },(err)=>
      {
        
      }) 
 
   }
 
    
   getPatientdetails(id,AppId)
   {
     this.appId=AppId;
       console.log("getPatientdetails"+this.appId);
     this.service.getPtd(id).subscribe((res)=>{
         this.appTptdt=res;
          
         
   })         
 
   }
 
   confirmAppt()
   {
          console.log(this.appId)
      this.service.confirmApp(this.appId).subscribe((res)=>{
        this.msg=res;
        
   })
   }
   
   RejectAppt()
   {
       console.log(this.appId)
      this.service.declineApp(this.appId).subscribe((res)=>{
        this.msg=res;
   })
 
   }
  ngOnInit() {
  }

}
