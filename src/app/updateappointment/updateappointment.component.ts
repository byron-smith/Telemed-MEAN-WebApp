import { Component, OnInit,Input } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit {

ngOnInit() {}

@Input() firstName: string= " ";
@Input() lastName: string=" ";
@Input() email: string=" ";
@Input() reason: string=" ";
@Input() doctor: string=" ";
@Input() date: string=" ";

logName(x) {
  console.log("Value you entered: " + x);
}

logComment(x) {
  this.logName(x);
}
constructor(private appointmentservice: AppointmentService) { }

onUpdateClick(){
  console.log(
    "You entered below info > " +
      "\nFirst Name: " +
      this.firstName +
      "\nLast Name: " +
      this.lastName +
      "\nEmail: " +
      this.email +
      "\nReason: " +
      this.reason +
      "\nDoctor: " +
      this.doctor +
      "\nDate: " +
      this.date
  );
  }
}