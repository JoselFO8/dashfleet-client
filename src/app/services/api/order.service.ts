import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../../modules/order/order-form/iorder.metadata';

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
   * Tomar un pedido por codigo de pedido
   * Enviar codigo de pedido
   * @param id 
   * @returns 
   */
  getOrderById(id: string): Observable<{error:boolean, msg:string, data: IOrder}>{
    const response = {error: true, msg: 'No se encontraron pedidos', data: {} as IOrder}
    return this.http.get<{error: boolean, msg: string, data: IOrder}>(this.url + `/orders/${id}`)
    .pipe(
      map(
        r => {
          response.error = r.error
          response.msg = r.msg
          response.data = r.data
          return response;
        }
      ),
      catchError(() => of(response))
    );
  }
}
