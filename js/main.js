let image = document.querySelector('#img');
let imageNo = 0;

mouseEntered = false

image.addEventListener('mouseenter', function() {
   mouseEntered = true
})

image.addEventListener('ontouchstart', function() {
   mouseEntered = true
})

image.addEventListener('mouseleave', function() {
   mouseEntered = false;
   window.requestAnimationFrame(step);
})

image.addEventListener('ontouchend', function() {
   mouseEntered = false;
   window.requestAnimationFrame(step);
})


function updateImage(imageNo) {
   let image_url = '/assets/images/0'+imageNo+'.jpg';

   image.setAttribute('src', image_url)

}

function step() {

   if (mouseEntered === false) {

      updateImage(imageNo);
      imageNo++;
    
      if (imageNo <= 84) {
        window.requestAnimationFrame(step);
      } else {
         imageNo = 1;
         window.requestAnimationFrame(step);
      }

   }

}

window.requestAnimationFrame(step);




