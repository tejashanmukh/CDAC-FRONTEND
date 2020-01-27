import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  data: any;
  Id: string;
  value: any;
  x: string;
  dat: any;
  msg: string;

  constructor(public router:Router,public service:PatientserviceService,public route:ActivatedRoute) { 
    this.x=this.route.snapshot.paramMap.get('key');
    this.getDetails();
  }

  ngOnInit() {
  }
  getDetails()
  {
    this.service.getdr(this.x).subscribe((res)=>{
      this.data=res;
         console.log(this.data);
    })
  }

bookApp(myForm)
  {
    this.Id=sessionStorage.getItem('userId');
    console.log(this.Id);
    this.value=myForm;
  // this.l=parseInt(this.x);

  let app={
    "appDate":this.value.appDate,
    "drId":parseInt(this.x)    
     }
  
    this.service.bookAppt(app,this.Id).subscribe((res)=>{
      this.dat=res;   
      console.log(this.dat);
      console.log(this.data);
      if(this.dat!=null)
      this.msg="your request is forwarded"
    
    },(err)=>{
      this.msg="something went wrong"
    })     

  }

}
