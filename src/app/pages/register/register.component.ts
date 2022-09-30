import { RailsError } from './../../../types/errors';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpService) {}
  registerForm: any;
  errors:any = {};

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
    const { username, email, password } = this.registerForm.value;
    this.http.register(username, email, password)
    .pipe(
      catchError((err:any) => {
        const error:RailsError = err;
        this.errors = (error.error.errors);
        console.log(this.errors);
        if (this.errors?.username){
          this.errors?.username.forEach((element:string) => {
            console.log(element);
          });
        }
        return err;
      })
    )
    .subscribe((data) => {
      console.log(data);
    });

  }
}
