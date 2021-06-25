import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  selector: "app-main"
})
export class MainComponent implements OnInit {
  rows: Array<any>;
  public text =
    "Central Stags V Chennai Super Kings Highlists:Airtel Clt20 News";
  constructor() {
    this.rows = [
      {
        thumbnail: "https://i.ytimg.com/vi/QRIZkK4j4cE/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners tune kahe breakup kar liya",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/ALWfqj3q8gA/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/cGCCrbsiMl4/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Y8olOQ3GgAA/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/ReE87Wl6c4I/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/xxjSnlRd3os/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/a13dfZitV1U/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://s1.dmcdn.net/v/N9AjK1QhC3HolpuVA/x720",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Uby_wyOoBQ4/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/9FG5sLutLYM/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://img.youtube.com/vi/qnfEBjnX8GM/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/-K2Lo5RojBE/maxresdefault.jpg",
        profile:
          "https://yt3.ggpht.com/a/AGF-l7_fltNifNd4c9EQU-eBrh9ZbZwLxkj39Zjuug=s288-c-k-c0xffffffff-no-rj-mo",
        text: "Angular 8 Tutorials for Beginners",
        channel: "Traversy Media",
        views: "2M",
        old: "1 year",
        time: "2:47:32"
      },
    ];
  }

  ngOnInit() {}
}
