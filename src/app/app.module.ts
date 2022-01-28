import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CaixaComponent } from './components/caixa/caixa.component';
import { EstanteComponent } from './components/estante/estante.component';
import { BotaoDownloadComponent } from './components/botao-download/botao-download.component';
import { ProgressoComponent } from './components/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaComponent,
    ProgressoComponent,
    EstanteComponent,
    BotaoDownloadComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
