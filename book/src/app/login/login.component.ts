import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:boolean=false;
  data={
  username:'',
  password:'',
  }
  constructor(private service :RegisterService) { }

  ngOnInit(): void {
  }
generatetoken(){
  console.log(this.data);
  this.service.generateToken(this.data).subscribe({
    next: (res:any)=>{
     this.message=true;
      console.log(this.data);
      console.log(" author  login successfully")
      console.log(res.token);
  
      localStorage.setItem("token",res.token)
    
  },
  error: (err:any)=>{
      console.log("author login was unsuccesful")
      console.log(err)
  }
  })
}
}
