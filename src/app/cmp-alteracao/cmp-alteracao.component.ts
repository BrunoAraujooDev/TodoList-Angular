import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmp-alteracao',
  templateUrl: './cmp-alteracao.component.html',
  styleUrls: ['./cmp-alteracao.component.css']
})
export class CmpAlteracaoComponent {

  toggle: boolean = true;
  erro: boolean = false;

  @ViewChild('alteracao')
  alteracao!: ElementRef

  placeholder: string = ''

  @Output()
  btnAcceptChangeEvent: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  btnCleanList: EventEmitter<any> = new EventEmitter<any>()

  acceptEvent(): void {
    this.btnAcceptChangeEvent.emit();
  }

  aceitarLimpeza(): void {
    this.btnCleanList.emit();
  }

}
