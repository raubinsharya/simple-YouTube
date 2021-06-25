import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.css"],
})
export class TrendingComponent implements OnInit {
  route: any;
  constructor(private activatedRoute: Router) {
    this.route = this.activatedRoute.url;
  }

  ngOnInit() {}
}
