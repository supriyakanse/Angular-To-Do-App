import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  isErrorEmail:boolean=false;
  isErrorPassword:boolean=false;
  isUserLoggedIn!:boolean;
  result: any;
  constructor(private router: Router,private fb:FormBuilder,private userService:UserServiceService,private toastr: ToastrService) { }
  login() {
    this.userService.checkUser(this.loginForm.value).subscribe({
      next:(data:any)=>{
        this.router.navigate(['dashboard']);
        this.userService.validUser=data.flag
        
        this.loginForm.reset();
        // return data;
      },
      error:(error:any)=>{
        console.log('error',error)
      this.toastr.error('Something went wrong')
      }
    });
   
  }
  
  ngOnInit():void{
    this.loginForm=this.fb.group({
      email:this.fb.control('',[Validators.required,Validators.email]),
      password:this.fb.control('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",)]),
       })
  }

}
