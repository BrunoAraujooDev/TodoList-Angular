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
  listEvent: EventEmitter<any> = new EventEmitter<any>()




  emitirEvento(indice: any) {
    this.btnClickEvent.emit(indice)
  }

  

  ngOnInit(): void {
    this.listaLocal = localStorage.getItem('atividades');


    this.listaLocal ? this.lista = JSON.parse(this.listaLocal) : this.lista = [];
    this.quantidade = this.lista.length
  }


  

  // ['Buy a new gaming laptop', 'Complete a previous task', 'Create video for Youtube', 'Create a new portfolio site']

}
