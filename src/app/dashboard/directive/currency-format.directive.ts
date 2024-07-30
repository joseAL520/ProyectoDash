import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appCurrencyFormat]'
})
export class CurrencyFormatDirective {
  
    private currencyPipe = new CurrencyPipe('es-CO'); // Usar 'es-CO' para pesos colombianos

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('blur') onBlur() {
      this.formatValue();
    }

    @HostListener('focus') onFocus() {
      this.removeFormatting();
    }

    @HostListener('input', ['$event.target.value']) onInput(value: string) {
      // Remover caracteres no numéricos y actualizar el valor del campo
      const cleanedValue = value.replace(/[^0-9]/g, '');
      this.renderer.setProperty(this.el.nativeElement, 'value', cleanedValue);
    }

    private formatValue() {
      const value = this.el.nativeElement.value;
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        const formattedValue = this.currencyPipe.transform(numericValue, 'COP', 'symbol', '1.0-0');
        this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
      }
    }

    private removeFormatting() {
      const value = this.el.nativeElement.value.replace(/[^0-9]/g, '');
      this.renderer.setProperty(this.el.nativeElement, 'value', value);
    }

}
