import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionApiService } from 'src/app/connection-api.service';
import { PopupService } from 'src/app/popup.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private apiService: ConnectionApiService, private popupService: PopupService){
    this.inputValueSubscription = this.popupService.inputValue$.subscribe(value => {
      this.inputValue = value;
      this.submitValueFromPopup(value);
    });
  }

  public products: any = [] //tipar
  public ready: boolean = true;
  public searchTerm: string = '';

  inputValue: number = 0; // Variável para armazenar o valor inserido
  inputValueSubscription!: Subscription;

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: data => this.products = data,
      error: error => console.log(error),
      complete: () => {
        console.log(this.products),
        this.ready = false;
      }
    })
    this.inputValueSubscription = this.popupService.inputValue$.subscribe(value => {
      this.inputValue = value; // Atualiza o valor inserido
      // console.log("valor retornado",this.inputValue)
    });
  }

  ngOnDestroy(): void {
    this.inputValueSubscription.unsubscribe(); // Cancela a inscrição ao destruir o componente
  }

  filteredProducts(): any[] {
    if (!this.searchTerm) {
      return this.products;
    }
    return this.products.filter((product: { Description: string; }) =>
      product.Description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  public produtoVendido: any;

  openPopup(product: any) {
    this.produtoVendido = product;
    console.log('produto para excluir:', this.produtoVendido)
    this.popupService.openPopup();
  }

  keysToLowerCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    const result: any = {};

    Object.keys(obj).forEach(key => {
      result[key.toLowerCase()] = obj[key];
    });

    return result;
  }

  submitValueFromPopup(value: number) {
    this.produtoVendido!.Sale = value
    let transformProduct = this.keysToLowerCase(this.produtoVendido)

    this.apiService.deleteProduct(transformProduct).subscribe({
      next: res => console.log("resposta:", res),
      complete: () => window.location.reload() //AQUI ATIVAR UM SPINNER ATÉ RECARREGAR A PÁGINA OU TENTAR USAR OBSERVABLES PARA ATUALIZAR AUTOMATICAMENTE
    })
  }

  editProduct(id: string) {
    alert("editar")
  }
}
