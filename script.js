// NOTE: You may, but do not have to, modify this file, such as to create other
// classes or to call methods on `App`. You may not add any global state
// variables.
const app = new App();
var songURL = new Array(10);
function onResponse (res){
    return res.text();
}
function onDataReady(text){
    var urls = text.split('\n');
    let j = 0;
 //   console.log(urls);
    for(i=0;i<6;i++){
        //取title
        let opt = document.createElement('option');
        opt.text = urls[i*5 + 3].split(':')[1].split('"')[1];
        s.add(opt);

        //取URL
        songURL[i] = urls[i*5 + 2].split(' ')[5].split('"')[1];
    }
}
