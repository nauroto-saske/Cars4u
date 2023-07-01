import { Component, OnInit } from '@angular/core';

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
constructor(){

}
ngOnInit(): void {
  
}
}
