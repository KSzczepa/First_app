import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task-template',
  imports: [FormsModule],
  templateUrl: './new-task-template.html',
  styleUrl: './new-task-template.css',
})
export class NewTaskTemplate {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  isOpen = true;
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';
  submitted: boolean = false;

  private tasksService: TasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onSubmit(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);

    console.log(this.enteredTitle);
    this.resetForm();
    this.submitted = false;
    this.close.emit();
  }

  resetForm() {
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }

}
