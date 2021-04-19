import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['../../app.component.scss']
})
export class StopComponent implements OnInit {
  @Output() onStopVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  stopVideo() {
    this.onStopVideo.emit();
  }
}
