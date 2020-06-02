import { Component, OnInit,Input } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SnackBarMessageComponent } from '../snack-bar-message/snack-bar-message.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
 
  private mode = "update";
  private response = "";
  private title = "New Appointment Form:";
  private id: string;
  durationInSeconds = 3;

  @Input() firstName: string='';
  @Input() lastName: string='';
  @Input() email: string='';
  @Input() reason: string='';
  @Input() doctor: string='';
  @Input() date: string='';

  constructor(
    private appointmentService: AppointmentService, 
    private router: Router, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        console.log(
          "onngOnInit: " +
            paramMap.get("_id") +
            " firstName: " +
            paramMap.get("_firstName") 
        );
  
        if (paramMap.has("_id")) {
          this.title = "Update Appointment Form";
          this.mode = "Update";
          this.id = paramMap.get("_id");
          this.firstName = paramMap.get("_firstName");
          this.lastName = paramMap.get("_lastName");
          this.email = paramMap.get("_email");
          this.reason = paramMap.get("_reason");
          this.doctor = paramMap.get("_doctor");
          this.date = paramMap.get("_date");
          } 
          else {
          this.title = "New Appointment Form:";
          this.mode = "Submit";
          this.id = null;
        }
      });
    }
    
    logName(x) {
      console.log("Value you entered: " + x);
    }
  
    logComment(x) {
      this.logName(x);
    }
  
    isEmpty(str) {
      return !str || 0 === str.length;
    }
    openSnackBar() {
      this._snackBar.openFromComponent(SnackBarMessageComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  
    onClick() {
      if (
        this.isEmpty(this.firstName) ||
        this.isEmpty(this.lastName) ||
        this.isEmpty(this.email) ||
        this.isEmpty(this.reason) ||
        this.isEmpty(this.doctor) ||
        this.isEmpty(this.date)
      ) {
        //alert("Error: Please check your inputs! Thanks.");
        this.openSnackBar();
      }  
      else {
      if (this.mode == "Submit") {
          this.appointmentService
            .addAppointment(
              this.firstName,
              this.lastName,
              this.email,
              this.reason,
              this.doctor,
              this.date
            )
            .subscribe(responseData => {
              this.response = responseData.toString();
              console.log(responseData);
              if (this.response.search("ValidationError") == -1) {
                console.log("String did not match.");
                this.router.navigate(["/appointmentlist"]);
              } 
              else {
                alert("Error: Please check your inputs! Thanks.");
                console.log("String matched.");
              }
            });
            console.log(
              "You entered below info > " +
                "\nFirst Name: " +
                this.firstName +
                "\nLast Name: " +
                this.lastName +
                "\nEmail: " +
                this.email +
                "\nReason: " +
                this.reason+
                "\nDoctor: " +
                this.doctor +
                "\nDate: " +
                this.date
            );
      }
  else {
  this.appointmentService
    .updateAppointment(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.reason,
      this.doctor,
      this.date,
      )
  .subscribe(responseData => {
              this.response = responseData.toString();
              if (this.response.search("ValidationError") == -1) {
                console.log("String did not match.");
                this.router.navigate(["/appointmentlist"]);
              } 
              else {
                alert("Error: Please check your inputs! Thanks.");
                console.log("String matched.");
              }
              console.log(responseData);
            });
        }
      }
    }
  }
  