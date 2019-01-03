import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { services } from '../../../model/services.model';
import { registrationModel } from '../../../model/registrationModel';
import { registrationService } from '../../../services/registrationService';

@Component({
  selector: 'app-women-services',
  templateUrl: './women-services.component.html',
  styleUrls: ['./women-services.component.css']
})
export class WomenServicesComponent implements OnInit {
  womenServices: services = {} as any;
  contact;
  showDetails = false;
  customerData: registrationModel = {} as any;
  serviceData = [];
  showSelectItems = true;
  searchCustomerDiv = false;
  constructor(public dialogRef: MatDialogRef<WomenServicesComponent>, private registrationService: registrationService) { }

  ngOnInit() {
    this.registrationService.getWomenServices().subscribe(data => {
      this.womenServices = <services>data;
    });
  }

  checkBox(input) {
    this.serviceData.push(input);
    console.log("input is " + JSON.stringify(this.serviceData));
  }

  Next() {
    this.showSelectItems = false;
    this.searchCustomerDiv = true;
  }
  back() {
    this.showSelectItems = true;
    this.searchCustomerDiv = false;
  }

  searchCustomer() {
    console.log("search button click");
    this.registrationService.getCustomer(this.contact).subscribe(data => {
      this.customerData = <registrationModel>data;
      console.log(JSON.stringify(this.customerData));

      if (this.customerData[0].name != null) {
        this.showDetails = true;
      }
    });
  }

  bookAppointment() {
    this.dialogRef.close();
  }
}
