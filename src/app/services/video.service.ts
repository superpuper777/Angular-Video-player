import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private stop$ = new Subject();
  videoEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
  ];

  constructor() { }

  private streamObservable(video) {
    new Observable(observer => {      
      this.play;
      const handler = (event: Event) => {
        observer.next(event);
      };
      this.addEvents(video, this.videoEvents, handler);
      return () => {
        this.stop;
        this.removeEvents(video, this.videoEvents, handler);
      };
    }).pipe(takeUntil(this.stop$));
  }

  private addEvents(obj, events, handler) {
    events.map(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler) {
    events.map(event => {
      obj.removeEventListener(event, handler);
    });
  }

  play(video) {
    video.play();
  }

  pause(video) {
    video.pause();
  }

  stop(video) {
    video.pause();
    video.currentTime = 0;
  }

  seekTo(seconds, video) {
    video.currentTime = seconds;
  }

  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

}
