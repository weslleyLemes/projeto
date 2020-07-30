import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AtivoAComponent } from '../ativo-a/ativo-a.component'
import { AtivoBComponent } from '../ativo-b/ativo-b.component'
import { AtivoCComponent } from '../ativo-c/ativo-c.component'
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  estoque = false;
  totalBool = false;
  formBool = false;
  estoqueItens = [];
  ativos = [];
  total =  0;

  @ViewChild('tipoAtivo') tipoAtivo:ElementRef;
  @ViewChild('quantidade') quantidade:ElementRef;
  @ViewChild('precoAbertura') precoAbertura:ElementRef;
  @ViewChild('precoFechamento') precoFechamento:ElementRef;

  constructor(
    private router: Router,
    private ativoAComponent : AtivoAComponent,
    private ativoBComponent : AtivoBComponent,
    private ativoCComponent : AtivoCComponent,

    ) { }

  ngOnInit(): void {

    this.getAtivos();

   }

   openEstoque() {
     this.estoque = true;
     this.totalBool =  false;
     this.formBool = false;
   }

   openForm() {
    this.estoque = false;
    this.totalBool =  false;
    this.formBool = true;
  }


   getAtivos(){
    this.ativos = this.estoqueItens.filter((el, i, a) => i === a.indexOf(el))

    console.log(this.ativos)
   }

   onSubmit() {        
    if(this.tipoAtivo.nativeElement.value == "Ativo A"){
      this.estoqueItens.push({resultado:  this.ativoAComponent.getResultado(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value),
         exposisao: this.ativoAComponent.getExposisao(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value), ativo: this.tipoAtivo.nativeElement.value,
         quantidade: this.quantidade.nativeElement.value},
         );
    }
    
    if(this.tipoAtivo.nativeElement.value == "Ativo B"){
      this.estoqueItens.push({resultado: this.ativoBComponent.getResultado(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value),
         exposisao: this.ativoBComponent.getExposisao(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value), ativo: this.tipoAtivo.nativeElement.value,
         quantidade: this.quantidade.nativeElement.value},);
    }
    
    if(this.tipoAtivo.nativeElement.value == "Ativo C"){
      this.estoqueItens.push({resultado: this.ativoCComponent.getResultado(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value),
         exposisao: this.ativoCComponent.getExposisao(this.precoAbertura.nativeElement.value,this.precoFechamento.nativeElement.value), ativo: this.tipoAtivo.nativeElement.value,
         quantidade: this.quantidade.nativeElement.value},
         );
    }

    alert(this.tipoAtivo.nativeElement.value + ' adicionado!');

    console.log(this.estoqueItens)
    
   }

   getTotal() {
     let resultado;
     let exposisao;
     let total;

     this.estoqueItens.forEach(element => {
        resultado = (element.resultado * element.quantidade);
        exposisao = (element.exposisao * element.quantidade);
        total =  (resultado + exposisao);

     });

     this.total =  total
     this.totalBool = true;
     this.estoque = false;
     this.formBool = false;


     console.log(this.total)

   }
}
