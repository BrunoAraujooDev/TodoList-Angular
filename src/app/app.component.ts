import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CmpInputComponent } from './cmp-input/cmp-input.component';
import { CmpListaComponent } from './cmp-lista/cmp-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'projectToDoList';

  toggle: boolean = false;
  indice!: number 

  @ViewChild('alteracao')
  correcao!: ElementRef


  @ViewChild('input')
  input!: CmpInputComponent

  @ViewChild('lista')
  list!: CmpListaComponent



  adicionar(task: string): void{

    this.list.lista.push(task)
    localStorage.setItem('atividades', JSON.stringify(this.list.lista))
    this.list.quantidade = this.list.lista.length
    this.input.texto.nativeElement.value = ''
  }
  
  deletarTarefa(indice: number){
    
    this.list.lista.splice(indice,1)
    this.list.quantidade = this.list.lista.length
    localStorage.setItem('atividades', JSON.stringify(this.list.lista))

  }

  limparLista():void{
    this.list.lista = []
    this.list.quantidade = this.list.lista.length
    localStorage.clear()
  }

  getIndice(indice: number){
    this.indice = indice
    this.toggle = !this.toggle
  }

  alterarDados():void{
    this.list.lista[this.indice] = this.correcao.nativeElement.value
    localStorage.setItem('atividades', JSON.stringify(this.list.lista))
    this.toggle = !this.toggle
  }

  
}
