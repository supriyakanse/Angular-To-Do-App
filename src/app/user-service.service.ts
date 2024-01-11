import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }
  validUser:boolean=false;
  url:any='https://todoapapi.onrender.com/';
  postData(data:any){
  return this.http.post(`${this.url}register`,data);
  }

  checkUser(data:any):any{
    return this.http.post(`${this.url}login`,data);
  }

  getTask():any{
    return this.http.get(`${this.url}`)
  }

  addTask(data:any):any{
    return this.http.post(`${this.url}`,data)
  }

  removeTask(index:any):any{
    return this.http.delete(`${this.url}${index}`)
  }

  editTask(data:any):any{
    return this.http.put(`${this.url}`,data);
  }
}


