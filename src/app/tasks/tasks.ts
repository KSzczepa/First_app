import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Task } from './task/task';
import { NewTaskTemplate } from './new-task-template/new-task-template';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTaskTemplate],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class TasksComponent {  
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  @Output() task!: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string; 
  };
  showNewTaskForm = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the core concepts of Angular framework and important features.',
      dueDate: '2026-12-12'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build an App',
      summary: 'Apply Angular knowledge by building a real-world application from scratch.',
      dueDate: '2026-11-30'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Test and Deploy',
      summary: 'Learn how to test Angular applications and deploy them to production environments.',
      dueDate: '2027-01-15'
    }
  ];

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.userId);
  } 

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask() {
    this.showNewTaskForm = true;
  }
}
