import { Injectable } from "@angular/core";
import { Task } from "./task";
import { TaskData, FormData } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the core concepts of Angular framework and important features.',
      dueDate: '2026-12-12',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build an App',
      summary: 'Apply Angular knowledge by building a real-world application from scratch.',
      dueDate: '2026-11-30',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Test and Deploy',
      summary: 'Learn how to test Angular applications and deploy them to production environments.',
      dueDate: '2027-01-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(formData: FormData, userId: string) {
    this.tasks.unshift({
      id: 't' + (this.tasks.length + 1),
      userId: userId,
      title: formData.title,
      summary: formData.summary,
      dueDate: formData.dueDate
    });
  }

  removeTask(taskId: string) {
    const index = this.tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(taskId: string) {
    this.removeTask(taskId);
  }
}
