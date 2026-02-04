import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Task } from './task/task';
import { NewTaskTemplate } from './new-task-template/new-task-template';
import { FormData } from './task/task.model';
import { Card } from '../shared/card/card';
import { TasksService } from './task/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTaskTemplate, Card],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Output() task!: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  };
  showNewTaskForm = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.showNewTaskForm = true;
  }

  onCloseAddTask() {
    this.showNewTaskForm = false;
  }

  onAddTask(formData: FormData) {    
    this.taskService.addTask(formData, this.userId);
    this.showNewTaskForm = false;
  }
}
