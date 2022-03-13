import { Directive, Input, ElementRef } from '@angular/core';
import { TilePosition } from '@angular/material/grid-list/tile-coordinator';

@Directive({
  selector: '[botao]'
})
export class DiretivaBotaoDirective {

  @Input() bg: string = "#8F49E8";
  @Input() largura: string = "50px";

  constructor(
    private elemento: ElementRef,
  ) {

    this.elemento.nativeElement.style.height = '43px';
    this.elemento.nativeElement.style.border = 'none';
    this.elemento.nativeElement.style.color = '#fff';
    this.elemento.nativeElement.style.cursor = 'pointer';
   }

   ngOnInit(){
    this.elemento.nativeElement.style.backgroundColor = this.bg;
    this.elemento.nativeElement.style.width = this.largura;
   }

}
