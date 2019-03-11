import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {Customer} from './customer.model';
import {catchError, tap} from 'rxjs/internal/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = '/customers';  // URL to web api

  baseUrl = environment.baseUrl;

  constructor(  private http: HttpClient) {

  }

  update(customer){
    return this.http.put(this.baseUrl +"/"+this.customersUrl+"/"+customer.customerId,customer)
  }

  save(customer){
    return this.http.post(this.baseUrl +"/"+this.customersUrl,customer)

  }

  get(id):Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl +'/customers/'+id)
      .pipe(
        tap(_ => this.log('fetched cusomters')),
        catchError(this.handleError('getCustomers', null))
      );
  }

  /** GET customers from the server */
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl +this.customersUrl)
      .pipe(
        tap(_ => this.log('fetched cusomters')),
        catchError(this.handleError('getCustomers', []))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
