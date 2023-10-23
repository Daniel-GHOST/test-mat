import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class A3testService {

  constructor(private cliente:HttpClient) {}

  apiURL:string="https://pruebas-service-daniel-ghost.cloud.okteto.net/"

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'aplication/json'
        })
    }

    handleError(error: any) {
        let errorMessage = '';

        if(error.error instanceof ErrorEvent){
            //Get client-side error
            errorMessage = error.error.message;
        }else{
            //Get server-side error
            errorMessage = `Error code: ${error.status}\n Message: ${error.message}`
        }

        window.alert(errorMessage);
        return throwError(errorMessage);
    }
    getTest1():Observable<any>{
      return this.cliente.get<any>(this.apiURL + "a3test1", this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    getTest2():Observable<any>{
      return this.cliente.get<any>(this.apiURL + "a3test2", this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    getTest3():Observable<any>{
      return this.cliente.get<any>(this.apiURL + "a3test3", this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    getTest4():Observable<any>{
      return this.cliente.get<any>(this.apiURL + "a3test4", this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
}
