'use strict';

window.addEventListener('DOMContentLoaded', () => {

    function randomText() {
        const text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem sapiente a nisi, adipisci quia doloribus sequi vitae deleniti nobis! Ut, optio. Possimus ratione dolorem perspiciatis impedit molestias. Asperiores, autem.");

        const letters = text[Math.floor(Math.random() * text.length)];
        return letters
    };

    function rain() {
        const monitor = document.querySelector('.monitor');
        let e = document.createElement('div');
        e.classList.add('drop');
        monitor.appendChild(e);

        const size = Math.random() * 1.5

        const left = Math.floor(Math.random() * 130);
        let duration = Math.random() * 1

        e.innerText = randomText();
        e.style.left = left + 'px';
        e.style.fontSize = .5 + size + 'em';
        e.style.animationDuration = 1 + duration + 's'

        setTimeout(function () {
            monitor.removeChild(e)
        }, 1500);

    };


    setInterval(function () {
        rain()
    }, 50);






})