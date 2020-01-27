import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit 
{
  data;


  constructor(public router:Router,public dataservice:DataserviceService)
   {   
    if(sessionStorage['userId']==null)
    this.router.navigate(['login']); 
    this.data=sessionStorage['userId'];
    console.log(this.data)
    
    
    }

  ngOnInit() 
  {
  }

  logout()
  {
    delete sessionStorage['userId'];
    this.router.navigate(['login']);
  }

}
