import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(window).on('load', () => $('body').addClass('site-loaded'));

import paralax from './paralax.js';
paralax();

import lazyLoad from './lazy-load.js';
lazyLoad();