import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ RouterModule }from '@angular/router';
import{HttpClientModule}from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddinfodoctorComponent } from './addinfodoctor/addinfodoctor.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UpdateComponent } from './update/update.component';
import { MedicalShopComponent } from './medical-shop/medical-shop.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { AdminComponent } from './admin/admin.component';
import { MedicalshoppeopleComponent } from './medicalshoppeople/medicalshoppeople.component';
import { UpdatemedicalComponent } from './updatemedical/updatemedical.component';
import { AddmedicalComponent } from './addmedical/addmedical.component';
import { UpdatelabComponent } from './updatelab/updatelab.component';
import { AddlabComponent } from './addlab/addlab.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListalldoctorsComponent } from './listalldoctors/listalldoctors.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PatientComponent } from './patient/patient.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { AddpatientinfoComponent } from './addpatientinfo/addpatientinfo.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorapplistComponent } from './doctorapplist/doctorapplist.component';
import { DrdetailsComponent } from './drdetails/drdetails.component';
import { UpdateptinfoComponent } from './updateptinfo/updateptinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    HomeComponent,
    DoctorComponent,
    AddinfodoctorComponent,
    ChangepasswordComponent,
    UpdateComponent,
    MedicalShopComponent,
    LaboratoryComponent,
    AdminComponent,
    MedicalshoppeopleComponent,
    UpdatemedicalComponent,
    AddmedicalComponent,
    UpdatelabComponent,
    AddlabComponent,
    UserslistComponent,
    ArticlesComponent,
    ListalldoctorsComponent,
    FeedbackComponent,
    PatientComponent,
    FeedbacklistComponent,
    AboutusComponent,
    AddarticleComponent,
    AddpatientinfoComponent,
    AppointmentComponent,
    DoctorapplistComponent,
    DrdetailsComponent,
    UpdateptinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"home",component:HomeComponent},
      {path:"register",component:RegisterComponent},
      {path:"forgotpassword",component:ForgotpasswordComponent},
      {path:"doctor",component:DoctorComponent},
      {path:"addinfodoctor",component:AddinfodoctorComponent},
      {path:"changepassword",component:ChangepasswordComponent},
      {path:"update",component:UpdateComponent},
      {path:"medicalshop",component:MedicalShopComponent},
      {path:"laboratory",component:LaboratoryComponent},
      {path:"admin",component:AdminComponent},
      {path:"medicalshoppeople",component:MedicalshoppeopleComponent},
      {path:"updatemedical",component:UpdatemedicalComponent},
      {path:"addmedical",component:AddmedicalComponent},
      {path:"updatelab",component:UpdatelabComponent},
      {path:"addlab",component:AddlabComponent},
      {path:"articles",component:ArticlesComponent},
      {path:"listalldoctors",component:ListalldoctorsComponent},
      {path:"feedback",component:FeedbackComponent},
      {path:"patient",component:PatientComponent},
      {path:"feedbacklist",component:FeedbacklistComponent},
      {path:"aboutus",component:AboutusComponent},
      {path:"addarticle",component:AddarticleComponent},
      {path:"userslist",component:UserslistComponent},
      {path:"addpatientinfo",component:AddpatientinfoComponent},
      {path:"doctorapplist",component:DoctorapplistComponent},
      {path:"drdetails",component:DrdetailsComponent},
      {path:"appointment",component:AppointmentComponent},
      {path:"updateptinfo",component:UpdateptinfoComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
