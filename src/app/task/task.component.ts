import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: string = '';
  @Output() removeTask = new EventEmitter<void>();

  onRemoveTask() {
    this.removeTask.emit();
  }
}
