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
    deadline: '2020-05-07',
    done: true,
    },
    {
      name: 'Dutch learning one hour',
      deadline: '2020-05-08',
      done: true,
      },
      {
        name: 'French learning one hour',
        deadline: '2020-06-09',
        done: false,
      }
      ,
      {
        name: 'Gym 2 hours',
        deadline: '2020-06-10',
        done: false,
      }
      ,
      {
        name: 'Angular 3 hours ',
        deadline: '2020-06-11',
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
    }, 500);
  this.sortTasks();  }


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
      this.sortTasks();
    }

    switchEditMode(){
      this.editMode = !this.editMode;
    }

    markTaskAsDone(task:Task) {
      task.done = true;
      this.sortTasks();
    }

    deleteTask(task:Task) {
      this.tasks=this.tasks.filter(e => e !==task);
      this.sortTasks();
    }

    private sortTasks(){
      this.tasks = this.tasks.sort( (a: Task, b: Task) => 
      a.done === b.done ? 0 : a.done ? 1  : -1
      );

    }


}
