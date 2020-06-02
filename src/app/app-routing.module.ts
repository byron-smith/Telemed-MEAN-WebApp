import { CardtypedetectorComponent } from './cardtypedetector/cardtypedetector.component';
import { RandomgenComponent } from './randomgen/randomgen.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentprofilesComponent } from './studentprofiles/studentprofiles.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquirylistComponent } from './inquirylist/inquirylist.component';
import { UpdateinquiryComponent } from './updateinquiry/updateinquiry.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderlistComponent } from './providerlist/providerlist.component';
import { UpdateproviderComponent } from './updateprovider/updateprovider.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: 'editStudent/:_id/:_firstName/:_lastName/:_email/:_phoneNumber/:_specialization/:_education/:_interest/:_selfIntro', component: RegistrationComponent, pathMatch: 'full'},  // edit applicant information.
  { path: 'editInquiry/:_id/:_firstName/:_lastName/:_inquiry/:_rx', component: InquiryComponent, pathMatch: 'full'},  // edit inquiry information.
  { path: 'editProvider/:_id/:_firstName/:_lastName/:_phone/:_email', component: ProviderComponent, pathMatch: 'full'},  // edit provider information.
  { path: 'editAppointment/:_id/:_firstName/:_lastName/:_email/:_reason/:_doctor/:_date ', component: AppointmentComponent, pathMatch: 'full'},  // edit appointment information.
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: SearchjobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'randomgenerator', component: RandomgenComponent },
  { path: 'cardtypedetector', component: CardtypedetectorComponent },
  { path: 'students', component: StudentprofilesComponent },
  { path: 'update', component: UpdatestudentComponent },
  { path: 'inquiry', component: InquiryComponent },
  { path: 'inquirylist', component: InquirylistComponent },
  { path: 'update', component: UpdateinquiryComponent },
  { path: 'update', component: UpdateproviderComponent },
  { path: 'update', component: UpdateappointmentComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'providerlist', component: ProviderlistComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointmentlist', component: AppointmentlistComponent },
  { path: '', component: DashboardComponent },
  { path : '**', component : NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
