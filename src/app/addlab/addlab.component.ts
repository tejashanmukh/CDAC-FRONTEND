import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabserviceService } from '../labservice.service';


@Component({
  selector: 'app-addlab',
  templateUrl: './addlab.component.html',
  styleUrls: ['./addlab.component.css']
})
export class AddlabComponent implements OnInit {

  constructor(public router:Router,public service:LabserviceService){
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
   }
  add(myForm)
  {
    let data=myForm.form.value;
    console.log(data);
    this.service.add(data).subscribe((res)=>{
          if(res==1)
          {
            this.router.navigate(['laboratory']);
          }
    })
  }

  ngOnInit() {
  }

}
