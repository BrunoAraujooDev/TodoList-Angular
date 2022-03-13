import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputApp]'
})
export class DiretivaInputDirective {

  constructor(
    private elemento: ElementRef
  ) { 
    this.elemento.nativeElement.style.padding = "10px"
    this.elemento.nativeElement.style.flex = "1"
    this.elemento.nativeElement.style.border = "1px solid rgb(201, 200, 200)"
    this.elemento.nativeElement.style.borderRadius = "5px"
    this.elemento.nativeElement.style.fontSize = "1.1rem"
  }

}
