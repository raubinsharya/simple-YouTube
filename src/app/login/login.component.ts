import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { ApiService } from "../services/api.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private _apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public params: number;
  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.params = parseInt(params.get("id"));
    // });
  }
}
