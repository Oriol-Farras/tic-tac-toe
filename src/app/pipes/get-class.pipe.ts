import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getClass',
    standalone: true
})
export class GetClassPipe implements PipeTransform {
    transform(value: string | null | undefined): string {
        if (!value) return '';
        return value === 'X' ? 'style-x' : 'style-o';
    }
}