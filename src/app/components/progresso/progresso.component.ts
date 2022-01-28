import { Component, Input, OnInit } from '@angular/core';
import { IMateria } from 'src/app/models/materia.interface';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss'],
})
export class ProgressoComponent implements OnInit {
  @Input() acionaGiro: boolean;
  @Input() materia: IMateria;
  @Input() active: boolean;

  constructor() {}

  ngOnInit() {}
}
