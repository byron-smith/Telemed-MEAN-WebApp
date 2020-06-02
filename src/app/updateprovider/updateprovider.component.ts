import { Component, OnInit,Input } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-updateprovider',
  templateUrl: './updateprovider.component.html',
  styleUrls: ['./updateprovider.component.css']
})
export class UpdateproviderComponent implements OnInit {

  ngOnInit() {}

  @Input() firstName: string= " ";
  @Input() lastName: string=" ";
  @Input() phone: string=" ";
  @Input() email: string=" ";
  
  logName(x) {
    console.log("Value you entered: " + x);
  }
  
  logComment(x) {
    this.logName(x);
  }
  
  constructor(private providerservice: ProviderService) { }
  
  onUpdateClick(){
    console.log(
      "You entered below info > " +
        "\nFirst Name: " +
        this.firstName +
        "\nLast Name: " +
        this.lastName +
        "\nPhone: " +
        this.phone +
        "\nEmail: " +
        this.email
    );
    }
  }
  
  