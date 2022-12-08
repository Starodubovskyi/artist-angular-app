import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LoginResponse} from "../login-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  })

  showFormErrorMessage = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): boolean | void {
    this.showFormErrorMessage = false;

    if (!this.loginForm.valid) {
      this.showFormErrorMessage = true;
      return false;
    }

    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.authService.setSession(response);
        this.router.navigate(['/admin/pages']);
      },
      error: () => {
        this.showFormErrorMessage = true;
      }
    });
  }
}
