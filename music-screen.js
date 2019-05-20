// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.audio = new AudioPlayer();
    this.gif = new GifDisplay();
    this.show = this.show.bind(this);
  }
  show(){
    this.containerElement.classList.remove('inactive');
    document.getElementById('background').classList.remove('inactive');
    this.playbtn = new PlayButton(); 
    this.audio.setSong(songURL[s.selectedIndex]);
    this.audio.play();
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
}
