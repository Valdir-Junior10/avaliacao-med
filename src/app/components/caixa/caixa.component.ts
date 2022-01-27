import { Component, Input, OnInit } from '@angular/core';
import { ISemana } from 'src/app/models/semana.interface';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss'],
})
export class CaixaComponent implements OnInit {
  ativaGiro: boolean = false;
  @Input() semana: ISemana;

  constructor() {}

  ngOnInit() {}

  giraProgresso() {
    this.ativaGiro = !this.ativaGiro;
  }
}
