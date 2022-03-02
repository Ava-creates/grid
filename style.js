AOS.init();
$(".grid2").each((index, element) => {
    index += 1; 
    element = $(element);
    element.css("grid-row", index);
    if(index % 2 == 0){
      element.css("grid-column", 1);
    }
    else {
      element.css("grid-column", 2);
    }
  });

var sound = new Howl({
  src: ['sound.mp3']
  autoplay: true,
  loop: true,
  volume: 0.5,
});

sound.play();
  

