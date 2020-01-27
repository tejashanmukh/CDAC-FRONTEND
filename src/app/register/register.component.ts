import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dataservice:DataserviceService,public router:Router) { 
   
  }
add(myForm)
{
  let data=myForm.form.value;
  this.dataservice.register(data).subscribe((res)=>{
    this.router.navigate(['login']);
  },(error)=>{
    alert("something went wrong");
})
}
gotologinpage()
{
  this.router.navigate(['login'])
}
  ngOnInit() {
  }

}
