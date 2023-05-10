import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guest/index',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'guest/index',
    loadChildren: () => import('./guest/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'guest/customerreg',
    loadChildren: () => import('./guest/customerreg/customerreg.module').then( m => m.CustomerregPageModule)
  },
  {
    path: 'guest/shopownerreg',
    loadChildren: () => import('./guest/shopownerreg/shopownerreg.module').then( m => m.ShopownerregPageModule)
  },
  {
    path: 'guest/shopownerlogin',
    loadChildren: () => import('./guest/shopownerlogin/shopownerlogin.module').then( m => m.ShopownerloginPageModule)
  },
  {
    path: 'guest/customerlogin',
    loadChildren: () => import('./guest/customerlogin/customerlogin.module').then( m => m.CustomerloginPageModule)
  },
  {
    path: 'admin/index',
    loadChildren: () => import('./admin/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'guest/adminlogin',
    loadChildren: () => import('./guest/adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'shopowner/index',
    loadChildren: () => import('./shopowner/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'admin/workshopview',
    loadChildren: () => import('./admin/workshopview/workshopview.module').then( m => m.WorkshopviewPageModule)
  },
  {
    path: 'admin/workshopviewmore/:id',
    loadChildren: () => import('./admin/workshopviewmore/workshopviewmore.module').then( m => m.WorkshopviewmorePageModule)
  },
  {
    path: 'shopowner/mechreg',
    loadChildren: () => import('./shopowner/mechreg/mechreg.module').then( m => m.MechregPageModule)
  },
  {
    path: 'shopowner/mechview',
    loadChildren: () => import('./shopowner/mechview/mechview.module').then( m => m.MechviewPageModule)
  },
  {
    path: 'shopowner/mechviewmore/:mid',
    loadChildren: () => import('./shopowner/mechviewmore/mechviewmore.module').then( m => m.MechviewmorePageModule)
  },
  {
    path: 'shopowner/shopservice',
    loadChildren: () => import('./shopowner/shopservice/shopservice.module').then( m => m.ShopservicePageModule)
  },
  {
    path: 'shopowner/shopserviceview',
    loadChildren: () => import('./shopowner/shopserviceview/shopserviceview.module').then( m => m.ShopserviceviewPageModule)
  },
  {
    path: 'shopowner/serviceedit/:id',
    loadChildren: () => import('./shopowner/serviceedit/serviceedit.module').then( m => m.ServiceeditPageModule)
  },
  {
    path: 'shopowner/mechedit/:id',
    loadChildren: () => import('./shopowner/mechedit/mechedit.module').then( m => m.MecheditPageModule)
  },
  {
    path: 'shopowner/myprofile',
    loadChildren: () => import('./shopowner/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'shopowner/myprofileedit',
    loadChildren: () => import('./shopowner/myprofileedit/myprofileedit.module').then( m => m.MyprofileeditPageModule)
  },
  {
    path: 'admin/locreg',
    loadChildren: () => import('./admin/locreg/locreg.module').then( m => m.LocregPageModule)
  },
  {
    path: 'admin/locview',
    loadChildren: () => import('./admin/locview/locview.module').then( m => m.LocviewPageModule)
  },
  {
    path: 'guest/customersignup',
    loadChildren: () => import('./guest/customersignup/customersignup.module').then( m => m.CustomersignupPageModule)
  },
  {
    path: 'guest/customersignin',
    loadChildren: () => import('./guest/customersignin/customersignin.module').then( m => m.CustomersigninPageModule)
  },
  {
    path: 'customer/index',
    loadChildren: () => import('./customer/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'customer/customerprofile',
    loadChildren: () => import('./customer/customerprofile/customerprofile.module').then( m => m.CustomerprofilePageModule)
  },
  {
    path: 'customer/customerprofileedit',
    loadChildren: () => import('./customer/customerprofileedit/customerprofileedit.module').then( m => m.CustomerprofileeditPageModule)
  },
  {
    path: 'customer/shopwiseserviceview/:id',
    loadChildren: () => import('./customer/shopwiseserviceview/shopwiseserviceview.module').then( m => m.ShopwiseserviceviewPageModule)
  },
  {
    path: 'customer/serviceviewmore/:id',
    loadChildren: () => import('./customer/serviceviewmore/serviceviewmore.module').then( m => m.ServiceviewmorePageModule)
  },
  {
    path: 'shopowner/customerreqview',
    loadChildren: () => import('./shopowner/customerreqview/customerreqview.module').then( m => m.CustomerreqviewPageModule)
  },
  {
    path: 'shopowner/cusrequestviewmore/:id',
    loadChildren: () => import('./shopowner/cusrequestviewmore/cusrequestviewmore.module').then( m => m.CusrequestviewmorePageModule)
  },
  {
    path: 'customer/myrequest',
    loadChildren: () => import('./customer/myrequest/myrequest.module').then( m => m.MyrequestPageModule)
  },
  {
    path: 'customer/acceptedrequests',
    loadChildren: () => import('./customer/acceptedrequests/acceptedrequests.module').then( m => m.AcceptedrequestsPageModule)
  },
  {
    path: 'customer/rejectedrequests',
    loadChildren: () => import('./customer/rejectedrequests/rejectedrequests.module').then( m => m.RejectedrequestsPageModule)
  },
  {
    path: 'customer/viewmechanicdetails/:id',
    loadChildren: () => import('./customer/viewmechanicdetails/viewmechanicdetails.module').then( m => m.ViewmechanicdetailsPageModule)
  },
  {
    path: 'admin/reports',
    loadChildren: () => import('./admin/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'admin/shopdetailsreport',
    loadChildren: () => import('./admin/shopdetailsreport/shopdetailsreport.module').then( m => m.ShopdetailsreportPageModule)
  },
  {
    path: 'admin/shopcountreport',
    loadChildren: () => import('./admin/shopcountreport/shopcountreport.module').then( m => m.ShopcountreportPageModule)
  },
  {
    path: 'admin/servicecountreport',
    loadChildren: () => import('./admin/servicecountreport/servicecountreport.module').then( m => m.ServicecountreportPageModule)
  },
  {
    path: 'admin/customerdetailsreport',
    loadChildren: () => import('./admin/customerdetailsreport/customerdetailsreport.module').then( m => m.CustomerdetailsreportPageModule)
  },
  {
    path: 'admin/mechanicreport',
    loadChildren: () => import('./admin/mechanicreport/mechanicreport.module').then( m => m.MechanicreportPageModule)
  },
  {
    path: 'admin/requestreport',
    loadChildren: () => import('./admin/requestreport/requestreport.module').then( m => m.RequestreportPageModule)
  },
  {
    path: 'customer/feedbackview',
    loadChildren: () => import('./customer/feedbackview/feedbackview.module').then( m => m.FeedbackviewPageModule)
  },
  {
    path: 'customer/feedback',
    loadChildren: () => import('./customer/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'guest/cusforgot',
    loadChildren: () => import('./guest/cusforgot/cusforgot.module').then( m => m.CusforgotPageModule)
  },
  {
    path: 'guest/otp',
    loadChildren: () => import('./guest/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'guest/cusprofileedit',
    loadChildren: () => import('./guest/cusprofileedit/cusprofileedit.module').then( m => m.CusprofileeditPageModule)
  },
  {
    path: 'guest/shopforgot',
    loadChildren: () => import('./guest/shopforgot/shopforgot.module').then( m => m.ShopforgotPageModule)
  },
  {
    path: 'guest/shopotp',
    loadChildren: () => import('./guest/shopotp/shopotp.module').then( m => m.ShopotpPageModule)
  },
  {
    path: 'guest/shopproedit',
    loadChildren: () => import('./guest/shopproedit/shopproedit.module').then( m => m.ShopproeditPageModule)
  },













  // {
  //   path: 'guest/customerreg',
  //   loadChildren: () => import('./customer/customerreg/customerreg.module').then( m => m.CustomerregPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
