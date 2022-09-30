import { RailsError } from './../../../types/errors';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

function randomNumber(min = 1, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  registerForm: any;
  errors: any = null;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [
        `user${randomNumber()}`,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [`user${randomNumber()}@example.com`, [Validators.required]],
      password: ['123123', [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    this.errors = null;
    const { username, email, password } = this.registerForm.value;
    this.http
      .register(username, email, password)
      .pipe(
        catchError((response: any) => {
          const railsErr: RailsError = response;
          this.errors = railsErr.error.errors;
          return response;
        })
      )
      .subscribe((res:any) => {
        const id:number = res.body?.data?.id;
        this.toastr.success('Registered successfully')
        this.router.navigate(['profile', id])
      });
  }
}
