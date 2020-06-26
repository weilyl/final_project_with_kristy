//Create a class mood so video will play depending if happy or sad object, which has the this.vid value when making the objects
class Mood {
  constructor(mood, vid) {
    // this.name = name
    this.mood = mood
    this.vid = vid
  }
  //function for playing video:
  videoPlay() {
    //this.vid.loop = true;
    this.vid.play();
    this.vid.load();
    this.vid.autoplay();
  }
}