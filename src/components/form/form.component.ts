import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardService } from '../../service/board.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = '';
  email = '';
  phone = '';
  message = '';
  gender = '';
  checkbox = '';
  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(
      this.name,
      this.email,
      this.phone,
      this.message,
      this.gender,
      this.checkbox
    );
  }

  constructor(private card: BoardService) {}
}
