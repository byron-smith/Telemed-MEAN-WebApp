import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {
  viewModel = "Home";
  public appointmentlist;
  
  //initialize the call using inquiryService 
  constructor(
    private appointmentService: AppointmentService, 
    private router: Router) { }
  
  ngOnInit() {
  this.getAppointments();
    }
  
    //method called OnInit
    getAppointments() {
     this.appointmentService.getAppointments().subscribe(
        //read data and assign to public variable appointmentlist
        data => { this.appointmentlist = data; 
        console.log(JSON.stringify(this.appointmentlist));
        },
        err => console.error(err),
        () => console.log('finished loading')       
      );
     
    }
  
    onDelete(id: string){
      console.log("onDelete item triggered. id: " + id);
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        console.log("Deleted msg from profile.ts file : " + id);
        setTimeout(function() {
          location.reload();
        }, 2000);
      });
    }
    
    onUpdate(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        reason: string,
        doctor: string,
        date: string

        ) 
        {
        this.router.navigate([
          "/editAppointment",
          id,
          firstName,
          lastName,
          email,
          reason,
          doctor,
          date
        ]);
        console.log("Go for update appointment information. id: " + id);
  
    }
  
  }