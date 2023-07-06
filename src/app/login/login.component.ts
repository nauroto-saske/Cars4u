import { Component, OnInit } from '@angular/core';
import RegisterService from '../Models/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  EmailAddress: any;
  Pwd: any;
  chkremember: any;
  resultOne: any;
constructor(  private registerService: RegisterService){

}
ngOnInit(): void {
  
}
onSubmit(){
  var result={
    Log_Uname: this.EmailAddress,
    
    Log_Pwd: this.Pwd
  };
    this.registerService.login(result).subscribe((Response: any)=>{
       this.resultOne=Response;
    })

}
}
