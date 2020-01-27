import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  Login(user)
  {
    console.log(user);
    return this.http.post("http://localhost:8080/DacAug19/user/login",user);
  }
  register(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/register",data);
  }
  add(data,did)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/registerDoc/"+did,data);
  }
  GetOtp(data)
  {
    console.log(data);
    return this.http.get("http://localhost:8080/DacAug19/user/forgot?em="+data);
  }
  setpass(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/setpass",data);
  }
  update(user)
  {
    
    console.log(user)
    return this.http.post("http://localhost:8080/DacAug19/doctor/updateDoc",user);
  }
  getdata(sid){
    console.log(sid);
    return this.http.get("http://localhost:8080/DacAug19/doctor/drDetails?id="+sid);
  }
  getData()
  {
    console.log()
    return this.http.get("http://localhost:8080/DacAug19/admin/list");
  }
  delete(id)
  {
    console.log(id);
    return this.http.get("http://localhost:8080/DacAug19/admin/delete/"+id);
  }
  addpt(data,did)//add patient details
  {
    console.log(did);
    console.log(data);
    return this.http.post("http://localhost:8080/DacAug19/user/registerPt/"+did,data);

  }
  updatept(user)
  {
    console.log(user);
    return this.http.post("http://localhost:8080/DacAug19/patient/patientDetails",user);
  }


}
