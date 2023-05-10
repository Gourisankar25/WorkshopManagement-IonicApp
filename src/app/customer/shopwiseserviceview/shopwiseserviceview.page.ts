import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-shopwiseserviceview',
  templateUrl: './shopwiseserviceview.page.html',
  styleUrls: ['./shopwiseserviceview.page.scss'],
})
export class ShopwiseserviceviewPage implements OnInit  {
  shopid: any;
mydate:any;
date:any


  public services: any[]=[];
  public feedback: any[]=[];

  constructor(private view:ServiceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router) {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.shopid = params.get('id');
    });
   }

   public signup=this.fb.group({
    feedback:[''], 
    customername:localStorage.getItem("customername"),
    customerid:localStorage.getItem("customerid"),


// workshopname:localStorage.getItem("workshopname"),
// workshopid:localStorage.getItem("workshopid")

  })


  ngOnInit() {

    this.view.shopwiseserviceview(this.shopid).subscribe(res=>
      {
        console.log(res);
        this.services=res;
      }
      );

      this.view.feedbackview(this.shopid).subscribe(res=>
        {
          console.log(res);
          this.feedback=res;
        }
        );


  }

  @Input()
  label!: string;
  @Input() type = 'area'; // set default type be text

  focused: boolean = false;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  register()
  {
    console.log(this.signup.value);
    this.view.feedbackadd(this.signup.value,this.shopid).then(()=>
  {
  alert("Feedback sent successfully");
  // this.router.navigate(['./customer/feedbackview']);
  });
  }


}
