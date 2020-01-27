import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public http:HttpClient) {
   }
   add(data,se)
   {
     return this.http.post("http://localhost:8080/DacAug19/feedback/feedbackpatients?id="+se,data);
   }
   getfeedback(id)
   {
     return this.http.get("http://localhost:8080/DacAug19/feedback/getfeedbackaccdoctor?id="+id);
   }
   getdata()
   {
     return this.http.get("http://localhost:8080/DacAug19/admin/articles");
   }
   addarticle(data)
   {
     return this.http.post("http://localhost:8080/DacAug19/admin/registerarticle",data);
   }
   userlistgetdata()
   {
     return this.http.get("http://localhost:8080/DacAug19/admin");
   }
   deleteusers(id)
   {
     return this.http.get("http://localhost:8080/DacAug19/admin/deleteUser/"+id);
       
   }
}
