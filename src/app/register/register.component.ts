import { Component, OnInit } from '@angular/core';
import RegisterService from '../Models/register.service';
import Register from '../Models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  username: any;
  EmailAddress: any;
  phone: any;
  password: any;
  chkprivacy: any;
  chkvendor: any;
  chkadmin: any;
  register: any | undefined;
constructor(
  private registerService: RegisterService
  ){

}
ngOnInit(): void {
  // this.registerService.getAll().subscribe(data => {
  //   this.register = data;
  // });

 
}
onSubmit(){
    var paramdata={
      
  Reg_Uname:this.username ,
  Reg_Email: this.EmailAddress,
  Reg_Password:this.phone ,
  Reg_VendANDAdmin:this.password ,
  Reg_Policy:this.chkprivacy ,
  Reg_chkvendor:this.chkvendor,
  Reg_chkadmin:this.chkadmin
    };
 this.registerService.save(paramdata).subscribe((response: any)=>{

 });  
}
}
