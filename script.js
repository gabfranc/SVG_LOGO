document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('myAudio');
  const playPauseCheckbox = document.getElementById('playPauseCheckbox');

  playPauseCheckbox.addEventListener('change', function () {
      if (playPauseCheckbox.checked) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});
alert("HELLO!!!🥰🥰🥰");

document.getElementById("flickeringLogo").addEventListener("mouseenter", function(){
  this.style.animation = "none"; //flicker animation pauses when hovered.
});

document.getElementById("flickeringLogo").addEventListener("mouseleave", function(){
  this.style.animation = "flicker 0.5s infinite"; // Flicker animation on Logo will continue.
})
