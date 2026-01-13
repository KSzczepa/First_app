import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent {  
  @Input({required: true}) name!: string;


}
