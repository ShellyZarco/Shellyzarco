let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy programadora Front-end y Administradora y Gestora empresarial.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
