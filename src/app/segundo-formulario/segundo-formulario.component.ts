import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-segundo-formulario',
  templateUrl: './segundo-formulario.component.html',
  styleUrls: ['./segundo-formulario.component.css']
})
export class SegundoFormularioComponent implements OnInit {

  formulario_cadastro : FormGroup

  constructor() { 
    this.formulario_cadastro = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'telefone' : new FormControl(null, Validators.required),
      'endereco' : new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let dados = `
      nome: ${this.formulario_cadastro.value.nome}
      telefone: ${this.formulario_cadastro.value.telefone}
      endereço: ${this.formulario_cadastro.value.endereco}
    `
    console.log(dados)
  }

}
