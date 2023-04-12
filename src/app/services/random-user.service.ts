import { Injectable } from '@angular/core';
//import http client to make the request
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  //handle error method
  hanldeError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`An error occured: ${error.error}`);
  }else{
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`
    );
  }
  return throwError(() => new Error('Something bad happened; please try again later.'));
}

  //get method to get random user from randomuser.me
  getRandomContact(): Observable<any>{

    return this.http.get('https://randomuser.me/api/').pipe(
      retry(2),
      catchError(this.hanldeError)
    );
  }
  //get method to get random users from randomuser.me
  getRandomContacts(n:number): Observable<any>{
    const opt: HttpParams = new HttpParams().set('results', n.toString());
    return this.http.get('https://randomuser.me/api/', {params: opt}).pipe(
      retry(2),
      catchError(this.hanldeError)
    );
  }
  //get method to get a ranom user by gender
  getRandomContactsByGender(gender:string): Observable<any>{
    const gen: HttpParams = new HttpParams().set('results', gender);
    return this.http.get('https://randomuser.me/api/', {params: gen}).pipe(
      retry(2),
      catchError(this.hanldeError)
    );

  }

}
