import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QueryService } from 'src/app/services/api/query.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  public orderForm
  public formSubmited = false

  constructor(
    private formBuilder: FormBuilder,
    private queryService: QueryService
  ) {
    this.orderForm = this.formBuilder.group({
      orderCode: [
        '',
        [
          Validators.required,
        ]
      ],
      documentType: [
        '',
        [
          Validators.required,
        ]
      ],
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000)
        ]
      ]
    })
  }

  get form() {
    return this.orderForm.controls;
  }

  submitForm() {
    this.formSubmited = true;
    if(!this.orderForm.valid) {
      return 
    }
    this.queryService.validateUserOrder(this.orderForm.value as any).subscribe()
  }
}
