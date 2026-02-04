import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskData } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskData;
  @Output() complete = new EventEmitter<string>();

  private TasksService: TasksService = inject(TasksService);

  onCompleteTask() {
    this.TasksService.completeTask(this.task.id);
  }
}
