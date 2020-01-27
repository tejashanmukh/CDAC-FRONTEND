import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  apptDetails: any;
  msg: string;
  uId: any;

  constructor(public router:Router,public service:PatientserviceService) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
      this.uId=sessionStorage.getItem("userId");
  }

  ngOnInit() {
  }
  logout()
  {
    delete sessionStorage['userId'];
    this.router.navigate(['login']);
  }
  getApptDetails()
{
   this.service.getApptdt(this.uId).subscribe((res)=>{
    if(res!=null)
     this.apptDetails=res;
    else
     this.msg="Sorry no appointment to show";
   
    })

}

}
