import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { ComodoPipe } from '../../pipes/comodo.pipe';
import { Casa } from '../../planta-casa/model/casa';
import { Comodo } from '../../planta-casa/model/comodo';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-planta',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ComodoPipe,
    DialogModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    InputIconModule,
    TooltipModule,
    InputNumberModule,
    ChartModule
  ],
  templateUrl: './planta.component.html',
  styleUrl: './planta.component.scss'
})
export class PlantaComponent implements OnInit {
  // Planta
  casaEsquerda: Casa;
  casaDireita: Casa;
  mostraDialog: boolean = false;
  comodoSelecionado: Comodo;
  casaSelecionada: Casa;

  //Graficos
  dadosSinalCasaEsquerda: any;
  dadosVelocidadeCasaEsquerda:any
  dadosInterferenciaCasaEsquerda: any

  dadosSinalCasaDireita: any;
  dadosVelocidadeCasaDireita:any
  dadosInterferenciaCasaDireita: any
  options: any;


  constructor() {
    this.casaEsquerda = this.inicializaCasaEsquerda();
    this.casaDireita = this.inicializaCasaDireita();
    this.comodoSelecionado = this.inicializaComodo();
    this.casaSelecionada = this.inicializaCasaDireita();
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    // CASA ESQUERDA
    this.dadosSinalCasaEsquerda = {
      labels: this.casaEsquerda.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Nível de Sinal 2GHz",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaEsquerda.comodos.map(c=>c.nivelSinal2ghz)
        },
        {
          label: "Nível de Sinal 5GHz",
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.casaEsquerda.comodos.map(c=>c.nivelSinal5hz)
        },
      ]
    };

    this.dadosVelocidadeCasaEsquerda = {
      labels: this.casaEsquerda.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Velocidade 2GHz",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaEsquerda.comodos.map(c=>c.velocidade2ghz)
        },
        {
          label: "Velocidade 5GHz",
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.casaEsquerda.comodos.map(c=>c.velocidade5ghz)
        },
      ]
    };

    this.dadosInterferenciaCasaEsquerda = {
      labels: this.casaEsquerda.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Interferência",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaEsquerda.comodos.map(c=>c.nivelInterferencia)
        },
      ]
    };

    // CASA DIREITA
    this.dadosSinalCasaDireita = {
      labels: this.casaDireita.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Nível de Sinal 2GHz",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaDireita.comodos.map(c=>c.nivelSinal2ghz)
        },
        {
          label: "Nível de Sinal 5GHz",
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.casaDireita.comodos.map(c=>c.nivelSinal5hz)
        },
      ]
    };

    this.dadosVelocidadeCasaDireita = {
      labels: this.casaDireita.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Velocidade 2GHz",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaDireita.comodos.map(c=>c.velocidade2ghz)
        },
        {
          label: "Velocidade 5GHz",
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.casaDireita.comodos.map(c=>c.velocidade5ghz)
        },
      ]
    };

    this.dadosInterferenciaCasaDireita = {
      labels: this.casaDireita.comodos.map(c=>c.nome),
      datasets:  [
        {
          label: "Interferência",
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.casaDireita.comodos.map(c=>c.nivelInterferencia)
        },
      ]
    };





    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
  };
}

  showDialog(comodoClicado: Comodo, casa: Casa) {
    this.comodoSelecionado = comodoClicado;
    this.mostraDialog = true;
  }

  autalizarRegistro() {
    this.mostraDialog = false;
    this.ngOnInit()
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
