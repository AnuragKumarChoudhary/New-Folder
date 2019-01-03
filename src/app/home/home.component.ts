import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenServicesComponent } from '../common/services/men-services/men-services.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { WomenServicesComponent } from '../common/services/women-services/women-services.component';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  registration() {
    //this.router.navigate(['/customer-registration']);
    let dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      height: '600px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

  services() {
    this.router.navigate(['/services']);
  }

  menServices() {
    console.log("men services");
    let dialogRef = this.dialog.open(MenServicesComponent, {
      height: '600px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });

  }

  womenServices() {
    console.log("women services");
    let dialogRef = this.dialog.open(WomenServicesComponent, {
      height: '600px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
