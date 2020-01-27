import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LabserviceService } from '../labservice.service';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-updatelab',
  templateUrl: './updatelab.component.html',
  styleUrls: ['./updatelab.component.css']
})
export class UpdatelabComponent implements OnInit {
  
x:any;
  Labid: any;
  Name: any;
  Adress: any;
  City: any;
  Email: any;
  Phonenum: any;
  Address: any;
  constructor(public router:Router,public service:LabserviceService,public route:ActivatedRoute) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
    this.x=this.route.snapshot.paramMap.get('sid');
    console.log(this.x);
    this.service.getdata(this.x).subscribe((res)=>{
             console.log(res);
            this.Labid=res['labid'];
            console.log(this.Labid);
             this.Name=res['name'];
             this.Address=res['address'];
             this.City=res['city'];
              this.Email=res['email'];
             this.Phonenum=res['phonenum'];
    })
   }
   update()
   {
     let lab={
     "labid":this.Labid,
     "name":this.Name,
     "address":this.Address,
     "city":this.City,
     "email":this.Email,
     "phonenum":this.Phonenum
     }
     this.service.update(lab).subscribe((res)=>{
       if(res==1)
       {
         this.router.navigate(['laboratory']);
       }
     })

   }

  ngOnInit() {
  }

}
