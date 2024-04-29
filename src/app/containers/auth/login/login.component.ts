import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/auth/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  myForm!: FormGroup;

  constructor(
    private route: Router,
    private auth: AutenticacionService
  ) {}

  ngOnInit(): void {
      this.initForom();
  }

  initForom(){
    this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login() {
    const username = this.myForm.value.username;
    const password = this.myForm.value.password;
    this.auth.login(username, password).subscribe(
      (res) => {
        if (res) {
          sessionStorage.setItem('accessToken', res.body.accessToken);
          this.route.navigate(['/dashboard']);
        }
      }
    );
  }

}
