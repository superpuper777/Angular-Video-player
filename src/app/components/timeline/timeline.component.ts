import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../../app.component.scss']
})
export class TimelineComponent implements OnInit {
  @Output() onSliderChangeEnd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sliderChangeEnd(change) {
    this.onSliderChangeEnd.emit(change);
  }
  
}
