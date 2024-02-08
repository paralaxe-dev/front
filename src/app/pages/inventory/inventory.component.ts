import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from 'src/app/connection-api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private apiService: ConnectionApiService){}

  public products: any = [] //tipar

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: data => this.products = data,
      error: error => console.log(error),
      complete: () => console.log(this.products)
    })
  }

  productSold() {
    alert("produto salvo em vendidos!")
  }
}
