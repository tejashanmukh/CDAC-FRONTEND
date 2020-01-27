import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
Id;
Name;
sid;
data;
user:any={};
name;
Email;
result;
drd:any={};
san:any;

  Password: any;
  Phoneno: any;
  Age: any;
  UserType: any;
  UserGender: any;
  Address: any;
  drd1;
  constructor(public service:DataserviceService,public router:Router) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
    this.sid=sessionStorage['userId'];
    console.log(this.sid);
    this.service.getdata(this.sid).subscribe((res)=>{
              console.log(res);
           
              this. Id=res['userId'];
             
              this.result=res;
              this.Name=res['name'];
              this.Email=res['email'];
            // alert(this.Name);
             
             // this.Address=res['address'];
              this. Password=res['password'];
              this.Phoneno=res['phone'];
              this.Age=res['age'];
              this.UserType=res['userType'];
              this.UserGender=res['userGender'];
              this.drd=res['drDetails'];
             this.san=this.drd['expertise'];
            //alert(this.san);
             // this.drd1=user.drd.expertise';
             // alert(this.drd1);
              console.log(this.drd);
             
    },(err)=>{
    alert("error in getting details from backend");
    })
  }
 update()
  {
    console.log(this.result);
    console.log(this.drd);
    console.log("hiiii"+this.drd['expertise']);
   
    let user={
   
    "userId": this.Id,
    "name":this.Name,
    "email": this.Email,
    "password": this.Password,
    "phone": this.Phoneno,
    "age": this.Age,
    "userType": this.UserType,
    "userGender": this.UserGender,
    "otp": 0,
    "drDetails": {
         
        "expertise": this.drd['expertise'],
        "experience": this.drd['experience'],
        "hospName":this.drd['hospName'],
        "hospAddress":this.drd['hospAddress'],
        "degree":this.drd['degree']
    
    //  "user":{"this.Id":"res['userId']","this.Name":"res['name']","this.Email":"res['email']",
    //      "this. Password":"res['password']","this.Phoneno":"res['phone']","this.Age":"res['age']",
    //     "this.UserType":"res['userType']","this.UserGender":"res['userGender']","drd":{"this.experience":"drd.experience","this.degree":"drd.degree","this.expertise":"drd.expertise"} }
    }
  }
this.service.update(user).subscribe((res)=>{


},(err)=>{
  this.router.navigate(['doctor']);
})
  }
  gotologinpage()
{
  this.router.navigate(['doctor']);
}
  ngOnInit() 
  {
  }

}
