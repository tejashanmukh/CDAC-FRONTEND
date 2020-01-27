import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-addinfodoctor',
  templateUrl: './addinfodoctor.component.html',
  styleUrls: ['./addinfodoctor.component.css']
})
export class AddinfodoctorComponent implements OnInit {
  did;
  constructor(public router:Router,public dataservice:DataserviceService) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
  }
  form(loginform)
  {
  let data=loginform.form.value;
  console.log(data);
  this.did=sessionStorage.getItem('userId');
  
  console.log("hiii"+this.did)
  this.dataservice.add(data,this.did).subscribe(res=>{
  this.router.navigate(['doctor'])
  },(err)=>{

  })
}

  ngOnInit() 
  {
  }

}
