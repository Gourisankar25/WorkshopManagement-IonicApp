import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
goadmin(){
  this.router.navigate(['/guest/adminlogin']);
}
goshop(){
  this.router.navigate(['/guest/shopownerlogin']);
}
gocustomer(){
  this.router.navigate(['/guest/customerlogin']);

}
}
