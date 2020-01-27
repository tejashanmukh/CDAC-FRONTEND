import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { 
    if(sessionStorage['userId']==null)
      this.router.navigate(['login']);
  }

  logout()
  {
    delete sessionStorage['userId'];
    this.router.navigate(['login']);
  }
  ngOnInit() {
  }

}
