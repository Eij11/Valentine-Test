document.getElementById('yesBtn').addEventListener('click', function() {
    var gifContainer = document.getElementById('gifContainer');
    gifContainer.classList.remove('hidden');

    var ids = ["center-gif-cat", "gif-rnd4", "gif-rnd5", "gif-rnd6", "gif-rnd7", "gif-rnd8", "display-text"];

    ids.forEach(function(id) {
        var image = document.getElementById(id);
        if (image) {
            image.style.display = "none";
        }
    });

    let removeNo = document.getElementById('noBtn')
    removeNo.style.display = "none";

    let displayRemove = document.getElementById("display-text4");
    displayRemove.style.display = "none";

  });

let count = 0;
document.getElementById('noBtn').addEventListener('click', function() {  
    count++;
    if (count == 1){
      // shows and removes the other gif
      var image = document.getElementById("gif-rnd4");
      image.style.display = "inline";

      var image = document.getElementById("center-gif-cat");
      image.style.display = "none";

      // comment
      let display = document.getElementById("display-text");
      display.innerHTML = "Please click yes";
    }

    else if (count == 2){
      // shows and removes the other gif
      var image = document.getElementById("gif-rnd5");
      image.style.display = "inline";

      var image = document.getElementById("gif-rnd4");
      image.style.display = "none";

      // comment
      let display = document.getElementById("display-text1");
      display.innerHTML = "Pindutin mo na :(";

      let displayRemove = document.getElementById("display-text");
      displayRemove.style.display = "none";


      
    }

    else if (count == 3){
      // shows and removes the other gif
      var image = document.getElementById("gif-rnd6");
      image.style.display = "inline";

      var image = document.getElementById("gif-rnd5");
      image.style.display = "none";

      // comment
      let display = document.getElementById("display-text2");
      display.innerHTML = "Ayaw mo po ba :(";
      
      let displayRemove = document.getElementById("display-text1");
      displayRemove.style.display = "none";

    }

    else if (count == 4){
      // shows and removes the other gif
      var image = document.getElementById("gif-rnd7");
      image.style.display = "inline";

      var image = document.getElementById("gif-rnd6");
      image.style.display = "none";

      // comment
      let display = document.getElementById("display-text3");
      display.innerHTML = "Sige na please :(";

      let displayRemove = document.getElementById("display-text2");
      displayRemove.style.display = "none";
    }

    else if (count == 5){
      // shows and removes the other gif
      var image = document.getElementById("gif-rnd8");
      image.style.display = "inline";

      var image = document.getElementById("gif-rnd7");
      image.style.display = "none";

      // comment
      let display = document.getElementById("display-text4");
      display.innerHTML = "Ayan, wala na yung No button";

      let displayRemove = document.getElementById("display-text3");
      displayRemove.style.display = "none";

      let removeNo = document.getElementById('noBtn')
      removeNo.style.display = "none";
    }

});

  // document.getElementById('noBtn').addEventListener('mouseover', function() {
  //   var button = this;
  //   // var maxX = window.innerWidth - button.offsetWidth;
  //   // var maxY = window.innerHeight - button.offsetHeight;
  //   // var newX = Math.floor(Math.random() * maxX);
  //   // var newY = Math.floor(Math.random() * maxY);
  //   button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  //   button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  //   button.style.position = 'absolute';
  //   button.style.left = newX + 'px';
  //   button.style.top = newY + 'px';
  // });