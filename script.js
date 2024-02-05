const controlBtn = document.getElementById('controlBtn')
const video = document.querySelector('.mainVid')
const preloader = document.querySelector('.preloader-img')


controlBtn.addEventListener("click", function() {
  video.play()
})


window.addEventListener('load', function(){
  preloader.classList.add('hide-img')
})