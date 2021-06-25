import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { EmailValidator } from "../validators/email.validator";

@Component({
  selector: "app-login-child",
  templateUrl: "./login-child.component.html",
  styleUrls: ["./login-child.component.css"]
})
export class LoginChildComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  public technologies: Array<string> = ["Angular", "React", "Vue", "Vanilla"];
  public errors: Object;
  public response: Object;
  public notification: number = 10;

  public userForm = this.fb.group({
    email: [
      "",
      [
        Validators.required,
        EmailValidator,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ]
    ],
    password: [
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
    ],
    username: [""],
    technology: [""],
    developer: [""],
    condition: [false]
  });

  get email() {
    return this.userForm.get("email");
  }

  get password() {
    return this.userForm.get("password");
  }
  get username() {
    return this.userForm.get("password");
  }
  get technology() {
    return this.userForm.get("password");
  }
  get developer() {
    return this.userForm.get("password");
  }

  handleSubmit() {
    if (!this.userForm.valid) return this.userForm.markAllAsTouched();
    this.apiService.login(this.userForm.value).subscribe(
      res => {
        this.errors = null;
        this.response = res.message;
      },
      error => {
        this.errors = error;
      }
    );
  }

  ngOnInit() {}
}
