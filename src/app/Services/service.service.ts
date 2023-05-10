import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public afs: AngularFirestore ) { }

  // adminlogin service
  adminlogin(username: any, password: any) {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_adminlogin', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_adminloginId" });
  }

  //workshop registration
  signup(signupdata:any,formatteddate:any){

    
    const signupdata1 ={
      formatteddate:formatteddate,
      workshopname:signupdata.workshopname,
      locationname:signupdata.locationname,
      ownername:signupdata.ownername,
      districtname:signupdata.districtname,
      username:signupdata.username,
      email:signupdata.email,
      type:signupdata.type,
      password:signupdata.password,
      number:signupdata.contactnumber,
      status:signupdata.status,
      image:signupdata.image, 
    }
    
    
   const signupdata2 =JSON.parse(JSON.stringify(signupdata1));
    return this.afs.collection("collection_shop").add(signupdata2);

  }
  getdistrict(){
    const districtdata = this.afs.collection("collection_district").valueChanges({ idField: "collection_districtId" });
    // console.log(categorydata);
    return districtdata;
  }

  //workshop login
  workshoplogin(username: any, password: any) {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_shop', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_shopId" });
  }

//workshop view admin

getworkshop() {
  const shopdata = this.afs.collection('collection_shop',(ref) => ref.where("status", "==", "pending")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}

getworkshopbyid(requestid: any){
  const requestData = this.afs.doc<any>("collection_shop/" + requestid).valueChanges();

  return requestData;
}

acceptrequest(requestId: any) {
  // console.log(requestId);
  // console.log(requestdata);

  // const requestdataform={
  //   workshopname:requestdata.workshopname,
  //   ownername:requestdata.ownername,
  //   locationname:requestdata.locationname,
  //   email:requestdata.email,
  //   number:requestdata.contactnumber,
  //   status:"Request Accepted"
  // };
// return this.afs.doc("collection_shop/"+requestId).update(requestdataform);
//const cartData = JSON.parse(JSON.stringify(location));
return this.afs.doc("collection_shop/" + requestId).update({status:"Request Accepted"});
}
rejectrequest(requestId: any) {
  // const requestdataform={
  //   workshopname:requestdata.workshopname,
  //   ownername:requestdata.ownername,
  //   locationname:requestdata.locationname,
  //   email:requestdata.email,
  //   number:requestdata.contactnumber,
  //   status:"Request Rejected"
  // };
// return this.afs.doc("collection_shop/"+requestId).update(requestdataform);
return this.afs.doc("collection_shop/" + requestId).update({status:"Request Rejected"});
}

mechsignup(signupdata:any){
  const signupdata1=JSON.parse(JSON.stringify(signupdata));
  return this.afs.collection("collection_mechanic").add(signupdata);

}

mechview(workshopid:any) {
  const shopname = this.afs.collection('collection_mechanic',(ref) => ref.where("workshopid", "==", workshopid)).valueChanges({ idField: "collection_mechanicId" });
  // console.log(categorydata);
  return shopname;
}

deletemech(mechanicId: string)
{
  console.log(mechanicId);
  return this.afs.doc("collection_mechanic/" +mechanicId).delete();
}
//mechanic view more

getmechbyid(requestid:any){
  const requestData = this.afs.doc<any>("collection_mechanic/" + requestid).valueChanges();

  return requestData;
}

//service registartion and view

servicereg(servicedata:any){
  const servicedata1=JSON.parse(JSON.stringify(servicedata));
  return this.afs.collection("collection_service").add(servicedata1);
}

serviceview(id:any){
  const servicedata = this.afs.collection("collection_service",(ref) => ref.where("workshopid", "==", id)).valueChanges({ idField: "collection_serviceId" });
    // console.log(categorydata);
    return servicedata;
}

//delete service

deleteservice(sid:any){
  console.log(sid);
  return this.afs.doc("collection_service/" +sid).delete();

}

getservicebyid(sid:any){
  const requestData = this.afs.doc<any>("collection_service/" + sid).valueChanges();
  
  return requestData;
}

editservice(sid:any, servicedata:any){
    return this.afs.doc("collection_service/" +sid).update(servicedata);
}

//delete mechanic
// deletemechanic(mid:any){
//   console.log(mid);
//   return this.afs.doc("collection_mechanic/" +mid).delete();


// }

getmecheditbyid(mechid:any){
  const requestData = this.afs.doc<any>("collection_mechanic/" + mechid).valueChanges({ idField: "collection_mechanicId" });
  
  return requestData;
}

editmechanic(mechid:any,mechanicedit:any){
  return this.afs.doc("collection_mechanic/" +mechid).update(mechanicedit);
}

//shop owner myprofile

getprofilebyid(id:any)
{
const requestData = this.afs.doc<any>("collection_shop/" + id).valueChanges();
  
return requestData;

}

getprofilebyId(requestid: any) 
{
  const requestData = this.afs.doc<any>("collection_shop/" + requestid).valueChanges();

  return requestData;
}

editprofile(shopid:any,shopedit:any){
  return this.afs.doc("collection_shop/" +shopid).update(shopedit);
}


locreg(locdata:any){
 
  
  
 const locdata2 =JSON.parse(JSON.stringify(locdata));
  return this.afs.collection("collection_location").add(locdata2);

}

locviewbydistrict(locdata:any) {
  const locname = this.afs.collection('collection_location',(ref) => ref.where("districtname", "==", locdata)).valueChanges({ idField: "collection_locationId" });
  // console.log(categorydata);
  return locname;
}



getlocation(){
  const locdata = this.afs.collection("collection_location").valueChanges({ idField: "collection_locationId" });
  // console.log(categorydata);
  return locdata;
}

customerreg(data:any){
  const signupdata1=JSON.parse(JSON.stringify(data));
  return this.afs.collection("collection_customer").add(signupdata1);
}




customerlogin(username: any, password: any) {
  console.log(username);
  console.log(password);
  return this.afs.collection('collection_customer', (ref) => ref.where("username", "==", username).where("password", "==", password))
    .valueChanges({ idField: "collection_customerId" });
}


getcusprofilebyid(id:any)
{
const requestData = this.afs.doc<any>("collection_customer/" + id).valueChanges();
  
return requestData;

}


editcusprofile(cusid:any,cusedit:any){
  return this.afs.doc("collection_customer/" +cusid).update(cusedit);
}

//customer side workshop view

getworkshops() {
  const shopdata = this.afs.collection('collection_shop',(ref) => ref.where("status", "==", "Request Accepted").where("shopstatus", "==", "Active")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}

shopviewbydistrict(locdata:any) {
  const locname = this.afs.collection('collection_shop',(ref) => ref.where("districtname", "==", locdata).where("shopstatus", "==", "Active")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return locname;
}

shopviewbylocation(locdata:any){
  const locname = this.afs.collection('collection_shop',(ref) => ref.where("locationname", "==", locdata).where("shopstatus", "==", "Active")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  // .where("districtname", "==", "disdata")
  return locname;
}

//customer side service view
shopwiseserviceview(id:any){
  const servicedata = this.afs.collection("collection_service",(ref) => ref.where("workshopid", "==", id)).valueChanges({ idField: "collection_serviceId" });
     console.log(servicedata);
     console.log(id);

    return servicedata;
}

shopwiseserviceviewmore(id:any){

  const requestData = this.afs.doc<any>("collection_service/" + id).valueChanges({ idField: "collection_serviceId" });
  
  return requestData



  // const servicedata = this.afs.collection("collection_service",(ref) => ref.where("workshopid", "==", id)).valueChanges({ idField: "collection_serviceId" });
  //    console.log(servicedata);
  //    console.log(id);

  //   return servicedata;
}




servicereq(reqdata:any,datedata:any,viewdata:any){

  const signupdata1 ={
    requesteddate:datedata,
    servicename:viewdata.servicename,
    servicecost:viewdata.servicecost,

    landmark:reqdata.landmark,
    // servicecost:reqdata.servicecost,
    description:reqdata.description,
    customername:reqdata.customername,
    customerid:reqdata.customerid,
    status:'Pending',
    workshopid:viewdata.workshopid,
    pickup:reqdata.pickup,

  }
  
  
 const signupdata2 =JSON.parse(JSON.stringify(signupdata1));
  return this.afs.collection("collection_servicerequest").add(signupdata2);
}

//shop owner side customer request view

getcusreq(id:any){
  const shopdata = this.afs.collection('collection_servicerequest',(ref) => ref.where("status", "==", "Pending").where("workshopid", "==", id)).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return shopdata;
}




getservicereqbyid(requestid: any){
  const requestData = this.afs.doc<any>("collection_servicerequest/" + requestid).valueChanges();

  return requestData;
}


acceptcusreq(requestId:any,mechanicname:any,requestdata:any){

  const requestdatas={

    mechanicname:mechanicname,
    description:requestdata.description,
    landmark:requestdata.landmark,
    accepteddate:requestdata.requesteddate,
    customername:requestdata.customername,
    customerid:requestdata.customerid,
    pickup:requestdata.pickup,
    status:"Request Accepted"
  }
  console.log(mechanicname);





  return this.afs.doc("collection_servicerequest/" +requestId).update(requestdatas);
}



rejectcusreq(requestId:any){
  return this.afs.doc("collection_servicerequest/" + requestId).update({status:"Request Rejected"});
}



getmechanic(){
  return this.afs.collection('collection_mechanic', (ref) => ref.where("status", "==", "Active").where("workshopid", "==", localStorage.getItem("workshopid")))
  .valueChanges({ idField: "collection_mechanicId" });
}


updatemechstatus(mechanicid:any){
  console.log(mechanicid);
  return this.afs.doc("collection_mechanic/" + mechanicid).update({status:"Inactive"});
}



getmyreq(){
  const shopdata = this.afs.collection('collection_servicerequest',(ref) => ref.where("status", "==", "Pending").where("customerid", "==", localStorage.getItem("customerid"))).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return shopdata;
}


getmyacceptedrequest(){
  const shopdata = this.afs.collection('collection_servicerequest',(ref) => ref.where("status", "==", "Request Accepted").where("customerid", "==", localStorage.getItem("customerid"))).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return shopdata;
}


getmyrejectedreq(){
  const shopdata = this.afs.collection('collection_servicerequest',(ref) => ref.where("status", "==", "Request Rejected").where("customerid", "==", localStorage.getItem("customerid"))).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return shopdata;
}




//VALIDATIONSSSS

customervalidation( email: any, contact:any) {
  // console.log(username);
  // console.log(password);
  return this.afs.collection('collection_customer', (ref) => ref.where("customeremail", "==", email).where("customernumber", "==", contact))
    .valueChanges({ idField: "collection_customerId" });
}

shopvalidation(shopname: any, email: any, contact:any, owner:any) {
  // console.log(username);
  // console.log(password);
  return this.afs.collection('collection_shop', (ref) => ref.where("workshopname", "==", shopname).where("email", "==", email).where("number", "==", contact).where("ownername", "==", owner))
    .valueChanges({ idField: "collection_shopId" });
}

mechanicvalidation( email: any, contact:any) {
  // console.log(username);
  // console.log(password);
  return this.afs.collection('collection_mechanic', (ref) => ref.where("mechanicemail", "==", email).where("mechanicnumber", "==", contact))
    .valueChanges({ idField: "collection_mechanicId" });
}

servicevalidation(name:any){
  return this.afs.collection('collection_service', (ref) => ref.where("servicename", "==", name))
  .valueChanges({ idField: "collection_seviceId" });
}

mechaniceditvalidation( email: any, contact:any) {
  // console.log(username);
  // console.log(password);
  return this.afs.collection('collection_mechanic', (ref) => ref.where("mechanicemail", "==", email).where("mechanicnumber", "==", contact))
    .valueChanges({ idField: "collection_mechanicId" });
}


customereditvalidation( email: any, contact:any) {
  // console.log(username);
  // console.log(password);
  return this.afs.collection('collection_customer', (ref) => ref.where("customeremail", "==", email).where("customernumber", "==", contact))
    .valueChanges({ idField: "collection_customerId" });
}





//customer index location view

getlocationbydistrict(data:any){
  const locdata = this.afs.collection("collection_location", (ref) => ref.where("districtname", "==", data)).valueChanges({ idField: "collection_locationId" });
  // console.log(categorydata);
  return locdata;
}


//REPORTS...

getworkshopreport() {
  const shopdata = this.afs.collection('collection_shop').valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}

shopacceptedcount(){
  const shopdata = this.afs.collection('collection_shop',(ref) => ref.where("shopstatus", "==", "Active")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}



customerdetailsreport(){
  const data = this.afs.collection("collection_customer").valueChanges({ idField: "collection_customerId" });
    // console.log(categorydata);
    return data;
}






//admin dashboard

admingetworkshop() {
  const shopdata = this.afs.collection('collection_shop',(ref) => ref.where("status", "==", "Request Accepted")).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}

//shop dashboard
shopmechview(workshopid:any) {
  const shopname = this.afs.collection('collection_mechanic',(ref) => ref.where("workshopid", "==", workshopid).where("status", "==", "Active")).valueChanges({ idField: "collection_mechanicId" });
  // console.log(categorydata);
  return shopname;
}



// admin report

mechviewbyshop(data:any) {
  const mname = this.afs.collection('collection_mechanic',(ref) => ref.where("workshopname", "==", data)).valueChanges({ idField: "collection_mechanicId" });
  // console.log(categorydata);
  return mname;
}

requestfor(data:any,id:any) {
  const mname = this.afs.collection('collection_servicerequest',(ref) => ref.where("requesteddate", "==", data).where("workshopid", "==", id )).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return mname;
}

requestforsts(data:any,id:any,sts:any) {
  const mname = this.afs.collection('collection_servicerequest',(ref) => ref.where("requesteddate", "==", data).where("workshopid", "==", id ).where("status", "==", sts )).valueChanges({ idField: "collection_servicerequestId" });
  // console.log(categorydata);
  return mname;
}


getworkshopbyname(data:any) {
  const shopdata = this.afs.collection('collection_shop',(ref) => ref.where("workshopname", "==", data)).valueChanges({ idField: "collection_shopId" });
  // console.log(categorydata);
  return shopdata;
}




feedbackadd(data:any,data2:any){
  const signupdata1 ={
    feedback:data.feedback,
    customername:data.customername,
    customerid:data.customerid,
    workshopid:data2
  }
  
  
 const signupdata2 =JSON.parse(JSON.stringify(signupdata1));
  return this.afs.collection("collection_feedback").add(signupdata2);
}

feedbackview(id:any){
  const servicedata = this.afs.collection("collection_feedback",(ref) => ref.where("workshopid", "==", id)).valueChanges({ idField: "collection_feedbackId" });
     console.log(servicedata);
     console.log(id);

    return servicedata;
}


//customer forgot......

forgotcustomer(email:any,phonenumber:any)
{
    
    return this.afs.collection('collection_customer', (ref) => ref.where("customeremail", "==", email).where("customernumber", "==", phonenumber))
      .valueChanges({ idField: "collection_customerId"});
  
    }

  getprofilebyemail(email:any)

  {
    return this.afs.collection('collection_customer', (ref) => ref.where("customeremail", "==", email)).valueChanges({ idField: "collection_customerId"});


}


editcuslogin(id:any,cusvalue:any){
  return this.afs.doc("collection_customer/" +id).update(cusvalue);
}



//shopowner forgot.....

forgotshop(email:any,phonenumber:any)
{
    
    return this.afs.collection('collection_shop', (ref) => ref.where("email", "==", email).where("number", "==", phonenumber))
      .valueChanges({ idField: "collection_shopId"});
  
    }


  getshopprofilebyemail(email:any)

  {
    return this.afs.collection('collection_shop', (ref) => ref.where("email", "==", email)).valueChanges({ idField: "collection_shopId"});


}


editshoplogin(id:any,cusvalue:any){
  return this.afs.doc("collection_shop/" +id).update(cusvalue);
}




}
