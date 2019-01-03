import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { registrationService } from '../../../services/registrationService';
import { services } from '../../../model/services.model';
import { registrationModel } from '../../../model/registrationModel';
import { CustomerRegistrationComponent } from '../../../customer-registration/customer-registration.component';
import { BookingData } from '../../../model/bookingModel';

@Component({
  selector: 'app-men-services',
  templateUrl: './men-services.component.html',
  styleUrls: ['./men-services.component.css']
})
export class MenServicesComponent implements OnInit {

  menServices: services = {} as any;
  contact;
  showDetails = false;
  customerData: registrationModel = {} as any;
  serviceData = [];
  showSelectItems = true;
  searchCustomerDiv = false;
  showReg = false;

  bookingData: BookingData = {} as any;

  constructor(public dialogRef: MatDialogRef<MenServicesComponent>,
    public dialog: MatDialog, private registrationService: registrationService) { }

  ngOnInit() {
    this.registrationService.getMenServices().subscribe(data => {
      this.menServices = <services>data;
    });
  }

  checkBox(input) {
    this.serviceData.push(input);
    console.log("input is " + JSON.stringify(this.serviceData));
  }

  Next() {
    this.showSelectItems = false;
    this.searchCustomerDiv = true;
    this.showReg = true;
  }

  back() {
    this.showSelectItems = true;
    this.searchCustomerDiv = false;
    this.showReg = false;
    this.showDetails = false;
  }
  customerDetails(input) {
    console.log("customer details are ", JSON.stringify(input));
    this.customerData = input;
  }

  searchCustomer() {
    this.registrationService.getCustomer(this.contact).subscribe(data => {
      this.customerData = <registrationModel>data;
      if (this.customerData && this.customerData[0].name) {
        this.showDetails = true;
        this.showReg = false;
      }
    });
  }


  bookApointment() {
    this.serviceData.forEach(element => {
      this.bookingData.charges = element.charges;
      this.bookingData.service_id = element.service_id;
      this.bookingData.service_name = element.service_name;
    });
    this.bookingData.booking_id = parseInt(this.customerData.phone);
    this.bookingData.customer_id = this.customerData.customer_id;
    this.bookingData.customer_name = this.customerData.name;
    this.bookingData.customer_mobile = this.customerData.phone;

    console.log("Booking data is ", JSON.stringify(this.bookingData));

    this.registrationService.addBookingService(this.bookingData)
      .subscribe(data => {
        console.log("booking done");

      });
    this.dialogRef.close();
  }

  registerCustomer() {
    let dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      height: '600px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
