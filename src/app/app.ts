import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
