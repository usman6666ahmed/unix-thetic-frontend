import { RailsError } from './../../../types/errors';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

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
        'usman',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['usman@gmail.com', [Validators.required, Validators.email]],
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
      .subscribe((res:Response) => {
        console.log(res);
        // console.log(res.headers.get('authorization'));
        const data = (res as any).data
        this.toastr.success('Registered successfully')
        this.router.navigate(['profile', data?.id])
      });
  }
}
