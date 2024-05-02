import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Comodo } from './planta-casa/model/comodo';
import { PlantaCasaComponent } from './planta-casa/planta-casa.component';
import { Casa } from './planta-casa/model/casa';
import { ComodoPipe } from './pipes/comodo.pipe';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    PlantaCasaComponent,
    ComodoPipe,
    DialogModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    InputIconModule,
    NgFor,
    TooltipModule,
    InputNumberModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  casaEsquerda: Casa;
  casaDireita: Casa;
  mostraDialog: boolean = false;
  comodoSelecionado: Comodo;
  casaSelecionada: Casa;

  constructor() {
    this.casaEsquerda = this.inicializaCasaEsquerda();
    this.casaDireita = this.inicializaCasaDireita();
    this.comodoSelecionado = this.inicializaComodo();
    this.casaSelecionada = this.inicializaCasaDireita();
  }

  ngOnInit(): void {}

  showDialog(comodoClicado: Comodo, casa: Casa) {
    this.comodoSelecionado = comodoClicado;
    this.mostraDialog = true;
  }

  autalizarRegistro() {
    this.mostraDialog = false;
  }

  // Mock de valores para inicialização
  inicializaCasaEsquerda(casa?: Partial<Casa>): Casa {
    return {
      comodos: [
        this.inicializaComodo({
          nome: 'Banheiro',
          larguraColuna: 2,
          alturaColuna: 20,
          bgColor: 'bg-gray-200',
        }),

        this.inicializaComodo({
          nome: 'Quarto 2',
          larguraColuna: 5,
        }),

        this.inicializaComodo({
          nome: 'Cozinha',
          larguraColuna: 5,
          bgColor: 'bg-gray-200',
        }),

        this.inicializaComodo({
          nome: 'Corredor',
          larguraColuna: 12,
          alturaColuna: 8,
          bgColor: 'bg-gray-300',
        }),

        this.inicializaComodo({
          nome: 'Quarto 1',
          larguraColuna: 7,
          alturaColuna: 13,
          bgColor: 'bg-gray-200',
        }),

        this.inicializaComodo({
          nome: 'Sala',
          larguraColuna: 5,
          alturaColuna: 13,
        }),
      ],
    };
  }

  inicializaCasaDireita(casa?: Partial<Casa>): Casa {
    return {
      comodos: [
        this.inicializaComodo({
          nome: 'Cozinha',
          larguraColuna: 5,
          bgColor: 'bg-gray-200',
        }),

        this.inicializaComodo({
          nome: 'Quarto 2',
          larguraColuna: 5,
        }),

        this.inicializaComodo({
          nome: 'Banheiro',
          larguraColuna: 2,
          alturaColuna: 20,
          bgColor: 'bg-gray-200',
        }),

        this.inicializaComodo({
          nome: 'Corredor',
          larguraColuna: 12,
          alturaColuna: 8,
          bgColor: 'bg-gray-300',
        }),

        this.inicializaComodo({
          nome: 'Sala',
          larguraColuna: 5,
          alturaColuna: 13,
        }),

        this.inicializaComodo({
          nome: 'Quarto 1',
          larguraColuna: 7,
          alturaColuna: 13,
          bgColor: 'bg-gray-200',
        }),
      ],
    };
  }

  // Inicializa um cômodo. Pode ser passado qualquer atributo como parmâmetro
  // Se não for passado nada, gera um aleatório
  inicializaComodo(comodo?: Partial<Comodo>): Comodo {
    return {
      larguraColuna: comodo?.larguraColuna || 0,
      alturaColuna: comodo?.alturaColuna || 0,
      bgColor: comodo?.bgColor || '',
      nome: comodo?.nome || '',
      nivelSinal2ghz:
        comodo?.nivelSinal2ghz ||
        Number((Math.random() * (30 - 60) - 60).toFixed(2)),
      nivelSinal5hz:
        comodo?.nivelSinal5hz ||
        Number((Math.random() * (30 - 60) - 60).toFixed(2)),
      velocidade2ghz:
        comodo?.velocidade2ghz ||
        Number((Math.random() * (350 - 10) + 10).toFixed(2)),
      velocidade5ghz:
        comodo?.velocidade5ghz ||
        Number((Math.random() * (350 - 10) + 10).toFixed(2)),
      nivelInterferencia:
        comodo?.nivelInterferencia || Number((Math.random() * 100).toFixed(2)),
    };
  }

  converteCssComodo(comodo: Comodo): string {
    return `col-${comodo.larguraColuna} h-${comodo.alturaColuna}rem ${comodo.bgColor}`;
  }
}
