import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from 'src/app/connection-api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private apiService: ConnectionApiService){}

  public sales: any;
  public ready: boolean = true;

  ngOnInit(): void {
    this.apiService.getSales().subscribe({
      next: data => this.sales = data,
      error: error => console.log(error),
      complete: () => {
        console.log(this.sales),
        this.ready = false;
      }
    })
  }

  backInventory(i: number) {
    alert(`mover produto: ${i}`)
  }

  deleteProduct(i: number) {
    alert(`deletar produto: ${i}`)
  }

}
