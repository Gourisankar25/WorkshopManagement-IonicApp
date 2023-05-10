import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-cusforgot',
  templateUrl: './cusforgot.page.html',
  styleUrls: ['./cusforgot.page.scss'],
})
export class CusforgotPage implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private ss: ServiceService,router:ActivatedRoute) { }
  email:any;
  phonenumber=0;

  customerlogindata: any[] = [];
  public forgotform = this.fb.group({
    customeremail: [''],
    customernumber: ['']
  })
  ngOnInit() {
  }
submit(){
  console.log(this.forgotform.value);
  this.ss.forgotcustomer(this.forgotform.value.customeremail,this.forgotform.value.customernumber)
    .pipe(take(1))
    .subscribe((res: any[]) => {
      console.log(res);
      this.customerlogindata = res;
      if (this.customerlogindata.length > 0) {
         this.email=this.forgotform.value.customeremail
        localStorage.setItem("customeremail",this.email)
        
        this.route.navigate(['/guest/otp']);
      }
      else 
      {
        alert("Email or Phonenumber Mismatched");
        this.route.navigate(['/guest/cusforgot']);

      
      }

    
      });
}
}