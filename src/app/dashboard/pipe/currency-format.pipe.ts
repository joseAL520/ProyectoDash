import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatCop'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return '';

    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0, // Elimina los dos últimos ceros
      maximumFractionDigits: 0,
    });

    return formatter.format(value);
  }

}
