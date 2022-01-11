import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AnuncioModel } from '../anuncio/model/anuncio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
{
  anuncio: AnuncioModel[] = [
    { id: 4, codigo: '000001', nome: 'Skate montado', detalhe: 'Semi-profissional-Shape de Maple Canadense', foto: 'skate_montado_profissional.jpeg' },
    { id: 7, codigo: '000002', nome: 'tênis de skate', detalhe: 'Pro-model Serginho Santoro', foto: 'boot.jpg' },
    { id: 9, codigo: '000003', nome: 'Shape', detalhe: 'Hape Elemnt 8.125', foto: 'shape.jpg' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg' }
  ];

  constructor() {
  }
}

