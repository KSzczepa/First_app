import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {  
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
