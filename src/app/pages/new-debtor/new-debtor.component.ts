import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionApiService } from 'src/app/connection-api.service';

@Component({
  selector: 'app-new-debtor',
  templateUrl: './new-debtor.component.html',
  styleUrls: ['./new-debtor.component.scss']
})
export class NewDebtorComponent {

  constructor(private datePipe: DatePipe, private apiService: ConnectionApiService, private router: Router) {}

  // dataFormatada: any = ''

  save(data: any) {
    // let dataAtual = new Date
    // this.dataFormatada = this.datePipe.transform(dataAtual, 'dd/MM/yyyy');
    let debtor: any = {
      name: data.value.name,
      date: data.value.dataParc,
      valueParc: data.value.valorParc,
      numberParc: data.value.numeroParc,
      value: data.value.value
    }
    console.log(debtor)
    this.apiService.newDebtor(debtor).subscribe({
      next: res => console.log(res),
      complete: () => this.router.navigate(['/debtors'])
    })
  }

}
