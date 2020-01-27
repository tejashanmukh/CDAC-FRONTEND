import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabserviceService {

  constructor(private http:HttpClient) { }
  lablist()
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/labs");
  }
  deletelab(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/labdelete/"+id);
  }
   getdata(x)
   {
     return this.http.get("http://localhost:8080/DacAug19/admin/labdetails?labid="+x);
   }
   update(lab)
   {
     return this.http.post("http://localhost:8080/DacAug19/admin/updatelab",lab);
   }
 add(data)
 {
   return this.http.post("http://localhost:8080/DacAug19/admin/addlab",data);
 }
}
