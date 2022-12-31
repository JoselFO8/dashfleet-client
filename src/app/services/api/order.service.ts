import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder, IOrders } from '../../modules/order/order-form/iorder.metadata';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public url = environment._APIUrl

  constructor(private http:HttpClient){}

  error(error: HttpErrorResponse){
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else{
      errorMsg = `Error Code ${error.status}\nMessage:_${error.message}`;
    }
    return of({error:true, msg:errorMsg, data: null })
  }

 
  /**
   * Tomar un usuario por su ID
   */
  getUserById(id: string): Observable<{error:boolean, msg:string, data: IOrders}>{
    const response = {error: false, msg: '', data: {} as any}
    console.log('PRUEBA', this.url, `/${id}`);
    
    return this.http.get<IOrders>(this.url + `/${id}`)
    .pipe(
      map(
        r => {
          console.log('desde SERVICE',r)
          response.data = r
          return response;
        }
      ),
      catchError(() => of(response))
    );
  }
}
