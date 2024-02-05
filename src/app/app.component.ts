import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from './connection-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private connectionService: ConnectionApiService){}

  public mensagemDoBackend: string = '';

  objetoParaEnviar = {
    chave1: 'valor-incorreto',
    chave2: 'valor2'
  };

  ngOnInit(): void {
    // this.sendData()
    // this.getData()
    this.testeFirebase();
  }

  testeFirebase() {
    this.connectionService.enviarObjetoFirebase().subscribe(
      (resposta) => {
        console.log('Resposta do backend:', resposta);
      },
      (erro) => {
        console.error('Erro ao enviar objeto para o backend:', erro);
      }
    );
  }

  getData() {
    this.connectionService.buscarDados().subscribe(
      (data) => {
        this.mensagemDoBackend = data.mensagem;
        console.log("mensagem:", this.mensagemDoBackend)
      },
      (error) => {
        console.error('Erro ao chamar a API:', error);
      }
    )
  }

  sendData() {
    this.connectionService.enviarObjeto(this.objetoParaEnviar).subscribe(
      (resposta) => {
        console.log('Resposta do backend:', resposta);
      },
      (erro) => {
        console.error('Erro ao enviar objeto para o backend:', erro);
      }
    );
  }
}
