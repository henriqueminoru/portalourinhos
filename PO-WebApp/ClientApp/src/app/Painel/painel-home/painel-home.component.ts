import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AnuncioModel } from '../../anuncio/model/anuncio.model';

@Component({
  selector: 'app-painel-home',
  templateUrl: './painel-home.component.html',
})
export class PainelHomeComponent
{
  anuncio: AnuncioModel[] = [
    { id: 4, codigo: '000001', nome: 'Produto', detalhe: 'Descrição', foto: 'skate_montado_profissional.jpeg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 7, codigo: '000002', nome: 'Produto', detalhe: 'Descrição', foto: 'boot.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 0, valorDesconto: 0 },
    { id: 9, codigo: '000003', nome: 'Produto', detalhe: 'Descrição', foto: 'shape.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 2, valorDesconto: 10 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 },
    { id: 5, codigo: '00000', nome: 'Produto', detalhe: 'Descrição', foto: 'dgk.jpg', logo: 'independent.png', empresa: 'independent', valor: 12.5, tipoDesconto: 1, valorDesconto: 0 }
  ];

  constructor(
    
  ) {
  }
}
