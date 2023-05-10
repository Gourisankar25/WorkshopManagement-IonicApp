import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopownerreg',
  templateUrl: './shopownerreg.page.html',
  styleUrls: ['./shopownerreg.page.scss'],
})
export class ShopownerregPage implements OnInit {
  submitted=false
mydate:any;
date:any
image:any
public district: any[]=[];
public location: any[]=[];
shopdata:any

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router, private datepipe:DatePipe, private storage:AngularFireStorage) { }
  public signup=this.fb.group({
    districtname:[''],

    workshopname:['',Validators.required],
     locationname:[''],
    ownername:['',Validators.required],
    image:[''],
    email:['',[Validators.email,Validators.required]],
    contactnumber:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    type:[''],
    username:['',Validators.required],
    password:['',Validators.required],
    status:"pending",
    shopstatus:"Active"
  })

  ngOnInit() {
    this.mydate=new Date();
      this.date=this.datepipe.transform(this.mydate,'yyyy-MM-dd');


    
        this.rs.getdistrict().subscribe(res=>
          {
            console.log(res);
            this.district=res;
          }
          );

          this.rs.getlocation().subscribe(res=>
            {
              console.log(res);
              this.location=res;
            }
            );
      }



get f(){
  return this.signup.controls
}



  register()
  {
  this.submitted = true;
  if(this.signup.valid){

    if (this.signup.value.workshopname == "" || this.signup.value.ownername == "" || this.signup.value.email == "" || this.signup.value.contactnumber == "" || this.signup.value.username == "" || this.signup.value.password == ""  || this.signup.value.type == ""  || this.signup.value.image == ""  || this.signup.value.locationname == ""){
   
      alert("please fill in all fields");

    }
    else{
      this.rs.shopvalidation(this.signup.value.workshopname,this.signup.value.email,this.signup.value.contactnumber,this.signup.value.ownername)
      .pipe(take(1))
        .subscribe(res => {
          console.log(res);
          this.shopdata = res;
          if (this.shopdata.length > 0) {
            alert("Data already Exist!!!"); 
          }
          else {


    console.log(this.signup.value);
    this.rs.signup(this.signup.value,this.date).then(()=>
  {
  alert("Shop registration completed");
  this.route.navigate(['./guest/shopownerlogin']);
    });
    }
  });
  }
}
}

  upload(file:any) {
    const path = `workshop/${Date.now()}_${file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    const task = this.storage.upload(path, file);
    // Progress monitoring
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        const url = await res.ref.getDownloadURL();
        resolve(url);
      })
        .catch((err) => {
            console.log(err.message_);
            reject(err.code_);
          });
      });
    }
    async handlefile(event: any) {
      const files = event?.target?.files;
      if (files?.length) {
        this.image = await this.upload(files[0]);
        console.log(this.image);
        this.signup.controls.image.setValue(this.image);
        alert("File Uploaded");
  
      }
    }
  
view()
{
  this.rs.locviewbydistrict(this.signup.value.districtname).subscribe((data: any) => {
    this.location = data;
    console.log(data);
  });
}
}


