// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = () => {
    const inputBoxes = document.querySelectorAll('.input-box')
    console.log(inputBoxes)
    if (inputBoxes.length !== 0) {
        for (const inputBox of inputBoxes) {
            const input = inputBox.querySelector('input')
            const label = inputBox.querySelector('label')

            if (input && label) {
                input.onfocus = () => {
                    if (input.value == '') {
                        label.classList.add('active')
                    }
                }
                input.onblur = () => {
                    if (input.value == '') {
                        label.classList.remove('active')
                    }
                }
            }
        }
    }
    (function () {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('scroll-table').scrollLeft -= (delta * 40); // Multiplied by 40
            e.preventDefault();
        }
        if (document.getElementById('scroll-table').addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementById('scroll-table').addEventListener('mousewheel', scrollHorizontally, false);
            // Firefox
            document.getElementById('scroll-table').addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.getElementById('scroll-table').attachEvent('onmousewheel', scrollHorizontally);
        }
    })();
}