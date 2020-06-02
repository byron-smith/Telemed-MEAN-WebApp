import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../inquiry.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inquirylist',
  templateUrl: './inquirylist.component.html',
  styleUrls: ['./inquirylist.component.css']
})
export class InquirylistComponent implements OnInit {
viewModel = "Home";
public inquirylist;

//initialize the call using inquiryService 
constructor(
  private inquiryService: InquiryService, 
  private router: Router) { }

ngOnInit() {
this.getInquiries();
  }

  //method called OnInit
  getInquiries() {
   this.inquiryService.getInquiries().subscribe(
      //read data and assign to public variable inquirylist
      data => { this.inquirylist = data; 
      console.log(JSON.stringify(this.inquirylist));
      },
      err => console.error(err),
      () => console.log('finished loading')       
    );
   
  }

  onDelete(id: string){
    console.log("onDelete item triggered. id: " + id);
    this.inquiryService.deleteInquiry(id).subscribe(() => {
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
      inquiry: string,
      rx: string
      ) 
      {
      this.router.navigate([
        "/editInquiry",
        id,
        firstName,
        lastName,
        inquiry,
        rx
      ]);
      console.log("Go for update inquiry information. id: " + id);

  }

}