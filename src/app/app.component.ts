import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public guest = [
    { title: 'Home', url: '/guest/index', icon: 'home' },

    { title: 'Admin Login', url: '/guest/adminlogin', icon: 'log-in' },
    { title: 'Workshop Login', url: '/guest/shopownerlogin', icon: 'people' },
    { title: 'Customer Login', url: '/guest/customerlogin', icon: 'people'},
    // { title: 'Admin Login', url: '/folder/Archived', icon: 'archive' },
    { title: 'Customer Registration', url: '/guest/customersignup', icon: 'person-add' },
    { title: 'Workshop Registration', url: '/guest/shopownerreg', icon: 'person-add' },

  ];
  public admin = [
    { title: 'Index', url: '/admin/index', icon: 'home' },
    // { title: '', url: '/Admin/categoryview', icon: 'heart' },
    { title: 'Location View', url: '/admin/locview', icon: 'location' },
    { title: 'Workshop Requests', url: '/admin/workshopview', icon: 'mail' },
    { title: 'Reports', url: '/admin/reports', icon: 'document' },

    { title: 'Logout', url:'/guest/index', icon: 'power' }
  ];
  public customer = [
    { title: 'Home', url: '/customer/index', icon: 'home' },

    { title: 'Personal Information', url: '/customer/customerprofile', icon: 'walk' },

    { title: 'My Request', url: '/customer/myrequest', icon: 'mail' },

    { title: 'Log Out', icon: 'power', url:'/guest/index' },
  ];
  public shopowner = [
    { title: 'Home', url: '/shopowner/index', icon: 'home' },

    { title: 'My Profile', url: '/shopowner/myprofile', icon: 'person' },
    { title: 'Service View', url: '/shopowner/shopserviceview', icon: 'list' },
    { title: 'Mechanic View', url: '/shopowner/mechview',  icon: 'construct' },
    { title: 'Customer Request', url: '/shopowner/customerreqview',  icon: 'mail' },


    { title: 'Log Out', url:'/guest/index', icon: 'power' },
  ];
public sidemenutitle='';
public menuitems:any;
public name:any;

  
  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url.includes('admin/'))
        {
         this.menuitems=this.admin;
         this.sidemenutitle='Admin Dashboard';
         this.name='Back!';

        }
        if(this.router.url.includes('guest/'))
        {
         this.menuitems=this.guest;
         this.sidemenutitle='Guest Dashboard';
         this.name=' to Mechanic Portal';
        }
        if(this.router.url.includes('customer/'))
        {
         this.menuitems=this.customer;
         this.sidemenutitle='Customer Dashboard';
         this.name=localStorage.getItem("customername");

        }
        if(this.router.url.includes('shopowner/'))
        {
         this.menuitems=this.shopowner;
         this.sidemenutitle='Shopowner Dashboard';
         this.name=localStorage.getItem("workshopname");
        }
      }
    });
  }
}
