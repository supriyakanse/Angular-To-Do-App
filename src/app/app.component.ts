import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
//   private apiUrl = 'http://localhost:3000';
//   isSee:any;
//   constructor(private http: HttpClient) {}
//    editedTaskData:any;

//   toDo: string[] = [];
//    newTask = "";
//   isEdit:boolean=false;
 
//   ngOnInit(): void {
//     console.log("here")
//     this.http.get(`${this.apiUrl}`).subscribe({
//       next:(data:any)=>{
//         this.toDo=data
//       },
//       error:(err)=>{
//         console.log(err)
//       }
//     })
// }

//   add(newTask: string) {
//     if (newTask == '') {
//       alert("Please enter a task");
//     }
//     else if (newTask.startsWith(" ")) {
//       alert("task cant be blank");
//     }
//     else {
      
//       this.http.post(`${this.apiUrl}`,{ task: newTask.trim() }).subscribe({
//         next:(data:any)=>{
//           console.log(data)
//         },
//         error:(err)=>{
//             console.log(err)
//         }
//       })

//       this.http.get(`${this.apiUrl}`).subscribe({
//         next:(data:any)=>{
//           this.toDo=data
//           console.log(data)
//         },
//         error:(err)=>{
//             console.log(err)
//         }
//       })
//     }
//     this.newTask='';
//   }

 
//   removeSpecific(index:number){
//     const url=`${this.apiUrl}/${index}`;
    
//     this.http.delete(url).subscribe({
//       next:(data:any)=>{
//         this.toDo=data
//         console.log('removed',data)
//       },
//       error:(err)=>{
//         console.log(err)
//       }
//     })
//   }
//   edit(index:number,element:any){
//     this.isEdit=true
//    element.value=this.toDo[index]
  
//   this.editedTaskData = { index: index, newTask: element.value};
//   }
  
//   save(element:any){
//     this.editedTaskData.newTask=element.value
    
//     this.http.put(this.apiUrl,this.editedTaskData).subscribe({
//       next:(data:any)=>{
//         this.toDo[this.editedTaskData.index] = data;
//         element.value=''
//         },
//       error:(err)=>{
//         console.log(err)
//       }
//     })   
//     this.isEdit=false;  
//   }
//   cancelEdit(element:any){
//     this.isEdit=false;
//     element.value=''
//   }

}
