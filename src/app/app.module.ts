import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlayerComponent } from './components/player/player.component';
import { PlayPauseComponent } from './components/play-pause/play-pause.component';
import { StopComponent } from './components/stop/stop.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { VolumeComponent } from './components/volume/volume.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayPauseComponent,
    StopComponent,
    TimelineComponent,
    VolumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
