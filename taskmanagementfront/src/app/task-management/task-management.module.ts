import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TaskManagementModule { }
