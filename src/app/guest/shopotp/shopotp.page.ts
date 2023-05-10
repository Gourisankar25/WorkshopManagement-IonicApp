import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopotp',
  templateUrl: './shopotp.page.html',
  styleUrls: ['./shopotp.page.scss'],
})
export class ShopotpPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private ss: ServiceService) { }
  customerlogindata: any[] = [];
  otpcode:any;

  public otpform = this.fb.group({
    otp: ['']
  })
  ngOnInit() {
    this.otpcode=Math.floor(Math.random()*200000)+10000;

    alert(this.otpcode);
  }
submit(){
  if(this.otpform.value.otp == this.otpcode){
    alert("OTP matches");
    this.router.navigate(['/guest/shopproedit']);
  }
  else{
    alert("OTP mismacthes");

  }
      }

}
