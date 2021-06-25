import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  items = Array(100)
    .fill(true)
    .map((item, id) => {
      return {
        profile:
          "https://yt3.ggpht.com/a-/AOh14Gh6t6BC1-U9ZY61q3MIjd8jLRpFU8yORkb4og=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiloQgJ1uGLCEvgCou5nkVN98IkX8YgvEJ5EfS9gReHfUDYjSh",
        id: id
      };
    });

  constructor() {}

  ngOnInit() {}
}
