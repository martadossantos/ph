let image = document.querySelector('#img');
let imageNo = 0;

function updateImage(imageNo) {
   let image_url = '/assets/images/0'+imageNo+'.jpg';

   if (image.length > 0) {
      image.setAttribute('src', image_url)
   }
}

function step() {
  updateImage(imageNo);
  imageNo++;
  if (imageNo < 85) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);