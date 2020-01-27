import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-listalldoctors',
  templateUrl: './listalldoctors.component.html',
  styleUrls: ['./listalldoctors.component.css']
})
export class ListalldoctorsComponent implements OnInit {
doc:any;
drd={};
drd1:any;
degree:any;
  san: Object;
  constructor(public router:Router,public service:DoctorsService) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
    this.getdata();
   }
   getdata()
   {
    this.service.getdata().subscribe((res)=>{
      console.log(res);
      this.san=res;
      this.drd=this.san
      
      console.log(this.drd);
      this.drd1=this.drd[0];
      console.log(this.drd1);
      this.doc=res;
      console.log(this.doc);
    })
   }
   feedbackform(doctorId)
   {
      
     this.router.navigate(['feedback',{'did':doctorId}]);
   }

  ngOnInit() {
  }

}
