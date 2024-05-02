import { Component, Pipe, PipeTransform } from '@angular/core';
import { Comodo } from '../planta-casa/model/comodo';

@Pipe({
  name: 'comodo',
  standalone: true,
})
export class ComodoPipe implements PipeTransform {
  transform(comodo: Comodo, ...args: unknown[]): unknown {
    return `
    ${comodo.nome}
    ${comodo.nivelSinal2ghz}
    ${comodo.nivelSinal5hz}
    ${comodo.velocidade2ghz}
    ${comodo.velocidade5ghz}
    ${comodo.nivelInterferencia}
    `;
  }
}
