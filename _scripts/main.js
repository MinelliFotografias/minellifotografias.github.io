import addScript from './util/addScript';
import createElement from './util/createElement';
import createButton from './util/createButton';
import Slider from './libs/Slider';
import Carousel from './libs/Carousel';

document.body.addEventListener("touchstart", function () {
    return false
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("faixa").style.opacity = "0";
    }
    else 
    {
        document.getElementById("logo").style.opacity = "0";
        document.getElementById("faixa").style.opacity = "1";
    }
}

const offsetHeader = document.querySelector('.site-header').offsetHeight;
const pageLinks = document.querySelectorAll('a[href^="' + baseurl + '/#"].scroll');
Array.prototype.forEach.call(pageLinks, link => link.addEventListener("click", function(){
    const section = document.querySelector(this.hash);
    if (!section) return false;
    scrollToY(section.offsetTop - offsetHeader, 1000);
}));

const ui = {
    prevIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
    nextIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/></svg>'
}

const sliderElements = document.querySelectorAll('.carousel');

Array.prototype.forEach.call(sliderElements, sliderElement => {
    const posts = new Carousel({
        parent: sliderElement,
        duration: 5000
    });

    if (posts.parent.hasAttribute('data-autoplay')) {
        posts.on('mouseover', function () {
            posts.pause();
        }).on('mouseout', function () {
            posts.play();
        }).play();
    }

    if (posts.parent.hasAttribute('data-controls')) {
        const controls = createElement('div', {
            'className': 'slider-controls'
        });
        controls.setAttribute('data-grid', 'justify row');
        controls.appendChild(createButton({
            className: 'slider-control prev icon',
            title: 'VOLTAR',
            innerHTML: ui.prevIcon
        }, function () {
            posts.prev();
        }));
        controls.appendChild(createButton({
            className: 'slider-control next icon',
            title: 'AVANÇAR',
            innerHTML: ui.nextIcon
        }, function () {
            posts.next();
        }));
        posts.parent.appendChild(controls);
    };
});