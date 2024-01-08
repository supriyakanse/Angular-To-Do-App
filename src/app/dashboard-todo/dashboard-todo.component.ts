
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard-todo',
  templateUrl: './dashboard-todo.component.html',
  styleUrls: ['./dashboard-todo.component.css']
})
export class DashboardTODOComponent {
  isSee:any;
  constructor(private userService:UserServiceService,private toastr: ToastrService) {}
   editedTaskData:any;

  toDo: string[] = [];
   newTask = "";
  isEdit:boolean=false;
 
  ngOnInit(): void {
    
    this.userService.getTask().subscribe({
      next:(data:any)=>{
        this.toDo=data
      },
      error:(err:any)=>{
        this.toastr.error('Something went wrong!')
        console.log(err)
      }
    })
}

  add(newTask: string) {
    if (newTask == '') {
      this.toastr.warning('Please enter a task')
    }
    else if (newTask.startsWith(" ")) {
      this.toastr.warning('Task cannot be blank')
    }
    else {
      
      this.userService.addTask( {task: newTask.trim()}).subscribe({
        next:(data:any)=>{
          this.toastr.success('Task Added !')
          this.toDo=data
        },
        error:(err:any)=>{
          this.toastr.error('Something went wrong !')
            console.log(err)
        }
      })

    }
    this.newTask='';
  }

 
  removeSpecific(index:number){    
    this.userService.removeTask(index).subscribe({
      next:(data:any)=>{
        this.toastr.warning('Task removed')
        this.toDo=data
        
      },
      error:(err:any)=>{
        this.toastr.error('Something went wrong ')
        console.log(err)
      }
    })
  }
  edit(index:number,element:any){
    this.isEdit=true
   element.value=this.toDo[index]
  this.toastr.info('Edit task in textbox ')
  this.editedTaskData = { index: index, newTask: element.value};
  }
  
  save(element:any){
    this.editedTaskData.newTask=element.value
    
    this.userService.editTask(this.editedTaskData).subscribe({
      next:(data:any)=>{
        this.toastr.success('Task edited')
        this.toDo[this.editedTaskData.index] = data;
        element.value=''
        },
      error:(err:any)=>{
        this.toastr.error('Something went wrong !')
        console.log(err)
      }
    })   
    this.isEdit=false;  
  }
  cancelEdit(element:any){
    this.isEdit=false;
    element.value=''
  }
}
