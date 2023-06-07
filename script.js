const menuBar = document.querySelector('.menubar');
const navLink = document.getElementById('nav-link');
const mAbout = document.querySelector('.m-about');
const mProjects = document.querySelector('.m-projects');
const mContacts = document.querySelector('.m-contacts');
var loader = document.getElementById('preloader');

window.addEventListener("load", function() {
    loader.style.display = "none";
})

function myFunction(x) {
    x.classList.toggle("change");
}

mAbout.addEventListener('click', function(){
    if (window.screen.width < 639) {
        navLink.style.display = "none";
        document.body.classList.remove("stop-scrolling");
        menuBar.classList.toggle("change");

    }
});

mProjects.addEventListener('click', function(){
    if (window.screen.width < 639) {
        navLink.style.display = "none";
        document.body.classList.remove("stop-scrolling");
        menuBar.classList.toggle("change");
    }
});

mContacts.addEventListener('click', function(){
    if (window.screen.width < 639) {
        navLink.style.display = "none";
        document.body.classList.remove("stop-scrolling");
        menuBar.classList.toggle("change");
    }
});

var previousScrollPosition = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-5em";
    }
    previousScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}



menuBar.addEventListener('click', function() {
    if (navLink.style.display === "flex") {
        navLink.style.display = "none";
        document.body.classList.remove("stop-scrolling");
    } else {
        navLink.style.display = "flex";
        document.body.classList.add("stop-scrolling");
    }

})

window.addEventListener('resize', function() {
    if (this.screen.width > 639) {
        navLink.style.display = "flex";
    } else {
        navLink.style.display = "none";
    }
})

