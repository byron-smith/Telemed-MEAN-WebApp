  import { Component, OnInit,Input } from '@angular/core';
  import { InquiryService } from '../inquiry.service';
  import { Router } from '@angular/router';
  import { ActivatedRoute, ParamMap } from '@angular/router';
  import { SnackBarMessageComponent } from '../snack-bar-message/snack-bar-message.component';
  import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})

export class InquiryComponent implements OnInit {
    private mode = "update";
    private response = "";
    private title = "New Inquiry Form:";
    private id: string;
    durationInSeconds = 3;

  @Input() firstName: string='';
  @Input() lastName: string='';
  @Input() inquiry: string='';
  @Input() rx: string='';

 // public mode = 'Add'; //default mode
 // private id: string; //inquiry ID

  constructor(
    private inquiryService: InquiryService, 
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
        this.title = "Update Inquiry Form";
        this.mode = "Update";
        this.id = paramMap.get("_id");
        this.firstName = paramMap.get("_firstName");
        this.lastName = paramMap.get("_lastName");
        this.inquiry = paramMap.get("_inquiry");
        this.rx = paramMap.get("_rx");
        } 
        else {
        this.title = "New Inquiry Form:";
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
      this.isEmpty(this.inquiry) ||
      this.isEmpty(this.rx)
    ) {
      //alert("Error: Please check your inputs! Thanks.");
      this.openSnackBar();
    }  
    else {
    if (this.mode == "Submit") {
        this.inquiryService
          .addInquiry(
            this.firstName,
            this.lastName,
            this.inquiry,
            this.rx
          )
          .subscribe(responseData => {
            this.response = responseData.toString();
            console.log(responseData);
            if (this.response.search("ValidationError") == -1) {
              console.log("String did not match.");
              this.router.navigate(["/inquirylist"]);
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
              "\nInquiry: " +
              this.inquiry +
              "\nRx: " +
              this.rx
          );
    }
else {
this.inquiryService
  .updateInquiry(
    this.id,
    this.firstName,
    this.lastName,
    this.inquiry,
    this.rx
  )
.subscribe(responseData => {
            this.response = responseData.toString();
            if (this.response.search("ValidationError") == -1) {
              console.log("String did not match.");
              this.router.navigate(["/inquirylist"]);
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
