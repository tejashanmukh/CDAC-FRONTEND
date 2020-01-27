import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }

  getdoctor()
  {
   return this.http.get("http://localhost:8080/DacAug19/patient/drdetails");
  }


  getdoctorby(user)
  {
   return this.http.post("http://localhost:8080/DacAug19/patient/drdetailsby",user);
  }
  getdr(x)
  {
    return this.http.get("http://localhost:8080/DacAug19/patient/drdetailsbyId/"+x);

  }
  
  bookAppt(app,Id)
  {
    console.log(app);
    console.log(Id);
    return this.http.post("http://localhost:8080/DacAug19/appointment/app?id="+Id,app);
  }
  getApptdt(uId) 
  {
   return this.http.get("http://localhost:8080/DacAug19/appointment/getApptdetailsofPatient?id="+uId);
  }

}
