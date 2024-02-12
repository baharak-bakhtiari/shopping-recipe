import { Component } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  isLogin = true;
  isLoading = false;
  error = null;
  authForm!: FormGroup;

  constructor(private authService: AuthService) {

  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLogin) {

    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        }, errorRes => {
          console.log(errorRes);
          this.error = errorRes;
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
