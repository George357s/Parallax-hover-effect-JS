const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer');
const back = document.querySelector('.back-layer');

/* Sensitivity levels for booth layers */

const sFront = 150;
const sBack = 400;

/* Mouse Event */
parallax.addEventListener('mousemove', e => {
   /* X and Y mouse cordinates */
   const x = e.clientX;
   const y = e.clientY;
   /* Template literals that traslates the front layer using coordinates and applies the front sensitiviy */
   front.style.transform = `
   translate(
      ${x / sFront}%,
      ${y / sFront}%
   )`;
   /* translates the back layer using the coordinates and applies the back sensitivity */
   back.style.transform = `
      translate(
         ${x / sBack}%,
         ${y / sBack}%
      )`;
});