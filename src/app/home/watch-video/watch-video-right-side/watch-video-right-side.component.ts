import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-watch-video-right-side",
  templateUrl: "./watch-video-right-side.component.html",
  styleUrls: ["./watch-video-right-side.component.css"],
})
export class WatchVideoRightSideComponent implements OnInit {
  constructor() {}

  items = Array(20)
    .fill(1)
    .map((item, index) => {
      return {
        title:
          " Tailwind CSS Crash Course. Lockdown video tutorial by Raubinsh Arya. Great Video",
        channel: "Traversy Media",
        views: "65K",
        month: ++index + " months ago",
      };
    });

  ngOnInit() {}
}
