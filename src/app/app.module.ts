import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import { MenuHomeAlunoComponent } from './menu-home-aluno/menu-home-aluno.component';
import { LoginComponent } from './login/login.component';
import { AutorComponent } from './autor/autor.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { HomeInstituicaoComponent } from './home-instituicao/home-instituicao.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuHomeAlunoComponent,
    LoginComponent,
    AutorComponent,
    HomeAlunoComponent,
    HomeInstituicaoComponent,
    HomeBackofficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
