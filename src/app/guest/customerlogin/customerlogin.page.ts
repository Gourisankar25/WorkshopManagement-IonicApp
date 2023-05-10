import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.page.html',
  styleUrls: ['./customerlogin.page.scss'],
})
export class CustomerloginPage implements OnInit {

  constructor(route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }


  gotoLoginpage(){
    this.router.navigate(['/guest/customersignin']);
  }

  registerUser(){ 
    this.router.navigate(['/guest/customersignup']);
  }
}
