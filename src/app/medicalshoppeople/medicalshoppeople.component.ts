import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalshoppeople',
  templateUrl: './medicalshoppeople.component.html',
  styleUrls: ['./medicalshoppeople.component.css']
})
export class MedicalshoppeopleComponent implements OnInit {
  med:any;
  constructor(public service:DataserviceService,public router:Router) { 
    // if(sessionStorage['userId']==null)
    //   this.router.navigate(['login']);
  this.getdata();
  }
  ngOnInit() {
  }
  getdata()
{
this.service.getData().subscribe((res)=>{
console.log(res);
this.med=res;
  })
}
delete(id)
{
 console.log(id);
 //const res = confirm("Are you sure want to delete emp with ID : "+id);
 //if(res==true)
 //{
 this.service.delete(id).subscribe((res)=>{
  this.getdata();
  
 }
)}

}

