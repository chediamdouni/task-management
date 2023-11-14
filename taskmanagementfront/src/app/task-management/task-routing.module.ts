import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

const routes: Routes = [
    {path : '' , component : ListTaskComponent},
    {path :'add' , component : AddTaskComponent},
    {path :'update/:idT' , component : UpdateTaskComponent},
    {path :'delete/:idT' , component : DeleteTaskComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class GestionTaskRouting {
}
