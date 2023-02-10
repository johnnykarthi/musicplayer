let song = document.querySelector('#song');
let play = document.getElementById('playc');
let playc = document.getElementById('play');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let songName = document.getElementById('songName');
let Artist = document.getElementById('Artist');
let totalDur = document.querySelector('.TotalDuration');
let ssmin = document.querySelector('.smin');
let sss = document.querySelector('.ssec');
let range = document.querySelector('#range');
let shuffle = document.querySelector('#shuffle');
let repeat = document.querySelector('#repeat');
let img = document.querySelector('#pic');
let shuf = false;
let rept = 0;
let timer;
let x;
let min;
let sec;
let smin = 0;
let ssec = 0;
let songList = ['Ranjithame', 'Thee Thalapathy', 'Soul Of Varisu', 'Jimikki Ponnu', 'Vaa Thalaivaa', 'Celebration Of Varisu'];
let artistList = ['Vijay and M.M. Manasi', 'Silambarasan TR', 'K. S. Chithra', 'Anirudh Ravichander', 'Shankar Mahadevan', 'Thaman S']
let i = 0;
let n = songList.length;
song.setAttribute('src', 'music/' + songList[i] + '.mp3');
img.setAttribute('src','img/'+i+'.jpg');
songName.innerHTML = songList[i];
Artist.innerHTML = artistList[i];


playc.addEventListener('click', playPause);
next.addEventListener('click', songNext);
prev.addEventListener('click', songPrev);
shuffle.addEventListener('click', shuffleMusic);

repeat.addEventListener('click', repeatSong);


setTimeout(() => {
    x = Math.floor(song.duration);
    range.max = x;
    range.value = 0;
    min = Math.floor(x / 60);
    sec = Math.floor(x % 60 == 0 ? 0 : x % 60);

    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    totalDur.innerHTML = min + ':' + sec;
}, 300)
function update() {
    setTimeout(() => {
        x = Math.floor(song.duration);
        range.max = x;
        range.value = 0;
        min = Math.floor(x / 60);
        sec = Math.floor(x % 60 == 0 ? 0 : x % 60);

        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        totalDur.innerHTML = min + ':' + sec;
    }, 300)
}


setInterval(() => {
    range.value = song.currentTime;
    if (song.currentTime == song.duration) {
        songNext();
    }
    smin = Math.floor(song.currentTime / 60);
    ssec = Math.floor(song.currentTime % 60);
    if (smin < 10) {
        ssmin.innerHTML = '0' + smin;
    }
    else {
        ssmin.innerHTML = smin;
    }
    if (ssec < 10) {
        sss.innerHTML = '0' + ssec;
    }
    else {
        sss.innerHTML = ssec;
    }
}, 300);


range.addEventListener('change', () => {
    song.currentTime = range.value;
})

function repeatSong() {
    if (rept == 0) {
        repeat.classList.add('act');
        rept = 1;
    }
    else if (rept == 1) {
        repeat.classList.add('bi-repeat-1');
        repeat.classList.remove('bi-repeat');
        rept = 2;
    }
    else {
        repeat.classList.remove('bi-repeat-1');
        repeat.classList.add('bi-repeat');
        repeat.classList.remove('act');
        rept = 0;
    }
}


function shuffleMusic() {
    if (shuf == false) {
        shuffle.classList.add('act');
        shuf = true;
    }
    else {
        shuffle.classList.remove('act');
        shuf = false;
    }
}


function songNext() {


    if (rept != 2) {

        if (shuf == true) {
            i = Math.floor(Math.random() * n);
        }
        else {
            i++;
            i = i % n;
        }
    }
    songChange();
    song.play();
    if (play.classList.contains('fa-play')) {
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}

function songPrev() {
    if (rept != 2) {

        if (shuf == true) {
            i = Math.floor(Math.random() * n);
        }
        else {
            i--;
            if (i < 0) {
                i = n - 1;
            }
        }
    }

    songChange();
    song.play();



    if (play.classList.contains('fa-play')) {
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }



}


function songChange() {
    song.setAttribute('src', 'music/' + songList[i] + '.mp3');
    songName.innerHTML = songList[i];
    Artist.innerHTML = artistList[i];
    img.setAttribute('src','img/'+i+'.jpg');
    update();
}


function playPause() {
    if (play.classList.contains('fa-play')) {
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
    else {
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
}