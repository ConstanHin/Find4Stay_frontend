
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  success: boolean = false;
  fail: boolean = false;
  submited: boolean = false;
  loading: boolean = false;

  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
    ) { }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/'])
    }
  }

  /**
   * On submit click atempt login
   */
  onSubmit() {
    this.loading = true;
    const username = this.loginFormGroup.value.username;
    const password = this.loginFormGroup.value.password;

    const observable = this.authService.login(username, password)

    observable.subscribe({
      next: (v) => {
        this.success = true;
        this.loading = false;

        // Set logged in status
        this.authService.setAuthenticated(true);
        this.authService.setUsername(username);

        // Show success message for 2.5sec
        const contador = timer(2500);
        // Make submit button available again
        contador.subscribe(() => {this.success = false; this.submited = false})

        // Save login in sessionStorage
        window.sessionStorage.setItem("auth-token", v.token)

        // Save login username in sessionStorage
        window.sessionStorage.setItem("auth-username", username)

        // Redirect to home (TODO: show a successfuly message )
        this.router.navigate(['/']);
      },
      error: (e) => {
        this.fail = true;
        this.loading = false;

        // Show fail message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.fail = false)

        // Make submit button available again
        this.submited = false
        console.log(e)
      },
      complete: () => {
        console.log("complete!")
      }

    })
  }
}
