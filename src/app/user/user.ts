import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {  
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  }
}
