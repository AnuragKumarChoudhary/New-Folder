import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registrationModel } from '../model/registrationModel';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { services } from '../model/services.model';
import { BookingData } from '../model/bookingModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class registrationService {

  services: services;
  constructor(private http: HttpClient) { }

  private registrationUrl: string = 'http://localhost:3000/customer-registration';

  addCustomer(registrationInput: registrationModel): Observable<any> {
    return this.http.post<registrationModel>(this.registrationUrl, registrationInput, httpOptions).pipe(
      tap(_ => console.log(`registration done`)),
      catchError(this.handleError<registrationModel>('SoapNotes'))
    );
  }

  getCustomer(input): Observable<registrationModel> {
    const url = 'http://localhost:3000/user/' + input;
    return this.http.get<registrationModel>(url).pipe(tap(data => console.log(`user data by mobile number` + JSON.stringify(data))),
      catchError(this.handleError<any>())
    );
  }


  getMenServices(): Observable<services> {
    const url = 'http://localhost:3000/men/service';
    return this.http.get<services>(url).pipe(tap(data => console.log(`` + JSON.stringify(data))),
      catchError(this.handleError<any>())
    );
  }


  getWomenServices(): Observable<services> {
    const url = 'http://localhost:3000/women/service';
    return this.http.get<services>(url).pipe(tap(data => console.log(`` + JSON.stringify(data))),
      catchError(this.handleError<any>())
    );
  }


  addBookingService(bookingInput:BookingData):Observable<BookingData>{
    const url = 'http://localhost:3000/booking';
    return this.http.post<BookingData>(url, bookingInput, httpOptions).pipe(
      tap(_ => console.log(`registration done`)),
      catchError(this.handleError<BookingData>('SoapNotes'))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}