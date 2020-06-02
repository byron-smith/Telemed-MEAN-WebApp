import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { NgbModule, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { NgbdModalComponent, NgbdModalContent} from "./registration/modal-component";
import { LoginComponent } from "./login/login.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { SearchjobsComponent } from "./searchjobs/searchjobs.component";
import { StudentprofilesComponent } from "./studentprofiles/studentprofiles.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandomgenComponent } from './randomgen/randomgen.component';
import { CardtypedetectorComponent } from './cardtypedetector/cardtypedetector.component';
import { DetectcardtypeDirective } from './detectcardtype.directive';
import { StudentService } from './student.service';
import { InquiryService } from './inquiry.service';
import { ProviderService } from './provider.service';
import { AppointmentService } from './appointment.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SnackBarMessageComponent } from './snack-bar-message/snack-bar-message.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquirylistComponent } from './inquirylist/inquirylist.component';
import { UpdateinquiryComponent } from './updateinquiry/updateinquiry.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderlistComponent } from './providerlist/providerlist.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateproviderComponent } from './updateprovider/updateprovider.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    LoginComponent,
    AboutusComponent,
    SearchjobsComponent,
    StudentprofilesComponent,
    DashboardComponent,
    RandomgenComponent,
    CardtypedetectorComponent,
    DetectcardtypeDirective,
    UpdatestudentComponent,
    NotFoundComponent,
    SnackBarMessageComponent,
    MessageComponent,
    InquiryComponent,
    InquirylistComponent,
    UpdateinquiryComponent,
    ProviderComponent,
    ProviderlistComponent,
    FooterComponent,
    UpdateproviderComponent,
    AppointmentComponent,
    AppointmentlistComponent,
    UpdateappointmentComponent
  ],
  entryComponents: [SnackBarMessageComponent],

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [StudentService, InquiryService, ProviderService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
