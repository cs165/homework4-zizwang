// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.

class PlayButton {
  constructor() {
    this.click = this.click.bind(this);
    this.playing = true;
    this.btn = document.getElementById("play");
    this.btn = addEventListener('click',this.click);
    this.count = 0;
  }
  click(event){
   // console.log("count = "+this.count);
    this.count++;
    if(this.count%2==0){
      document.getElementById("play").style.backgroundImage = "url(images/pause.png)";
      this.playing = true;
      app.music.audio.play();
    }
    else{
      document.getElementById("play").style.backgroundImage = "url(images/play.png)";
      this.playing = false;
      app.music.audio.pause();
    }
  }
}
