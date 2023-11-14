
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/Models/task';
import { TaskServiceService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task!:Task[];
  constructor(private fb:FormBuilder ,private R:Router,  private Taskservice: TaskServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    title:['',[Validators.required]],
    description:['',[Validators.required]],
    priority:['',[Validators.required]],
    date:['',[Validators.required]]

    });
  Add(){

    this.Taskservice.AddTask(this.reactiveForm.value).subscribe(data =>{
     console.log('add');
     this.R.navigate(['tasks'])

    })
  }

  get idT(){
    return this.reactiveForm.get('idT')
  }
  get title(){
    return this.reactiveForm.get('title');

  }
  get description(){
    return this.reactiveForm.get('description');

  }
  get priority(){
    return this.reactiveForm.get('priority');

  }
  get date(){
    return this.reactiveForm.get('date');

  }

}
