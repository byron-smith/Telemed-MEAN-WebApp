import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
// we know that http response will be in JSON format.

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class InquiryService {
  private geturl = "http://localhost:8000/inquirylist";
  constructor(private http: HttpClient) {}

// Uses http.get() to load data.

getInquiries(){
  return this.http.get(this.geturl);
}

addInquiry( firstName: string, lastName: string, inquiry: string, rx: string) {
 return this.http.post(this.geturl, { firstName, lastName, inquiry,rx})
}
//location.reload();

 updateInquiry(id: string, firstName: string, lastName: string, inquiry:string, rx: string) {
  return this.http.put(this.geturl + "/" + id, { firstName, lastName, inquiry,rx })
}
//location.reload();
  
deleteInquiry(inquiryId: string) {
   return this.http.delete(this.geturl + "/" + inquiryId)
   
//location.reload();
}

}
