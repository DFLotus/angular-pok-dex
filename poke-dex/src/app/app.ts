import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopSection } from './features/main/components/top-section/top-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'poke-dex';
}
