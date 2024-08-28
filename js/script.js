
// LOGO SLIDER
$(document).ready(function(){
    $('.sliderlogo').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    $('.team-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});

// sidebar

function openNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left='0';
    } else {
        console.error('Sidepanel not found');
     }
}

function closeNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left='-320px';
    } else {
        console.error('Sidepanel not found');
    }
}


/* right: -355px; */

function openRightBar() {
    'use strict';
    const rightsidebar = document.getElementById('right_side');
    if(rightsidebar){
        rightsidebar.style.right='0';
    } else {
        console.error('Right sidebar not found');
    }
}

function closeRightBar() {
    'use strict';
    const rightsidebar = document.getElementById('right_side');
    if(rightsidebar){
        rightsidebar.style.right='-355px';
    } else {
        console.error('Right sidebar not found');
    }
}


const moreMenu = document.querySelector('.plus_collapse');
const collapseMenu = document.querySelector('#pages');

moreMenu.addEventListener('click', function () {
    collapseMenu. classList.toggle('show');
});


// PORTFOLIO SECTION
function openTab(event, name) {
    let i, tabcontent, tablinks;

    // hiding the tab content
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // removing the active class from the tablinks

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // show the selected tab and mark the corresponding tab as selected
    document.getElementById(name).style.display = 'block';
    event.currentTarget.classList.add('active');


}



// FAQ ACCORDION

document.addEventListener('DOMContentLoaded', function () {
    let accordionButtons = document.querySelectorAll(".accordion-button");
    let accordImg = document.querySelectorAll(".accordion-button img");

    accordionButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let collapse = this.parentElement.nextElementSibling;

            // Close other accordions
            accordionButtons.forEach(function (otherButton, otherIndex) {
                if (otherButton !== button) {
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    // Reset image source for accordion buttons
                    accordImg[otherIndex].src = "./images/icon/plus.png";
                    accordImg[otherIndex].style.transform = "rotate(0deg)";
                    otherButton.style.backgroundColor = "white";
                }
            });

            // Toggle the current accordion
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                accordImg[index].src = "./images/icon/plus.png";
                accordImg[index].style.transform = "rotate(0deg)";
                button.style.backgroundColor = "white";
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
                accordImg[index].src = "./images/icon/menus.png";
                accordImg[index].style.transform = "rotate(180deg)";
                button.style.backgroundColor = "#c1b0b5";
            }
        });
    });
});


// FOOTER 

let year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

const form = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    footerMessage.innerHTML = '~ Email Submitted Successfully ~';
    footerMessage.style.display = 'flex';
    form.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000);
} )


// Back to top button

window.addEventListener('scroll', function() {
    const button = document.getElementById('backToTopBtn');
    if (this.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// GOOGLE MAP

// function initMap() {
//     var uluru = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: uluru
//     });
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
// }

