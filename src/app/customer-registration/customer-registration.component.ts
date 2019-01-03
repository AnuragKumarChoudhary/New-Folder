import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { registrationModel } from '../model/registrationModel';
import { registrationService } from '../services/registrationService';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  showAddConsumer: boolean = false;
  showImageDiv = false;
  userDetails: registrationModel = {} as any;
  phone;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: string;

  constructor(public dialogRef: MatDialogRef<CustomerRegistrationComponent>,
    private registrationService: registrationService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }

  addDetails() {
    this.showAddConsumer = true;
  }

  message = "Registration Successful";
  action = "Success";
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 150, 120);
    this.captures = this.canvas.nativeElement.toDataURL("image/png");
  }

  clickImage() {
    this.showImageDiv = true;

  }


  register() {
    this.showAddConsumer = false;
    //this.successfull = true;
    this.showImageDiv = false;
    this.dialogRef.close('closed');
    this.openSnackBar(this.message, this.action);
    var abc = this.captures.split(",");
    this.userDetails.customer_id = this.phone;
    this.userDetails.phone = this.phone;
    this.userDetails.image = abc[1]
    //console.log("user details are " + JSON.stringify(this.userDetails));
    this.registrationService.addCustomer(this.userDetails).subscribe(result => {
      console.log("registration done");
    },
      error => {
        console.log('Inside registration()' + error);
      },
      () => {
        console.log('Completed registration()');
      });

  }

}
