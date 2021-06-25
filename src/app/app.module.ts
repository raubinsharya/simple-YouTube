import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";

import { VgOverlayPlayModule } from "videogular2/compiled/overlay-play";
import { VgBufferingModule } from "videogular2/compiled/buffering";
import { VgControlsModule } from "videogular2/compiled/controls";
import { VgCoreModule } from "videogular2/compiled/core";

import { WatchVideoRightSideComponent } from "./home/watch-video/watch-video-right-side/watch-video-right-side.component";
import { NotificationComponent } from "./components/home/app-bar/notification/notification.component";
import { WatchVideoComponent } from "./home/watch-video/watch-video.component";
import { TokenIntercepterService } from "./services/token-intercepter.service";
import { CarouselComponent } from "./Components/carousel/carousel.component";
import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { ScreenBreakpointService } from "./services/breakpoint.service";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { SideNavService } from "./services/side-nav.service";
import { MaterialModule } from "./material/material.module";
import { ApiService } from "./services/api.service";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";
import { ChannelDescriptionComponent } from "./home/channel-description/channel-description.component";
import { HomeComponentChannelDescription } from "./home/channel-description/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RoutingComponents,
    WatchVideoComponent,
    NotificationComponent,
    ChannelDescriptionComponent,
    WatchVideoRightSideComponent,
    HomeComponentChannelDescription,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    LayoutModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatCarouselModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    TokenIntercepterService,
    ScreenBreakpointService,
    SideNavService,
    ApiService,
    AuthGuard,
    {
      useClass: TokenIntercepterService,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
})
export class AppModule {}
