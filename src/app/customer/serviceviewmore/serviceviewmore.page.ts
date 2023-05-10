import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-serviceviewmore',
  templateUrl: './serviceviewmore.page.html',
  styleUrls: ['./serviceviewmore.page.scss'],
})
export class ServiceviewmorePage  {

  shopid: any;
  mydate:any;
  date:any;

  public services: any[]=[];
  constructor(private fb:FormBuilder,private view:ServiceService,private route1:ActivatedRoute, private datepipe:DatePipe, private route:Router) {
    this.route1.paramMap
    .subscribe((params: ParamMap) => {
      this.shopid = params.get('id');
    });
   }


   public service=this.fb.group({
    description:[''],
    landmark:[''],
    date:[''],
    customername:localStorage.getItem("customername"),
    customerid:localStorage.getItem("customerid"),
    pickup:['']



// workshopname:localStorage.getItem("workshopname"),
// workshopid:localStorage.getItem("workshopid")

  })




  ionViewDidEnter() {

    this.mydate=new Date();
    this.date=this.datepipe.transform(this.mydate,'yyyy-MM-dd');


    this.view.shopwiseserviceviewmore(this.shopid).subscribe(res=>
      {
        console.log(res);
        this.services[0]=res;
        // this.service.patchValue(this.services[0])
      }
      );
  }


register(){
  if (this.service.value.description == "" || this.service.value.landmark == "" || this.service.value.pickup == ""){
   
    alert("please fill in all fields");


}
else{
  console.log(this.service.value);
  this.view.servicereq(this.service.value,this.date,this.services[0]).then(()=>
{
alert("Request send succesfully");
this.route.navigate(['./customer/index']);
});
}

}









}
