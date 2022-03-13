import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpListaComponent } from './cmp-lista/cmp-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { FormsModule } from '@angular/forms';
import { DiretivaBotaoDirective } from './diretiva-botao.directive';
import { CmpInputComponent } from './cmp-input/cmp-input.component';
import { DiretivaInputDirective } from './diretiva-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CmpListaComponent,
    DiretivaBotaoDirective,
    CmpInputComponent,
    DiretivaInputDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
