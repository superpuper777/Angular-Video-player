import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PlayerState } from './../interfaces/player-state';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private stop$ = new Subject();
  private state: PlayerState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: 2,
    currentTime: 2000,
    error: false,
  };
  private stateChange: BehaviorSubject<PlayerState> = new BehaviorSubject(
    this.state
  );

  videoEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
  ];

  constructor() { }

  getState(): Observable<PlayerState> {
    return this.stateChange.asObservable();
  }

  play(video) {
    video.play();
    this.streamObservable(video);
  }

  pause(video) {
    video.pause();
  }

  stop(video) {
    video.pause();
    video.currentTime = 0;
  }

  seekTo(seconds, video){
    video.currentTime = seconds;
  }

  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private streamObservable(video) {
    new Observable(observer => {
      this.play;
      const handler = (event: Event) => {
        this.updateStateEvents(event, video);
        observer.next(event);
      };
      this.addEvents(video, this.videoEvents, handler);
      return () => {
        this.stop;
        this.removeEvents(video, this.videoEvents, handler);
        this.resetState();
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

  private updateStateEvents(event: Event, video): void {
    switch (event.type) {
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = video.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      error: false
    };
  }

}
