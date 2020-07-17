/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

const $ = require('jquery');
// create global $ and jQuery variables
global.$ = global.jQuery = $;

// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
//require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// any CSS you import will output into a single css file (app.css in this case)
import '../css/global.scss';
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';




// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
