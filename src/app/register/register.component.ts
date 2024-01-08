import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router: Router, private fb: FormBuilder,private userService:UserServiceService,private toastr: ToastrService) { }
  register() {
    
    if(this.registerform.valid){
      this.router.navigate(['login']);
      
      this.userService.postData(this.registerform.value).subscribe({
        next:(result:any)=>{
            console.log(result)
            this.toastr.success('Hello world!');
        },
        error:(error:any)=>console.log('Error',error)
      })
    }
    else{
      this.toastr.error('error')
    }
    console.log(this.registerform)
  }
  
  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstname: [null, [Validators.required,Validators.minLength(3)]],
      gender:this.fb.control('',[Validators.required]),
      lastname: [null, [Validators.required,Validators.minLength(3)]],
      mobileno: [null, [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.required,Validators.email]],
      dob:[null,[Validators.required]],
      password: [null, [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",)]]
    })
    
  }


}
