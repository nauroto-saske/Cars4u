import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Register from './register';
import { Observable } from 'rxjs';


@Injectable()
export default class RegisterService {
  public API = 'http://localhost:8080/api';
  public SUGARLEVELS_API = `${this.API}/sugarlevels`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Register>> {
    return this.http.get<Array<Register>>(this.SUGARLEVELS_API);
  }

  get(id: string) {
    return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
  }

  save(register: any) {
    let result: any;    
     return this.http.post(this.API+'/Registers/PostRegister', register)        
  }

  login(login: any) {
    let result: any;
    
     return this.http.post(this.API+'/Login/LoginDetail', login)
     
   
  }

  remove(id: number) {
    return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
  }
}