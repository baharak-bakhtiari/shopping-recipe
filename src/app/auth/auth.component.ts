import { Component } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  authForm!: FormGroup;

  constructor() {

  }

  onSubmit(form: Form) {

  }
}
