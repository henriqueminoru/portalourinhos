import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { PainelComponent } from './painel/painel.component';
import { PainelHomeComponent } from './Painel/painel-home/painel-home.component';
import { AnuncioConsultaComponent } from './Painel/painel-anuncio/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCrudComponent } from './Painel/painel-anuncio/anuncio-crud/anuncio-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ContatoComponent,
    FooterComponent,
    PainelComponent,
    PainelHomeComponent,
    AnuncioConsultaComponent,
    AnuncioCrudComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'contato', component: ContatoComponent },
      { path: 'painel', component: PainelComponent },
      { path: 'painel-home', component: PainelHomeComponent },
      { path: 'anuncio-consulta', component: AnuncioConsultaComponent },
      { path: 'anuncio-crud', component: AnuncioCrudComponent },
    //{ path: 'painel-home', loadChildren: () => import('./tabela-preco/tabela-preco.module').then(m => m.TabelaPrecoModule)}
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
