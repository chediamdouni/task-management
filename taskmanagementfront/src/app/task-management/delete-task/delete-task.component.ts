import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  taskId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskServiceService,
    private AR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.taskId = +idParam;
    } else {
      this.router.navigate(['/tasks']);
    }
  }
  confirmDelete() {
    this.taskService.deleteTask(this.taskId).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
  cancel() {
    this.router.navigate(['/tasks']);
  }
}
