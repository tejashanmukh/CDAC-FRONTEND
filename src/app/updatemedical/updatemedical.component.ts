import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MedicalshopService } from '../medicalshop.service';

@Component({
  selector: 'app-updatemedical',
  templateUrl: './updatemedical.component.html',
  styleUrls: ['./updatemedical.component.css']
})
export class UpdatemedicalComponent implements OnInit {
x:any;//medicalshopid
  msid: any;
  msname: any;
  msphno: any;
  msaddress: any;
  msoname: any;
  mscity: any;

  constructor(public router:Router,public Service:MedicalshopService,public route:ActivatedRoute) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
      this.x=this.route.snapshot.paramMap.get('sid');
      console.log(this.x);
      this.Service.getData(this.x).subscribe((res)=>{
            console.log(res);
            this.msid=res['shopid'];
            console.log(this.msid);
            this.msname=res['medicalshopname'];
            console.log(this.msname);
            this.msphno=res['phno'];
            this.mscity=res['city'];
            this.msoname=res['ownername'];
            this.msaddress=res['address'];
      },(err)=>{
        alert("something went wrong");
      })
    }
    update()
    {
      let user={
        "shopid":this.msid,
        "medicalshopname":this.msname,
        "phno":this.msphno,
        "city":this.mscity,
        "ownername":this.msoname,
        "address":this.msaddress
      }
      this.Service.update(user).subscribe((res)=>{
        if(res==1)
        {
       this.router.navigate(['medicalshop']);
        }
      })
    }
   
  ngOnInit() 
  {
  }

}
