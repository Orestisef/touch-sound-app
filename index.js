//after the code loaded the function run
window.addEventListener('load', () => {

  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#f65c78',
    '#ffd271',
    '#fff3af',
    '#c3f584',
    '#ff896b',
    '#ebe6e6'
  ];

  //play sounds
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      //reset the sound
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });


  const createBubbles = (index) => {
    const bubble = document.createElement('div');

    visual.appendChild(bubble);
    
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';

    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    });
  };
});
