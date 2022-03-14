import { Component, EventEmitter,  Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cmp-input',
  templateUrl: './cmp-input.component.html',
  styleUrls: ['./cmp-input.component.css']
})
export class CmpInputComponent {

  erro: boolean = false;

  @ViewChild('texto')
  texto!: ElementRef

  @Output()
 btnClick: EventEmitter<any> = new EventEmitter<any>()

  emitirTarefa(tarefa: string): void{
    this.btnClick.emit(tarefa)
  }

}
