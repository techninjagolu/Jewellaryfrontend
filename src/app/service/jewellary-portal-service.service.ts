import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class JewellaryPortalServiceService {
  serverUrl = environment.baseUrl;
  errorData: any;
 
  constructor(private http: HttpClient) { }
  getBrandList()
  {
    return this.http.get<any>(this.serverUrl + 'api/brand-list').pipe(
      catchError(this.handleError)
    );
  }

  getMaterialList()
  {
    return this.http.get<any>(this.serverUrl + 'api/material-list').pipe(
      catchError(this.handleError)
    );
  }

  getCategoryList()
  {
    return this.http.get<any>(this.serverUrl + 'api/catrgory-list').pipe(
      catchError(this.handleError)
    );
  }

  getfeatureProductList()
  {
    return this.http.get<any>(this.serverUrl + 'api/product-list?featureStatus=1').pipe(
      catchError(this.handleError)
    );
  }

  postRegisterCustomer(registerData:any,options:any)
  {
    return this.http.post<any>(this.serverUrl + 'api/registration',registerData,options).pipe(
      catchError(this.handleError)
    );
  }

   // error log
   private handleError(error: HttpErrorResponse) {
    console.log(error.error.text);
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      // console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    
    return throwError('Something bad happened. Please try again later.');
  }
}
