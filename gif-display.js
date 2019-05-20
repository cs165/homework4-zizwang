// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
var url;

class GifDisplay {
    constructor(containerElement) {
        // TODO(you): Implement the constructor and add fields as necessary.
        this.g = document.getElementById('music');
        this.bg = document.getElementById('background');
        this.urls_gif = [];
        this.containerElement = containerElement;
        this.onDataReady_gif = this.onDataReady_gif.bind(this);
        this.change = this.change.bind(this);
        this.currentIndex = 0;
        this.changeIndex = 0;
    }
    // TODO(you): Add methods as necessary.
    fetch_gif (u) {
        fetch(u).then(this.onResponse_gif)
            .then(this.onDataReady_gif);
    }

    onResponse_gif (res) {
        return res.json();
    }

    onDataReady_gif(json){
        for (const result of json.data)
            this.urls_gif.push(result.images.downsized.url);

        if (this.urls_gif.length < 2) {
            e.classList.remove('inactive');
        }
        else {
            pp.menu.hide();
            app.music.show();
            this.currentIndex = Math.floor(Math.random() * this.urls_gif.length);
            g.style.backgroundImage = "url(" + this.urls_gif[this.currentIndex] + ")";
            this.next_gif();
        }
    }

    next_gif() {
        this.changeIndex =  Math.floor(Math.random() * this.urls_gif.length);

        while(this.changeIndex == this.currentIndex)
            this.changeIndex =  Math.floor(Math.random()*this.urls_gif.length);

        if (this.g.style.zIndex == 2)
            this.bg.style.backgroundImage= "url(" + this.urls_gif[this.changeIndex] + ")";
        else
            this.g.style.backgroundImage= "url(" + this.urls_gif[this.changeIndex] + ")";
    }

    change() {
        if (this.g.style.zIndex == 2) {
            this.bg.style.zIndex = "2";  
            this.g.style.zIndex = "1";  
        }
        else {
            this.g.style.zIndex = "2";   
            this.bg.style.zIndex = "1";  
        }

        this.currentIndex = this.changeIndex;
        this.next_gif();
    } 
}
