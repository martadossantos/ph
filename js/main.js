let image = document.querySelector('#img');

let delay = 1000;

mouseEntered = false;


image.addEventListener('mouseenter', function() {
   mouseEntered = true
})

image.addEventListener('ontouchstart', function() {
   mouseEntered = true
})

image.addEventListener('mouseleave', function() {
   mouseEntered = false;
   
   setInterval(function() {
      window.requestAnimationFrame(step);
   }, delay)

})

image.addEventListener('ontouchend', function() {
   mouseEntered = false;
   
   setInterval(function() {
      window.requestAnimationFrame(step);
   }, delay)

})


function updateImage() {

   let imageNo = Math.floor(Math.random() * 60) + 1;

   let image_url = '/assets/images/'+imageNo+'.jpg';

   image.setAttribute('src', image_url);

}

function step() {

   if (mouseEntered === false) {

      updateImage();
   }

}

setInterval(function() {
   window.requestAnimationFrame(step);
}, delay)



