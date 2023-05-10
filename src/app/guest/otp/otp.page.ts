import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

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
    this.router.navigate(['/guest/cusprofileedit']);
  }
  else{
    alert("OTP mismacthes");

  }
      }

}
