import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let dados = `
    nome: ${form.value.nome}
    telefone: ${form.value.telefone}
    endereço: ${form.value.endereco}`

    console.log(dados)
  }

}
