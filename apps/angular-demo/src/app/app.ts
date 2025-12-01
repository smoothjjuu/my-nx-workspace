import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// importing the component from the library
import { Hero } from '@angular-demo/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo';
}