# M-framework
Framework para el rapido desarrollo frontend, optimizado, modularizado y ligero

Este framework me ayuda a crear plantillas para html con Jade, css modularizado con Stylus,
javascript compilado con coffescript para hacer la caga mas ligera en el navegador.

Tiene colores basados en http://flatuicolors.com/
Uso normalize para el reset
Estilos base que son los más comunes en mi caso (puedes modificarlos)
Un modulo de stylus para el tema

En Jade tiene una carpeta para plantillas y otra para el HTML que se generará

Esta compilado con Gulp js, debes descargar los plugins necesarios para que funcione 
(gulp-stylus, gulp-uglify, gulp-concat,gulp-cofeescript)

El archivo Gulpfile.js ya esta creado, desde la terminal debes correr el comando gulp sobre la carpeta y se ejecutará.
