var menu1 = document.querySelector('.slidebar');
var headbar = document.querySelector('.header-bar');
const container = document.querySelector(".container");
const listItem = document.querySelectorAll('.list-item');

// Bar 

headbar.addEventListener('click', function(event) {
    menu1.style.display = (menu1.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation();
    menu1.style.width = "200px";
    console.log(menu1.clientWidth);
    if(menu1.clientWidth>180) {
        container.style.marginLeft = "160px";
    }else {
        container.style.marginLeft = "20px";
    }
});

var menu = document.querySelector('.action1-menu');
var action1 = document.querySelector('.action1');
action1.addEventListener('click', function(event) {
menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
event.stopPropagation();
});
document.addEventListener('click', function() {
menu.style.display = 'none';
});
////
function changeText() {
var element = document.getElementById("textToChange");
if (element.innerHTML === "Chế độ hạn chế: Đang bật") {
    element.innerHTML = "Chế độ hạn chế: Đã tắt";
}   else {
    element.innerHTML = "Chế độ hạn chế: Đang bật";
    }
}
//
var menu2 = document.querySelector('.slidebar-1');
var headbar = document.querySelector('.header-bar');
headbar.addEventListener('click', function(event) {
    menu2.style.display = (menu2.style.display === 'none') ? 'block' : 'none';
    event.stopPropagation();
});
//video
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".video");

  videos.forEach(function(video) {
    video.currentTime =10;
    video.addEventListener("mouseenter", function () {

      videos.forEach(function(otherVideo) {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 10;
          otherVideo.muted = true;
        }
      });
      video.play().then(() => {
        // video.muted = false;
      });
    });

    video.addEventListener("mouseleave", function () {
      video.pause();
      video.currentTime = 10;
      video.muted = true;
    });
  });
});

// clicked 

document.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.container3-item');
  var button = document.getElementById('container3-item');
  button.classList.toggle('clicked');

  items.forEach(function(item) {
      item.addEventListener('click', function() {
          items.forEach(function(innerItem) {
              innerItem.classList.remove('clicked');
          });
          item.classList.add('clicked');
      });
  });
});