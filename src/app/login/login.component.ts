import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router, private authService:AuthenticateService, private fb: FormBuilder) { }

  
  form = {} as FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      var result = this.authService.login(this.form.get('userName')?.value, this.form.get('password')?.value);
      if(result)
      {
        this.router.navigate(['/']);
      } else {
        this._snackBar.open("invalid username or password", "close");
      }
    }
  }


}
