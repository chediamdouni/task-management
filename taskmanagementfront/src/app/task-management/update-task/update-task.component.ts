import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/task';
import { TaskServiceService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  myId=0;
  myTask!:Task;
  reactiveForm=this.fb.group(
    {
      idT:[''],
      title:[''],
      description:[''],
      priority:[''],
      date:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private taskservice:TaskServiceService ) { }

  ngOnInit(): void {
    this.taskservice.getTaskById(this.AR.snapshot.params["idT"]).subscribe(data=>{
      this.myTask=data;


      this.reactiveForm.patchValue({idT: this.myTask.idT, title:this.myTask.title,description:this.myTask.description,priority:this.myTask.priority, date:this.myTask.date});
      console.log(this.myTask.title)
    });
}
  update(){
    this.taskservice.UpdateTask(this.reactiveForm.value).subscribe(data=>{

      this.R.navigate(['tasks']);
      }
      )
  }
  get idT(){
    return this.reactiveForm.get('idT')
  }
  get title(){
    return this.reactiveForm.get('title');

  }
  get description(){
    return this.reactiveForm.get('description')
  }
  get priority(){
    return this.reactiveForm.get('priority');

  }
  get date(){
    return this.reactiveForm.get('date')
  }
}
