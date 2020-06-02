import { Component, OnInit,Input } from '@angular/core';
import { InquiryService } from '../inquiry.service';


@Component({
  selector: 'app-updateinquiry',
  templateUrl: './updateinquiry.component.html',
  styleUrls: ['./updateinquiry.component.css']
})
export class UpdateinquiryComponent implements OnInit {

ngOnInit() {}

@Input() firstName: string= "";
@Input() lastName: string="";
@Input() inquiry: string="";
@Input() rx: string="";

logName(x) {
  console.log("Value you entered: " + x);
}

logComment(x) {
  this.logName(x);
}

constructor(private inquiryservice: InquiryService) { }

onUpdateClick(){
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
}

