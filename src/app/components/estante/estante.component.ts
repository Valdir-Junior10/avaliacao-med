import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.scss'],
})
export class EstanteComponent implements OnInit {
  semanasEstudo = [
    {
      numeroSemana: '01',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      numeroSemana: '02',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'NEF', numero: 'X' },
      ],
    },
    {
      numeroSemana: '03',
      materias: [
        { nome: 'CIR', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      numeroSemana: '04',
      materias: [
        { nome: 'NEF', numero: '2' },
        { nome: 'GIN', numero: '1' },
      ],
    },
    {
      numeroSemana: '05',
      materias: [
        { nome: 'NEF', numero: '3' },
        { nome: 'PRE', numero: '1' },
      ],
    },
    {
      numeroSemana: '06',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      numeroSemana: '07',
      materias: [
        { nome: 'PRE', numero: '2' },
        { nome: 'OBS', numero: '1' },
      ],
    },
    {
      numeroSemana: '08',
      materias: [
        { nome: 'PRE', numero: '2' },
        { nome: 'NEF', numero: '4' },
      ],
    },
    {
      numeroSemana: '09',
      materias: [
        { nome: 'NEF', numero: '5' },
        { nome: 'PED', numero: '1' },
      ],
    },
    {
      numeroSemana: '10',
      materias: [
        { nome: 'PED', numero: '1' },
        { nome: 'REU', numero: '1' },
      ],
    },
    {
      numeroSemana: '11',
      materias: [
        { nome: 'REU', numero: '2' },
        { nome: 'OBS', numero: '2' },
      ],
    },
    {
      numeroSemana: '12',
      materias: [
        { nome: 'NEF', numero: '01' },
        { nome: 'CIR', numero: '01' },
      ],
    },
    {
      numeroSemana: '13',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
    {
      numeroSemana: '14',
      materias: [
        { nome: 'NEF', numero: '1' },
        { nome: 'CIR', numero: '1' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
