import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: string[] = [];

  constructor() {}

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove the task at the specified index
  }
}
