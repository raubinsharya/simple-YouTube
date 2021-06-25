import { Component, OnInit, OnDestroy } from "@angular/core";
import { VgAPI } from "videogular2/compiled/core";

import { SideNavService } from "../../services/side-nav.service";

@Component({
  selector: "app-watch-video",
  templateUrl: "./watch-video.component.html",
  styleUrls: ["./watch-video.component.css"]
})
export class WatchVideoComponent implements OnInit, OnDestroy {
  preload: string = "auto";
  api: VgAPI;

  constructor(private navService: SideNavService) {
    navService.closeNav();
    navService.setWatch(true);
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.ended.subscribe(() => {
      this.api.getDefaultMedia().currentTime = 0;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.navService.setWatch(false);
  }
}
