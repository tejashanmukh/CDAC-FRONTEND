import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-shop',
  templateUrl: './medical-shop.component.html',
  styleUrls: ['./medical-shop.component.css']
})
export class MedicalShopComponent implements OnInit {
med:any;
  isLoadingResults: boolean;

  constructor(public service:DataserviceService,public router:Router) {
 if(sessionStorage['userId']==null)
    this.router.navigate(['login']);
    
    this.getdata();   
    
   }
   ngOnInit()
   {
    // this.getdata();
  }

getdata()
{
this.service.getData().subscribe((res)=>{
console.log(res);
this.med=res;
  })
}
delete(id)
{
 console.log(id);
 //const res = confirm("Are you sure want to delete emp with ID : "+id);
 //if(res==true)
 //{
 this.service.delete(id).subscribe((res)=>{
  this.getdata();
  
 }
)}
// sendto()
// {
//   this.router.navigate(['addmedical']);
// }
senddata(shopid)
{
   this.router.navigate(['updatemedical',{'sid':shopid}]);
}
gotohome()
{
  this.router.navigate(['admin']);
}
}

