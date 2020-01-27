import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(public http:HttpClient) { 
  }
  getdata()
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/listofDoctordetails");
  }
  getApptDetails(id)
{
  console.log("inside"+id);
  return this.http.get("http://localhost:8080/DacAug19/appointment/getApptlist?did="+id);
}

getPtd(id)
{
  console.log("inside"+id);
    return this.http.get("http://localhost:8080/DacAug19/appointment/getPtdetails?id="+id);
  
}

confirmApp(AppId)
{
  console.log("Confirm"+AppId);
  return this.http.get("http://localhost:8080/DacAug19/appointment/confirmAppt?id="+AppId);
}
declineApp(AppId)
{
  console.log("Decline "+AppId);
  return this.http.get("http://localhost:8080/DacAug19/appointment/declineAppt?id="+AppId);
}



}
