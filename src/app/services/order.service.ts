import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { IOrder, IOrders } from '../modules/order/order-form/iorder.metadata';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public url = "http://localhost:4000/orders/"

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
  // getUserById(id: number): Observable<{data:IOrders}>{
  //   const response = {data: {} as IOrder}
  //   return this.http.get<IOrders>(this.url + id)
  //   .pipe(
  //     map(
  //       r => {
  //         console.log(r)
  //         return response;
  //       }
  //     ),
  //     catchError(() => of(response))
  //   );
  // }
}
