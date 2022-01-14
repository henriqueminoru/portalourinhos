
export class AnuncioModel {
  id: number;
  codigo: string;
  nome: string;
  detalhe: string;
  foto: string;
  logo: string;
  empresa: string;
  valor: number;
  //1=promoção
  //2=desconto
  tipoDesconto: number;
  valorDesconto: number;
}
