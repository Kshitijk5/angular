import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormComponent } from '../components/form/form.component';
import { BoardComponent } from '../components/board/board.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FormComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
}
