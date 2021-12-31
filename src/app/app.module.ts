import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PessoaComponent } from './component/pessoa/pessoa.component';
import { FornecedorComponent } from './component/fornecedor/fornecedor.component';
import { AplicacaoComponent } from './component/aplicacao/aplicacao.component';
import { PessoaFormComponent } from './component/pessoa-form/pessoa-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaService } from './service/pessoa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoaComponent,
    FornecedorComponent,
    AplicacaoComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
