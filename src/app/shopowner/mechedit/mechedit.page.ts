import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-mechedit',
  templateUrl: './mechedit.page.html',
  styleUrls: ['./mechedit.page.scss'],
})
export class MecheditPage implements OnInit {

  public mechanic:any[]=[];
  mechid: any;
  router: any;
  mechdata:any;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.mechid = params.get('id');
    });
  }

  public mechedit=this.fb.group({
    mechanicname:[''],
    location:[''],
    mechanicemail:[''],
    mechanicnumber:[''],
    status:""
  })


  ngOnInit() {
    console.log(this.mechid);
    this.vs.getmecheditbyid(this.mechid).subscribe(res=> {
      if (res) {
        this.mechedit.patchValue(res);
        this.mechanic[0]=res;
      }
    });
  }


  update() {

    if (this.mechedit.value.mechanicname == "" || this.mechedit.value.mechanicemail == "" || this.mechedit.value.mechanicnumber == "" || this.mechedit.value.location == ""){
   
      alert("please fill in all fields");
  
  
  }
  // else{
  //   this.vs.mechaniceditvalidation( this.mechedit.value.mechanicemail,this.mechedit.value.mechanicnumber)
  //   .pipe(take(1))
  //     .subscribe(res => {
  //       console.log(res);
  //       this.mechdata
  //       = res;
  //       if (this.mechdata.length > 0) {
  //         alert("Data already Exist!!!"); 
  //       }
        else {



    this.vs.editmechanic(this.mechid, this.mechedit.value).then(() => {
     alert("details updated");
     this.router1.navigate(['./shopowner/mechview']);

   });
}
}
}
