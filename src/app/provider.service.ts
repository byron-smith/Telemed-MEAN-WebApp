import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
// we know that http response will be in JSON format.

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ProviderService {
  private geturl = "http://localhost:8000/providerlist";
  constructor(private http: HttpClient) {}

// Uses http.get() to load data.

getProviders(){
  return this.http.get(this.geturl);
}

addProvider( firstName: string, lastName: string, phone: string, email: string) {
 return this.http.post(this.geturl, { firstName, lastName, phone, email})
}
//location.reload();

 updateProvider(id: string, firstName: string, lastName: string, phone:string, email: string) {
  return this.http.put(this.geturl + "/" + id, { firstName, lastName, phone, email })
}
  
deleteProvider(providerId: string) {
   return this.http.delete(this.geturl + "/" + providerId)
//location.reload();
}

}
