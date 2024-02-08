import { ConnectionApiService } from './../../connection-api.service';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  constructor(
    private datePipe: DatePipe,
    private apiService: ConnectionApiService,
    private router: Router
  ){}

  dataFormatada: any = ''

  save(data: any) {
    let dataAtual = new Date
    this.dataFormatada = this.datePipe.transform(dataAtual, 'dd/MM/yyyy');
    let product: Product = {
      ref: data.value.ref,
      description: data.value.description,
      supplier: data.value.supplier,
      cost: data.value.cost,
      sale: data.value.sale,
      date: this.dataFormatada
    }
    console.log(product)
    this.apiService.newProduct(product).subscribe({
      next: res => console.log(res),
      complete: () => this.router.navigate(['/inventory'])
    })
  }
}
