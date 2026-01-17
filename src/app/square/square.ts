import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetClassPipe } from '../pipes/get-class.pipe';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, GetClassPipe],
  template: `
    <button [ngClass]="value | getClass">{{ value }}</button>
  `,
  styles: [`
    button {
      width: 100%;
      height: 100%;
      font-size: 3rem !important; 
      background: white; 
      border: none;
      cursor: pointer;
    }
    button:hover {
      background: #f0f0f0;
    }
  `]
})
export class SquareComponent {
  @Input() value?: 'X' | 'O';
}