var menu1 = document.querySelector('.sidebar');
var headbar = document.querySelector('.header-bar');
var menu = document.querySelector('.action1-menu');
var action1 = document.querySelector('.action1');
var menu2 = document.querySelector('.sidebar-1');
var screen = document.querySelector('.screen-sidebar')

// Bar 
headbar.addEventListener('click', function(event) {
  menu1.style.display = (menu1.style.display === 'block') ? 'none' : 'block';
  screen.style.display = (screen.style.display === 'block') ? 'none' : 'block';
  event.stopPropagation();
  menu1.style.width = "200px";
  console.log(menu1.clientWidth);
  listItem.forEach(item => {
      item.classList.toggle('active');
  });
});

// Add click event listener to the document body
document.body.addEventListener('click', function(event) {
  if (!menu1.contains(event.target) && menu1.style.display === 'block') {
      menu1.style.display = 'none';
      screen.style.display = 'none';
      menu1.style.width = "";
      listItem.forEach(item => {
          item.classList.remove('active');
      });
  }
});

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

headbar.addEventListener('click', function(event) {
    menu2.style.display = (menu2.style.display === 'none') ? 'block' : 'none';
    event.stopPropagation();
});

// Video
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