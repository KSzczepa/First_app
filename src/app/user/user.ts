import { Component, Input, Output, EventEmitter, output } from '@angular/core';

type User = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {  
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
