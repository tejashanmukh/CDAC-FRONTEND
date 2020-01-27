import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateptinfo',
  templateUrl: './updateptinfo.component.html',
  styleUrls: ['./updateptinfo.component.css']
})
export class UpdateptinfoComponent implements OnInit {
  user(user: any) {
    throw new Error("Method not implemented.");
  }
  name(name: any) {
    throw new Error("Method not implemented.");
  }
  Id: any;
  Name: any;
  Email: any;
  sid: any;
  Password: any;
  Phoneno: any;
  Age: any;
  UserType: any;
  UserGender: any;
  ptd: any;
  ptId: any;

  constructor(public service:DataserviceService,public router:Router) { 
    this.sid=sessionStorage['userId'];
      console.log(this.sid);
      this.service.getdata(this.sid).subscribe((res)=>{
                console.log(res);
                this. Id=res['userId'];  
                this.Name=res['name'];
                this.Email=res['email'];
               // this.Address=res['address'];
                //this. Password=res['password'];
                this.Phoneno=res['phone'];
                this.Age=res['age'];
                this.UserType=res['userType'];
                this.UserGender=res['userGender'];
                this.ptd=res['ptDetails'];
                this.ptId=this.ptd["patientId"];
                console.log(this.ptd);
                console.log(this.user);
                console.log(this.name);
               
      },(err)=>{
      alert("error in getting details from backend");
      })
    }
    update()
    {
  
      console.log(this.result);
      console.log(this.data);
     let user={
      "userId": this.Id,
      "name": this.Name,
      "email": this.Email,
     // "password":this.Password,
      "phone": this.Phoneno,
      "age": this.Age,
      "userType": this.UserType,
      "userGender": this.UserGender,
      "ptDetails": 
      {
          "patientId":this.ptId,
          "ptWeight": this.ptd['ptWeight'],
          "bloodgroup":this.ptd['bloodgroup'],
          "height":this.ptd['height'],
          "bodyMassIndex":this.ptd['bodyMassIndex']
      }
     
    }
  this.service.updatept(user).subscribe((res)=>{
  this.router.navigate(['login']);
  })
  }
  data(data: any) {
    throw new Error("Method not implemented.");
  }
  result(result: any) {
    throw new Error("Method not implemented.");
  }

   gotologinpage()
   {
     this.router.navigate(['login']);
   }


  ngOnInit() {
  }

}
