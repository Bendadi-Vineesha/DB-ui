import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:boolean=false;
  registerForm!:FormGroup
  authorresults:any;
  sumbitted=false;
 data={
  username:'',
  password:'',
}
  constructor(private authorservice:RegisterService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
submit(){
  
this.authorservice.createAuthor(this.data).subscribe({
  next: (res:any)=>{
    this.message=true;
    console.log(this.data);
    console.log("registered author successfully")
    console.log(res);
    this.authorresults=res;
},
error: (err:any)=>{
    console.log("author registration was unsuccesful")
    console.log(err)
}
})

}
}
