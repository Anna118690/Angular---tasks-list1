import { Component } from '@angular/core';
import  {Task} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  config: { [ key : string]: string |Date } = null;
  tasks: Task[] = [
    {
    name: 'English learning one hour',
    deadline: '2020-06-07',
    done: false,
    },
    {
      name: 'Dutch learning one hour',
      deadline: '2020-06-08',
      done: false,
      },
      {
        name: 'French learning one hour',
        deadline: '2020-06-09',
        done: false,
      }

  ]
  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań Anna',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date(),
      };
    }, 500);  }


    clearTasks() {
      this.tasks = [];
    }



    createTask(name: string, deadline: string) {
      const task: Task = {
        name,
        deadline, 
        done: false,
      };
      this.tasks.push(task);
    }






}
