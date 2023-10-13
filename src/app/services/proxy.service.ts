import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  apiURL:string="http://localhost:8080/proxy"
  constructor(private cliente:HttpClient) { }

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
    getData():Observable<number[]>{
      return this.cliente.get<number[]>(this.apiURL, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
}
