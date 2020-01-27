import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpatientinfo',
  templateUrl: './addpatientinfo.component.html',
  styleUrls: ['./addpatientinfo.component.css']
})
export class AddpatientinfoComponent implements OnInit {
  did:any;

  constructor(public router:Router,public dataservice:DataserviceService) { }
  form(loginform)
  {
  let data=loginform.form.value;
  console.log(data);  
  this.did=sessionStorage.getItem('userId');
  
  console.log("hiii"+this.did)
  this.dataservice.addpt(data,this.did).subscribe(res=>{
  this.router.navigate(['patient'])
  },(err)=>{

  })
}
 

  ngOnInit() {
  }
}
