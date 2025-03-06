import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from 'src/app/connection-api.service';

@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.scss']
})
export class DebtorsComponent implements OnInit {

  constructor(private apiService: ConnectionApiService){}

  public clients: any = []

  ngOnInit(): void {
      this.apiService.getDebtors().subscribe({
        next: data => this.clients = data,
        error: error => console.log(error),
        complete: () => {}
      })
  }
}
