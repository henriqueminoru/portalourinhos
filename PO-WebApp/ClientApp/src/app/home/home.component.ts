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
    { id: 4, codigo: '000001', nome: 'Conjunto', detalhe: 'Mundo Feliz', foto: 'skate_montado_profissional.jpeg', logo:'independent.png',empresa: 'independent' },
    { id: 7, codigo: '000002', nome: 'tênis de skate', detalhe: 'Pro-model Serginho Santoro', foto: 'boot.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 9, codigo: '000003', nome: 'Shape', detalhe: 'Hape Elemnt 8.125', foto: 'shape.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent' },
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent'},
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent'},
    { id: 5, codigo: '00000', nome: 'camiseta', detalhe: 'Dgk street survival', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent' }
  ];

  constructor() {
  }
}

