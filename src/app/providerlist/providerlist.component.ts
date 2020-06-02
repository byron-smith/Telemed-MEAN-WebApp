import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-providerlist',
  templateUrl: './providerlist.component.html',
  styleUrls: ['./providerlist.component.css']
})
export class ProviderlistComponent implements OnInit {

viewModel = "Home";
public providerlist;

//initialize the call using ProviderService 
constructor(
  private providerService: ProviderService, 
  private router: Router) { }

ngOnInit() {
this.getProviders();
  }

  //method called OnInit
  getProviders() {
   this.providerService.getProviders().subscribe(
      //read data and assign to public variable providers
      data => { this.providerlist = data; 
      console.log(JSON.stringify(this.providerlist));
      },
      err => console.error(err),
      () => console.log('finished loading')       
    );
   
  }

  onDelete(id: string){
    console.log("onDelete item triggered. id: " + id);
    this.providerService.deleteProvider(id).subscribe(() => {
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
      phone: string,
      email: string
      ) 
      {
      this.router.navigate([
        "/editProvider",
        id,
        firstName,
        lastName,
        phone,
        email
      ]);
      console.log("Go for update provider information. id: " + id);

  }

}