import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square';
import { BoardComponent } from './board/board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SquareComponent, BoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tic-tac-toe');
}
