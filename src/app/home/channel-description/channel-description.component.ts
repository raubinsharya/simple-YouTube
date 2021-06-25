import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-channel-description",
  templateUrl: "./channel-description.component.html",
  styleUrls: ["./channel-description.component.css"],
})
export class ChannelDescriptionComponent implements OnInit {
  channelName: string;
  navLinks = [
    { location: "featured", label: "HOME" },
    { location: "videos", label: "VIDEOS" },
    { location: `playlists`, label: "PLAYLISTS" },
    { location: `channel`, label: "CHANNELS" },
    { location: `about`, label: "ABOUT" },
  ];
  activeLink: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.channelName = param.get("channel");
      this.activeLink = this.navLinks.filter(
        (item) =>
          item.location == this.activatedRoute.firstChild.snapshot.url[0].path
      )[0];
      document.title = `${this.channelName}-YouTube`;
    });
  }
}
