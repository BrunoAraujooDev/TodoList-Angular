import { Component, EventEmitter, Output, OnInit} from '@angular/core';


@Component({
  selector: 'app-cmp-lista',
  templateUrl: './cmp-lista.component.html',
  styleUrls: ['./cmp-lista.component.css']
})
export class CmpListaComponent implements OnInit {

  lista: string[] = []
  listaLocal: string | null = ''
  quantidade: number = 0


  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  btnClickChange: EventEmitter<any> = new EventEmitter<any>()
  
  ngOnInit(): void {
    this.listaLocal = localStorage.getItem('atividades');


    this.listaLocal ? this.lista = JSON.parse(this.listaLocal) : this.lista = [];
    this.quantidade = this.lista.length
  }

  emitirEvento(indice: number) {
    this.btnClickEvent.emit(indice)
  }

  emitirEventoAlterar(indice: number){
    this.btnClickChange.emit(indice)
  }

}
