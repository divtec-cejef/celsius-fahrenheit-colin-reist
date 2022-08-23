/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Reist Colin
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

  let a = 'Bonjour';
  const nombre = Number(prompt('Temperature en celsius : '));

  if (isNaN(nombre)) {
    alert('Noter un nombre !!!');
    return;
  }
  const fahrenheit = (nombre * 9 / 5) + 32;
  alert(nombre + '°C' + ' = ' + fahrenheit + '°F');
  console.log(a);
}()); // Main IIFE

