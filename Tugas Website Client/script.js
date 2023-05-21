document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
  
    
    if (audio && audio.play) {
      
      if (audio.paused) {
        audio.play();
      }
  
      window.addEventListener("beforeunload", function() {
        audio.pause();
        audio.removeAttribute("autoplay");
        audio.removeAttribute("loop");
      });
    }
  });
  