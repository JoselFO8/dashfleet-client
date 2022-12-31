import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {catchError, Observable, map, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public url = environment._APIUrl

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  validateUserOrder(info: { documentType: string; documentNumber: number; orderCode: string; }):Observable<{
    error: boolean;
    msg: string;
    data: any;
  }> {
    const response = { error: true, msg: "No hay registros con la informacion suminstrada!", data: null }
    return this.http.post<{error: boolean, msg: string, data: any}>(this.url + '/orders/validate-user-order', info)
    .pipe(
      map(r => {
        response.msg = r.msg;
        response.error = r.error;
        response.data = r.data;

        if(!response.error) {
          this.router.navigateByUrl(`/order/${response.data}`)
        }

        return response
      }),
      catchError(e => { 
        return of(response)
      })
    )
  }

}
