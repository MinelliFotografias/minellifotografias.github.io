import addScript from './util/addScript';
import createElement from './util/createElement';
import createButton from './util/createButton';

document.body.addEventListener("touchstart", function () {});

const ui = {
    prevIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.468 493.468"><path d="M246.736.006C110.688.006.008 110.686.008 246.742c0 136.036 110.68 246.72 246.728 246.72S493.46 382.777 493.46 246.74C493.46 110.686 382.783.006 246.735.006zm0 20.006c125.017 0 226.72 101.704 226.72 226.728 0 125.006-101.703 226.717-226.72 226.717S20.012 371.747 20.012 246.74c0-125.024 101.707-226.728 226.724-226.728zm33.035 111.045c-1.435 0-2.77.554-3.774 1.558L165.684 242.92c-1.004 1.024-1.552 2.375-1.536 3.85-.016 1.553.53 2.917 1.54 3.933l110.14 110.137c2 2.012 5.564 2.004 7.568 0l8.96-8.98c1.01-.99 1.568-2.324 1.568-3.772 0-1.428-.557-2.772-1.57-3.776l-94.762-94.777c-1.508-1.512-1.508-3.943 0-5.447l94.93-94.943c2.097-2.08 2.098-5.49-.002-7.55l-8.967-8.98c-.992-1.004-2.358-1.558-3.782-1.558z" fill="none"/></svg>',
    nextIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.456 493.456"><path d="M246.73 0C110.682 0 .002 110.68.002 246.736c0 136.036 110.68 246.72 246.728 246.72s246.723-110.684 246.723-246.72C493.453 110.68 382.778 0 246.73 0zm0 20.006c125.018 0 226.72 101.704 226.72 226.728 0 125.006-101.702 226.717-226.72 226.717-125.017 0-226.724-101.71-226.724-226.716 0-125.024 101.707-226.728 226.724-226.728zm-39.525 111.01c-1.428 0-2.775.556-3.78 1.556l-8.968 8.977c-1 .99-1.555 2.343-1.555 3.762 0 1.448.56 2.792 1.56 3.792l94.78 94.777c.708.717 1.115 1.704 1.115 2.72 0 1.032-.403 2.012-1.115 2.732l-94.953 94.94c-2.077 2.083-2.08 5.48-.005 7.564l8.98 8.97c2.01 2.007 5.553 2.007 7.557 0L321.14 250.49c1.02-1.016 1.57-2.376 1.55-3.832.02-1.564-.53-2.92-1.55-3.935L210.98 132.572c-1.004-1-2.34-1.564-3.777-1.556z" fill="none"/></svg>'
}

const sliderElements = document.querySelector('.slider');
if (sliderElements) addScript(baseurl + '/js/slider.js', function () {
    const posts = Slider({
        duration: 5000
    });
    if (posts.parent.className.indexOf('carousel') > -1 && posts.children.length < 4) {} else {
        posts.on('mouseover', function () {
            posts.pause();
        }).on('mouseout', function () {
            posts.play();
        }).play();
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
    }
});