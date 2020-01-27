import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalshopService } from '../medicalshop.service';

@Component({
  selector: 'app-addmedical',
  templateUrl: './addmedical.component.html',
  styleUrls: ['./addmedical.component.css']
})
export class AddmedicalComponent implements OnInit {

  constructor(public router:Router,public service:MedicalshopService) {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
   }
  add(myForm)
  {
    let data=myForm.form.value;
     this.service.add(data).subscribe((res)=>{
       if(res==1)
       {
     this.router.navigate(['medicalshop']);
       }
     })
  }

  ngOnInit() {
  }

}
