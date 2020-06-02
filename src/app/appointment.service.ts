import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
// we know that http response will be in JSON format.

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class AppointmentService {
  private geturl = "http://localhost:8000/appointmentlist";
  constructor(private http: HttpClient) {}

// Uses http.get() to load data.

getAppointments(){
  return this.http.get(this.geturl);
}

addAppointment( firstName: string, lastName: string, email: string, reason: string,doctor: string, date: string) {
 return this.http.post(this.geturl, { firstName, lastName, email,reason, doctor, date})
}
//location.reload();

 updateAppointment(id: string, firstName: string, lastName: string, email:string, reason: string, doctor: string, date: string) {
  return this.http.put(this.geturl + "/" + id, { firstName, lastName, email,reason, doctor, date })
}
//location.reload();
  
deleteAppointment(appointmentId: string) {
   return this.http.delete(this.geturl + "/" + appointmentId)
   
//location.reload();
}

}
