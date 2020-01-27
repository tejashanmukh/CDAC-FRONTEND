import { Component, OnInit } from '@angular/core';
import { DataserviceService} from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user;
id;
  constructor(public dataservice:DataserviceService,public router:Router) 
  {
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
  }
  login(loginform)
  {
    let data=loginform.form.value;
    console.log(data);
    this.dataservice.Login(data).subscribe(res=>{
      this.user=res;
      console.log(this.user.userType)
      sessionStorage['userId']=res['userId'];
      this.id=sessionStorage['userId'];
      console.log(this.id);
      console.log()
    if(this.user!=null)
    {
     if(this.user.userType=="DOCTOR")
     {
      this.router.navigate(['doctor']);
     }
      else if(this.user.userType=="ADMIN")
      {
      this.router.navigate(['admin']);
      }
      else
      {
         this.router.navigate(['patient']);
      }
    }
  },(err)=>{
   alert("something went wrong");
  })
}
gotoregister()
{
  this.router.navigate(['register']);
 }



  ngOnInit() {
  }

}
