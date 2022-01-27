import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-download',
  templateUrl: './botao-download.component.html',
  styleUrls: ['./botao-download.component.scss'],
})
export class BotaoDownloadComponent implements OnInit {
  @Output() iniciaGiro = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sinalGirar() {
    this.iniciaGiro.emit();
  }
}
