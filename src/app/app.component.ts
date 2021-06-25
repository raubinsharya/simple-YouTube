import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private employeeService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  title = "angular-test";
  public _name: string = "Raubinsh arya";
  private _email: string;
  public isShowing: boolean = false;
  public color: string = "yellow";
  colors: Array<string> = ["red", "white", "orange"];

  public value: string = "hello";
  public num: number = 32.21525;
  public date: Date = new Date();
  public money: string = "55";

  public employees: Array<any>;
  public errorMsg: any;

  //public parentName: string = "raubinsh arya lives in longowal";

  get getName() {
    return this._name;
  }

  set email(value: string) {
    this._email = value;
    if (value === "abc") alert(value);
  }

  get email(): string {
    return this._email;
  }
  public textClass: string = "text-success";
  public hasError: boolean = true;
  styleClass: Object = {
    "text-danger": true,
    "text-italic": true
  };

  navigateRelative() {
    this.router.navigate(["/login/10"], {
      relativeTo: this.route
    });
  }

  ngOnInit() {
    this.employeeService.getUser().subscribe(
      data => (this.employees = data),
      error => (this.errorMsg = error)
    );
  }
}
