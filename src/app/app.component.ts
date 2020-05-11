import { Component } from '@angular/core';
import  {Task} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
   taskName = 'Sugerowane zadanie codzienne: odkurzanie';
   taskDate='';
  config: { [ key : string]: string | Date } = null;

  tasks: Task[] = [
    {
    name: 'English learning one hour',
    deadline: '2020-06-07',
    done: true,
    },
    {
      name: 'Dutch learning one hour',
      deadline: '2020-06-08',
      done: true,
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



    createTask() {
      const task: Task = {
        name: this.taskName,
        deadline: this.taskDate,
        done: false,
      };
      this.tasks.push(task);
      this.taskName = '';
      this.taskDate= '';
    }

    switchEditMode(){
      this.editMode = !this.editMode;
    }


}
