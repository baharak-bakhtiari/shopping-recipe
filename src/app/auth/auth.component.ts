import { Component } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  isLogin = true;
  authForm!: FormGroup;

  constructor() {

  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: Form) {

  }
}
