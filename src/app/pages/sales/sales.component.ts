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
  public valueSales: any;
  public valueIn15days: any;
  public valueIn30days: any;

  ngOnInit(): void {
    this.apiService.getSales().subscribe({
      next: data => this.sales = data,
      error: error => console.log(error),
      complete: () => {
        console.log(this.sales),
        this.ready = false;
        this.calcSales();
        this.calcularVendasUltimos15Dias()
        this.calcularVendasUltimos30Dias();
      }
    })
  }

  calcSales() {
    console.log("entrou");
    if (this.sales) {
      const totalCost = this.sales.reduce((total: number, product: any) => total + product.Sale, 0);
      this.valueSales = totalCost
      console.log("Total de custo:", totalCost);
    } else {
      console.log("Sales não está definido");
    }
  }

  backInventory(i: number) {
    alert(`mover produto: ${i}`)
  }

  deleteProduct(i: number) {
    alert(`deletar produto: ${i}`)
  }

  calcularVendasUltimos15Dias() {
    const dataAtual = new Date();

    const dataInicio = new Date();
    dataInicio.setDate(dataAtual.getDate() - 15);

    let totalVendas = 0;

    this.sales.forEach((sale: { Date: string | number | Date; Sale: number; }) => {
      if (typeof sale.Date === 'string') {
        const partesData = sale.Date.split('/');
        const dataVenda = new Date(Number(partesData[2]), Number(partesData[1]) - 1, Number(partesData[0]));

        if (dataVenda >= dataInicio && dataVenda <= dataAtual) {
          totalVendas += sale.Sale;
        }
      }
    });

    this.valueIn15days = totalVendas
  }

  calcularVendasUltimos30Dias() {
    // Obter a data atual
    const dataAtual = new Date();

    // Calcular a data há 30 dias
    const dataInicio = new Date();
    dataInicio.setDate(dataAtual.getDate() - 30);

    // Inicializar a variável para armazenar a soma das vendas
    let totalVendas = 0;

    // Percorrer todos os produtos
    this.sales.forEach((sale: { Date: string | number | Date; Sale: number; }) => {
      if (typeof sale.Date === 'string') { // Verificação de tipo para garantir que sale.Date seja uma string
        // Converter a string de data para objeto Date
        const partesData = sale.Date.split('/');
        const dataVenda = new Date(Number(partesData[2]), Number(partesData[1]) - 1, Number(partesData[0])); // Ano, Mês (0-based), Dia

        // Verificar se a data da venda está dentro do período de 30 dias
        if (dataVenda >= dataInicio && dataVenda <= dataAtual) {
          // Se estiver dentro do período, adicionar o valor da venda ao total
          totalVendas += sale.Sale;
        }
      }
    });

    // Total de vendas dos últimos 30 dias
    this.valueIn30days = totalVendas
  }

}
