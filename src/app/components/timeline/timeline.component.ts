import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerState } from './../../interfaces/player-state';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../../app.component.scss']
})
export class TimelineComponent implements OnInit {
  @Output() onSliderChangeEnd = new EventEmitter();
  state: PlayerState;
  constructor() { }

  ngOnInit(): void {
    console.log(this.state?.currentTime);
  }

  sliderChangeEnd(change) {
    this.onSliderChangeEnd.emit(change);
  }
  
}
