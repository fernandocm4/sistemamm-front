import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask',
  standalone: true
})
export class PhoneMaskPipe implements PipeTransform {

  transform(value: string | number | null | undefined): string {
    if (!value) {
      return '';
    }

    const formatValue = String(value).replace(/\D/g, '');
    const tamanho = formatValue.length;

    if (tamanho === 10) {
      return `(${formatValue.substring(0, 2)}) ${formatValue.substring(2, 6)}-${formatValue.substring(6, 10)}`;

    } else if (tamanho === 11) {

      return `(${formatValue.substring(0, 2)}) ${formatValue.substring(2, 7)}-${formatValue.substring(7, 11)}`;
    }

    return formatValue;
  }

}
