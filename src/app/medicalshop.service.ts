import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalshopService {

  constructor(public http:HttpClient) { }
  getData(x)
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/shopdetails?shopid="+x);
  }
  update(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/admin/updatemedical",user);
  }
  add(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/admin/addmedical",data);
  }
}
