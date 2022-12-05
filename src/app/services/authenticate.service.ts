import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }
  isAuthenticate:boolean= localStorage.getItem('authenticate') ? true : false;
  login(userName:string, password:string):UserModel | null{
    if(userName == "test" && password == "1234") {
      debugger;
      var model = new UserModel();
      localStorage.setItem('user', JSON.stringify(model));
      localStorage.setItem('authenticate', 'true');
      this.isAuthenticate = true;
      return model;
    };
    return null;
  }
  logout(){
    localStorage.clear();
  }
}
