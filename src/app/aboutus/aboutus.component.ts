import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public router:Router) {
    // if(sessionStorage['userId']==null)
    //   this.router.navigate(['login']);
   }

  ngOnInit() {
  }

}
