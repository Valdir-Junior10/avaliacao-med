import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.scss'],
})
export class EstanteComponent implements OnInit {
  semanasEstudo = [
    {
      active: false,
      numeroSemana: '01',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '02',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'NEF', numero: 'X' },
      ],
    },
    {
      active: false,
      numeroSemana: '03',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'CIR', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '04',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '2' },
        { nome: 'GIN', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '05',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '3' },
        { nome: 'PRE', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '06',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '07',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'PRE', numero: '2' },
        { nome: 'OBS', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '08',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'PRE', numero: '2' },
        { nome: 'NEF', numero: '4' },
      ],
    },
    {
      active: false,
      numeroSemana: '09',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '5' },
        { nome: 'PED', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '10',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'PED', numero: '1' },
        { nome: 'REU', numero: '1' },
      ],
    },
    {
      active: true,
      numeroSemana: '11',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'REU', numero: '2' },
        { nome: 'OBS', numero: '2' },
      ],
    },
    {
      active: false,
      numeroSemana: '12',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '01' },
        { nome: 'CIR', numero: '01' },
      ],
    },
    {
      active: false,
      numeroSemana: '13',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      active: false,
      numeroSemana: '14',
      dataInicial: '16/08',
      dataFinal: '24/08',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
