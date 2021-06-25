import { Component, OnInit } from "@angular/core";
import { ScreenBreakpointService } from "src/app/services/breakpoint.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  rows = [
    "https://i.ytimg.com/vi/QRIZkK4j4cE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/ALWfqj3q8gA/maxresdefault.jpg",
    "https://i.ytimg.com/vi/cGCCrbsiMl4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Y8olOQ3GgAA/maxresdefault.jpg",
    "https://i.ytimg.com/vi/ReE87Wl6c4I/maxresdefault.jpg",
    "https://i.ytimg.com/vi/xxjSnlRd3os/maxresdefault.jpg",
    "https://i.ytimg.com/vi/a13dfZitV1U/maxresdefault.jpg",
    "https://s1.dmcdn.net/v/N9AjK1QhC3HolpuVA/x720",
    "https://i.ytimg.com/vi/Uby_wyOoBQ4/maxresdefault.jpg"
  ];

  constructor(public breakPoint: ScreenBreakpointService) {}

  ngOnInit() {}
}
