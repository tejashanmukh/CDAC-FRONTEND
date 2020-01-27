import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drdetails',
  templateUrl: './drdetails.component.html',
  styleUrls: ['./drdetails.component.css']
})
export class DrdetailsComponent implements OnInit {
  hideshow: boolean;
  details: any;
  data: any;
  drs: any;

  constructor(public router:Router,public ptservice:PatientserviceService) { }
    
  getDoctor()
  {
    this.ptservice.getdoctor().subscribe((res)=>{
        this.drs=res;
        console.log(this.drs['drDetails']);
         //  console.log(res);
      })
  
  
  }
   
  getDr(myForm)
  {
    this.data=myForm;
  //  alert(this.data.expertise+this.data.hospAddress);
  
    this.ptservice.getdoctorby(this.data).subscribe((res)=>{
      this.details=res;
      console.log(this.details);
    
      this.hideshow=true;
    
    
    })
  }
  
  goToBooking(d)
  {
  //alert(d);
  this.router.navigate(['appointment',{"key":d}]);
  }
  // route:ActivatedRoute
  // this.route.snapshot.paramsMAp.get("key");
  
  isFetch()
  {
    if(this.hideshow==true)
    {
      return true;
    }
    else
      return false;
  }
  
  ngOnInit() {
  }

}
