import { Component, OnInit } from '@angular/core';
import { AtivoBComponent } from '../ativo-b/ativo-b.component'


@Component({
  selector: 'app-ativo-c',
})
export class AtivoCComponent implements OnInit {
  preço_de_abertura = 2;
  preço_de_fechamento = 5;

  constructor(private ativoBComponent: AtivoBComponent) { }

  ngOnInit(): void {
  }

  getResultado(preço_de_abertura, preço_de_fechamento){
    return ((preço_de_fechamento - preço_de_abertura))/2
  }

  getExposisao(preço_de_abertura, preço_de_fechamento){
    return (this.ativoBComponent.getExposisao(preço_de_abertura, preço_de_fechamento))/2;
  }

}
