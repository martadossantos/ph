let image = document.querySelector('#img');
let imageNo = 0;

function updateImage(imageNo) {
   let image_url = '/assets/images/0'+imageNo+'.jpg';

   image.setAttribute('src', image_url)

}

function step() {
  updateImage(imageNo);
  imageNo++;

  if (imageNo <= 84) {
    window.requestAnimationFrame(step);
  } else {
     imageNo = 1;
     window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);