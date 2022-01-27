// SCROLL EVENT
const navbar = document.querySelector('.navbar');
console.log(navbar);

const pAboutMe = document.querySelector('.about-me .container p');
console.log(pAboutMe);

const buttonCV = document.querySelector('.about-me .container .button-about-me .button-cv');
console.log(buttonCV);

const buttonContactMe = document.querySelector('.about-me .container .button-about-me .button-contact-me');
console.log(buttonContactMe);

const titleMyskills = document.querySelector('.my-skills .title-my-skills');
console.log(titleMyskills);

const graphicDesign = document.querySelector('.my-skills .container .row .col-md-4 .graphic-designer');
console.log(graphicDesign)

const videoEditting = document.querySelector('.my-skills .container .row .col-md-4 .video-editting');
console.log(videoEditting)

const webDesign = document.querySelector('.my-skills .container .row .col-md-4 .web-designer');
console.log(webDesign)

const titleProject = document.querySelector('.my-projects .container .title-my-projects');
console.log(titleProject)

const project1 = document.querySelector('.my-projects .container .the-projects .project-1');
console.log(project1)

const project2 = document.querySelector('.my-projects .container .the-projects .project-2');
console.log(project2)

const project3 = document.querySelector('.my-projects .container .the-projects .project-3');
console.log(project3)

const project4 = document.querySelector('.my-projects .container .the-projects .project-4');
console.log(project4)


window.addEventListener('scroll', () => {

    const scroll = window.scrollY;
    console.log(scroll);

    if (scroll > 10) {
        navbar.classList.add('show');
        pAboutMe.classList.add('showP');
    } else {
        navbar.classList.remove('show');
    }

    if (scroll > 66) {
        buttonCV.classList.add('animationButtonCV');
        buttonContactMe.classList.add('animationButtonContactMe');
    }

    if (scroll > 300) {
        titleMyskills.classList.add('animation-title-skills')
    }

    if (scroll > 422) {
        graphicDesign.classList.add('animation-graphic-design')
        this.setTimeout(() => {
            videoEditting.classList.add('animation-video-editting')
        }, 200)
        this.setTimeout(() => {
            webDesign.classList.add('animation-web-design')
        }, 300)
    }

    if (scroll > 730) {
        titleProject.classList.add('animation-title-my-projects')
    }

    if (scroll > 852) {
        project1.classList.add('animtion-project-1')
    }

    if (scroll > 1448) {
        project2.classList.add('animtion-project-2')
    }

    if (scroll > 2035) {
        project3.classList.add('animtion-project-3')
    }

    if (scroll > 2630) {
        project4.classList.add('animtion-project-4')
    }

});
// AKHIR SCROLL EVENT


// LOAD EVENT
const popUp = document.querySelector('.pop-up');
console.log(popUp)

const advertisement = document.querySelector('.pop-up .advertisement');
console.log(advertisement)

const titleHeader = document.querySelector('.jumbotron .container .title-header');
console.log(titleHeader);

const sosmed = document.querySelector('.jumbotron .container .my-sosmed');
console.log(sosmed);

const titleAboutMe = document.querySelector('.about-me .container .title-about-me');
console.log(titleAboutMe);

window.addEventListener('load', () => {

    titleHeader.classList.add('animationHeader');
    sosmed.classList.add('animationSosmed');
    titleAboutMe.classList.add('animation-title-about-me')
    this.setTimeout(() => {
        advertisement.classList.add('show')
        popUp.style.display = 'block'
    }, 5000)
    popUp.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.className == 'fas fa-times') {
            popUp.style.display = 'none';
        }
    })

});
// AKHIR LOAD EVENT


// SWIPER
const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    }

});
// AKHIR SWIPER


// CLICK THE PROJECTS
const backgroundModal = document.querySelector('.background-modal');
console.log(backgroundModal);

const buttonOke = document.querySelector('.background-modal .container .row .col .button-oke');
console.log(buttonOke);

const h2BackgroundModal = document.querySelector('.background-modal .container .row .col .background-modal-2 h2');
console.log(h2BackgroundModal);

buttonOke.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
});


const imgProjects = document.querySelectorAll('.my-projects .container .the-projects img');
for (image of imgProjects) {
    image.addEventListener('click', (e) => {
        alert("Sorry you can't view the project")
    })
};

const viewWebsite = document.querySelectorAll('.my-projects .container .the-projects .visit-web');
for (visitWeb of viewWebsite) {
    visitWeb.addEventListener('click', e => {
        backgroundModal.style.display = 'block';
        backgroundModal.classList.add('animation-background-modal');
        h2BackgroundModal.textContent = "Sorry you can't visit the website!!!"
        e.preventDefault();
    });
};

const viewStudyCase = document.querySelectorAll('.my-projects .container .the-projects .view-study-case');
for (viewCase of viewStudyCase) {
    viewCase.addEventListener('click', e => {
        backgroundModal.style.display = 'block';
        backgroundModal.classList.add('animation-background-modal');
        h2BackgroundModal.textContent = "Sorry you can't view the study case!!!"
        e.preventDefault();
    })
}
// AKHIR CLICK THE PROJECTS


// SEARCH
const search = document.querySelector('.navbar .container .icon-search .fas');
console.log(search);

const backgroundSearch = document.querySelector('.background-search');
console.log(backgroundSearch);

const close = document.querySelector('.background-search .close .fas');
console.log(close);

search.addEventListener('click', () => {
    backgroundSearch.style.display = 'block'
    backgroundSearch.classList.add('animation-search');
});

close.addEventListener('click', () => {
    backgroundSearch.classList.remove('animation-search');
})
// AKHIR SEARCH


// NAVBAR RESPONSIVE
const iconNavbar = document.querySelector('.navbar .container .navbar-toggler .navbar-toggler-icon');
console.log(iconNavbar);

const navbarResponsive = document.querySelector('.navbar-responsive');
console.log(navbarResponsive);

const navlinks = document.querySelectorAll('.navbar-responsive .text-navlinks a');

for (navlink of navlinks) {
    if (navlink.className == 'about') {
        navlink.classList.add('animation-about');
    }
    if (navlink.className == 'project') {
        navlink.classList.add('animation-project');
    }
    if (navlink.className == 'testimonials') {
        navlink.classList.add('animation-testimonials');
    }
    if (navlink.className == 'contact') {
        navlink.classList.add('animation-contact');
    }
}

iconNavbar.addEventListener('click', () => {
    navbarResponsive.style.display = 'block';
    navbarResponsive.classList.add('animation-navbar');
});

navbarResponsive.addEventListener('click', e => {
    console.log(e.target)

    if (e.target.className == 'fas fa-times') {
        navbarResponsive.style.display = 'none';
    }
})
// AKHIR NAVBAR RESPONSIVE