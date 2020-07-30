import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativo-b',
})
export class AtivoBComponent implements OnInit {
  preço_de_abertura = 2;
  preço_de_fechamento = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getResultado(preço_de_abertura, preço_de_fechamento){
    return ((preço_de_fechamento - preço_de_abertura))/2
  }

  getExposisao(preço_de_abertura, preço_de_fechamento){
    return Math.log(this.getResultado(preço_de_abertura, preço_de_fechamento));
  }

}
