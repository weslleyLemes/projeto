import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativo-a',
})
export class AtivoAComponent implements OnInit {
  preço_de_abertura = 2;
  preço_de_fechamento = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getResultado(preço_de_abertura, preço_de_fechamento){
    return ((preço_de_fechamento*2)-preço_de_abertura);
  }

  getExposisao(preço_de_abertura, preço_de_fechamento){
    return (Math.sqrt(this.getResultado(preço_de_abertura, preço_de_fechamento)));
  }

}
