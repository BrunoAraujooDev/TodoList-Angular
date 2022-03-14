import { Component, ViewChild } from '@angular/core';
import { CmpAlteracaoComponent } from './cmp-alteracao/cmp-alteracao.component';
import { CmpInputComponent } from './cmp-input/cmp-input.component';
import { CmpListaComponent } from './cmp-lista/cmp-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'projectToDoList';

  indice!: number 

  @ViewChild('input')
  input!: CmpInputComponent

  @ViewChild('lista')
  list!: CmpListaComponent

  @ViewChild('change')
  change!: CmpAlteracaoComponent



  adicionar(task: string): void{
    if(task){
      this.list.lista.push(task)
      localStorage.setItem('atividades', JSON.stringify(this.list.lista))
      this.list.quantidade = this.list.lista.length
      this.input.texto.nativeElement.value = ''
      this.input.erro = false;
    } else {
        this.input.erro = true;
    }
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
    this.change.toggle = !this.change.toggle
    console.log(this.list.lista[indice])
    this.change.placeholder = this.list.lista[indice]
  }

  alterarDados():void{
    this.list.lista[this.indice] = this.change.alteracao.nativeElement.value
    localStorage.setItem('atividades', JSON.stringify(this.list.lista))
    this.change.toggle = !this.change.toggle
  }

  
}
