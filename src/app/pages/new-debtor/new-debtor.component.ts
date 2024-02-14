import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-debtor',
  templateUrl: './new-debtor.component.html',
  styleUrls: ['./new-debtor.component.scss']
})
export class NewDebtorComponent {

  constructor(private datePipe: DatePipe) {}

  dataFormatada: any = ''

  save(data: any) {
    let dataAtual = new Date
    this.dataFormatada = this.datePipe.transform(dataAtual, 'dd/MM/yyyy');
    let debtor: any = {
      name: data.value.name,
      value: data.value.value,
      date: this.dataFormatada
    }
    console.log(debtor)
    // this.apiService.newProduct(product).subscribe({
    //   next: res => console.log(res),
    //   complete: () => this.router.navigate(['/inventory'])
    // })
  }

}
