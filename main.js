//Variables:
const happyButton = document.querySelector('#happy')
const sadButton = document.querySelector('#sad')
let para = document.querySelector('#timer');
const twenty = document.querySelector('#twenty')
const forty = document.querySelector('#forty')
const sixty = document.querySelector('#sixty')
const video = document.querySelector('#myVideo')
const video2 = document.querySelector('#myVideo2')
const para2 = document.querySelector('.namePara')
const input = document.querySelector('#name-please')
let selectedVideo;

//Mood array for object parameter
const mood = ["happy", "sad"]

//Create objects from class with the mood and the kind of video added 
const happy = new Mood(mood[0], video);
const sad = new Mood(mood[1], video2);

const times = [20, 40, 60]
//Create a countdown timer:
function countdown(totalSeconds){
 let interval = setInterval(function timerDisplay(){
    totalSeconds--;
    if (totalSeconds === -1) {
      clearInterval(interval);
      para.innerHTML = "00:00";
    } else { 
    let seconds = totalSeconds % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    let minutes = Math.floor(totalSeconds/60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      } 
    para.innerHTML = minutes + ":" + seconds
    }
  }, 1000) 
}

function nameDisplay() {
  //display greeting in paragraph
  para2.textContent = `Take this time to breathe, ${input.value}`
  //clear input field
  input.value = ""
}



//Display name and videos, update object with name, play video, and have happy video be chosen, update selectedVideo global variable
happyButton.addEventListener('click', function () {
  video.style.display = "block";
  video2.style.display = "none";
  nameDisplay();
  happy.name = input.value;
  selectedVideo = video;
  happy.videoPlay();
})

//Display name and videos, update object with name, play video, and have sad video be chosen, update selectedVideo global variable
sadButton.addEventListener('click', function () {
  video.style.display = "none";
  video2.style.display = "block";
  nameDisplay()
  sad.name = input.value;
  selectedVideo = video2;
  console.log('selectedVideo:', selectedVideo);
  sad.videoPlay();
})

//Display Time Event Listeners with countdown timer and replay the function 2 times
twenty.addEventListener('click', function () {
  let count = 0;
  countdown(times[0])
  selectedVideo.addEventListener("ended", function() {
    if (count < 1) {
      selectedVideo.play();
      count++;
    }
  })
})
//Display Time Event Listeners with countdown timer and replay the function 4 times
forty.addEventListener('click', function () {
  countdown(times[1])
  let count = 0;
  selectedVideo.addEventListener("ended", function() {
    if (count < 3) {
      selectedVideo.play();
      count++;
    }
  })
})
//Display Time Event Listeners with countdown timer and replay the function 6 times
sixty.addEventListener('click', function () {
  let count = 0;
  countdown(times[2])
  selectedVideo.addEventListener("ended", function() {
    if (count < 5) {
      selectedVideo.play();
      count++;
    }
  })
})
