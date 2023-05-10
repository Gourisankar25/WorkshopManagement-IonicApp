import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopforgot',
  templateUrl: './shopforgot.page.html',
  styleUrls: ['./shopforgot.page.scss'],
})
export class ShopforgotPage implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private ss: ServiceService,router:ActivatedRoute) { }
  email:any;
  phonenumber=0;

  customerlogindata: any[] = [];
  public forgotform = this.fb.group({
    email: [''],
    number: ['']
  })
  ngOnInit() {
  }
submit(){
  console.log(this.forgotform.value);
  this.ss.forgotshop(this.forgotform.value.email,this.forgotform.value.number)
    .pipe(take(1))
    .subscribe((res: any[]) => {
      console.log(res);
      this.customerlogindata = res;
      if (this.customerlogindata.length > 0) {
         this.email=this.forgotform.value.email
        localStorage.setItem("email",this.email)
        
        this.route.navigate(['/guest/shopotp']);
      }
      else 
      {
        alert("Email or Phonenumber Mismatched");
        this.route.navigate(['/guest/shopforgot']);

      
      }

    
      });
}
}
