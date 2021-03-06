import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { VideoService } from './../../services/video.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../../app.component.scss']
})
export class PlayerComponent implements OnInit {
  videoSource: string = 'https://www.youtube.com/embed/VeDh-lBCgh0';
  currentPlaypause = 'play';
  @ViewChild('videoplayer', { static: true }) private videoplayer: ElementRef;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  
  }

  get video(): HTMLVideoElement {
    return this.videoplayer.nativeElement;
  }

  onToggledVideo() {
    if ( this.video.paused ) {
      this.video.play();
      this.currentPlaypause = 'pause';
    }
    else{
      this.video.pause();
      this.currentPlaypause = 'play';
    }
  }

  onStopVideo() {
    this.videoService.stop(this.video);
  }

  // onSliderChangeEnd(change) {
    
  // }
}
