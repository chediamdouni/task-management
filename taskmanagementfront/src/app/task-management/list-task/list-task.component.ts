import { Component } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { TaskServiceService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  list:Task[]=[]
  constructor(private taskservice : TaskServiceService) { }

  ngOnInit(): void {
    this.getListTask();
   console.log(this.list)
  }
  getListTask(){
    this.taskservice.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);

    }
    )

  }
  DeleteTask(id:any){
    this.taskservice.deleteTask(Number(id)).subscribe( () =>this.getListTask() );
  }

}
