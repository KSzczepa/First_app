import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../task/task.model';

@Component({
  selector: 'app-new-task-template',
  imports: [FormsModule],
  templateUrl: './new-task-template.html',
  styleUrl: './new-task-template.css',
})
export class NewTaskTemplate {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<FormData>();
  isOpen = true;
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';
  submitted: boolean = false;

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
    console.log(this.enteredTitle);
    this.resetForm();
    this.submitted = false;
    this.cancel.emit();
  }

  resetForm() {
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }

}
