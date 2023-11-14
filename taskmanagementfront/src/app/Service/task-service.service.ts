import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  urlApi = 'http://localhost:8000/api/tasks';

  Task=[];
  constructor(private http: HttpClient) {}
  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlApi);
  }
  AddTask(Task: Task): Observable<Task> {
    return this.http.post<Task>(this.urlApi, Task);
  }
  deleteTask(id: Number) {
    return this.http.delete(this.urlApi + '/' + id);
  }
  getTaskById(id: Number) {
    return this.http.get<Task>(this.urlApi + '/' + id);
  }
  UpdateTask(Task: Task) {
    alert('success update');
    return this.http.put<Task>(this.urlApi, Task);
  }
}
