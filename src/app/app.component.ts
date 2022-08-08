import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly apiURL: string | undefined;
  title = 'tooltip';
  constructor(private http : HttpClient) {
    
    this.apiURL == 'http://localhost:3000'
  }

  listar_produtos(){
    this.http.get(`${this.apiURL}/produtos`)
      .subscribe(resultado => console.log(resultado))
  }
  listar_produtos_id(){
    this.http.get(`${this.apiURL}/produtos/1`)
      .subscribe(
        resultado => {
          console.log(resultado)
        }, 
        erro => { 
          if(erro.status == 404){
            console.log('Produto não encontrado')
          }
        }
    )  
  };
  adicionar_produto(){
    var produto = {nome: ""}
    this.http.post(`${ this.apiURL}/produtos`, produto)
      .subscribe(
        resultado =>{
          console.log(resultado)
        },
        erro =>{
          if(erro.status == 400){
            console.log(erro);
          }
        }
      )
  };
  alterar_produto(){
    var produto = {id: 1, nome: "Smart TV"}
    this.http.put(`${this.apiURL}/produtos/1`, produto)
      .subscribe(
        resultado => {
          console.log('Produto alterado com sucesso.')
        },
        erro => {
          switch(erro.status){
            case 400:
                console.log(erro.error.mensagem)
                break;
            case 404:
                console.log('Produto não localizado')
                break;    
          }
        }
      )
  }
  excluir_produto(){
    this.http.delete(`${this.apiURL}/produtos/1`)
      .subscribe(
        resultado =>{
          console.log('Produto excluido com sucesso.')
        },
        erro =>{
          if(erro.status == 404){
            console.log('Produto não localizado.')
          }
        }
      )

  }
  
}
