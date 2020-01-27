import { Component, OnInit } from '@angular/core';
import { LabserviceService } from '../labservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
lab:any;
  constructor(public service:LabserviceService,public router:Router) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
    this.getdata();
  }
  ngOnInit() 
  {
    //this.getdata();
  }
getdata()
{
  this.service.lablist().subscribe((res)=>{
    this.lab=res;  
  })
}
delete(id)
{
  //console.log(id);
this.service.deletelab(id).subscribe((res)=>{
  // this.getdata();
  if(res==1)
  {
    this.getdata();
  this.ngOnInit();
  }
})
}
gotoadmin()
{
  this.router.navigate(['admin']);
}
senddata(labid)
{
  this.router.navigate(['updatelab',{'sid':labid}]);
}
}
