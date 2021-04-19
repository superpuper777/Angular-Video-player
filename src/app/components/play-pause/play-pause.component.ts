import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-play-pause',
  templateUrl: './play-pause.component.html',
  styleUrls: ['../../app.component.scss']
})
export class PlayPauseComponent implements OnInit {
  @Input() playpause: string;
  @Output() onToggledVideo = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleVideo() {
    this.onToggledVideo.emit();
  }
}
