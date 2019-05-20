// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
var s = document.getElementById('song-selector');
var t = document.getElementById('query-input');
var e = document.getElementById('error');
var theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;

    // song
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
      .then(onResponse)
      .then(onDataReady);

    //theme
    
    t.value = theme[Math.floor(Math.random()*10)];

    //submit
    this.goBtn = document.getElementById("go");
    this.goBtn = addEventListener('submit',this.onClick);
  }
  onClick(event){
    event.preventDefault();
    url = "https://api.giphy.com/v1/gifs/search?q="+ t.value +"&api_key=VZ7FFJUrfrJrkWSEGvKsVtBp6wNRiyxZ";
    app.music.gif.fetch_gif(url);
  }
  show(){
    this.containerElement.classList.remove('inactive');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
}
