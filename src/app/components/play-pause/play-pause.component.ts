import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-pause',
  templateUrl: './play-pause.component.html',
  styleUrls: ['./play-pause.component.scss']
})
export class PlayPauseComponent implements OnInit {
  state;
  constructor() { }

  ngOnInit(): void {
  }

  play() {
    console.log("play");
  }

  pause() {
    console.log("pause");
  }

}
