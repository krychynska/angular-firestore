import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showForm = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<any>,
              private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.createLoginForm();
  }

  private createLoginForm() {
    return this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }


  onSubmit() {
    this.loginService.doLogin(this.loginForm.value);
    this.dialogRef.close();
  }
}
