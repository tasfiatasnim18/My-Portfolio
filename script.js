let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay: 200, origin: 'left'});
sr.reveal('.navbar',{delay: 400, origin: 'top'});
sr.reveal('.menu-btn',{delay: 520, origin: 'right'});

sr.reveal('.home-text span',{delay: 600, origin: 'top'});
sr.reveal('.home-text h1',{delay: 680, origin: 'left'});
sr.reveal('.home-text p',{delay: 750, origin: 'right'});
sr.reveal('.main-btn',{delay: 860, origin: 'left'});

sr.reveal('.share',{delay: 950, origin: 'bottom'});

sr.reveal('.home-img',{delay: 1000, origin: 'right'});



sr.reveal('.about-col-1',{delay: 1200, origin: 'left'});
sr.reveal('.about-text h2',{delay: 680, origin: 'right'});
sr.reveal('.about-text h5',{delay: 680, origin: 'left'});
sr.reveal('.about-text p',{delay: 750, origin: 'right'});
sr.reveal('.short-skills',{delay: 860, origin: 'top'});
sr.reveal('#short-skills1',{delay: 860, origin: 'bottom'});
sr.reveal('.msg-btn',{delay: 860, origin: 'left'});



sr.reveal('.skills h2',{delay: 680, origin: 'left'});
sr.reveal('.sbox1',{delay: 860, origin: 'left'});
sr.reveal('.sbox2',{delay: 860, origin: 'right'});


sr.reveal('.title h2',{delay: 680, origin: 'right'});
sr.reveal('.card',{delay: 860, origin: 'left'});
sr.reveal('#card2',{delay: 860, origin: 'right'});


sr.reveal('.contact h2',{delay: 680, origin: 'left'});
sr.reveal('.contact p',{delay: 750, origin: 'right'});
sr.reveal('.mail',{delay: 860, origin: 'left'});
sr.reveal('.in',{delay: 860, origin: 'right'});
sr.reveal('footer p',{delay: 950, origin: 'bottom'});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}
