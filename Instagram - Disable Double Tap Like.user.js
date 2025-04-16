// ==UserScript==
// @name         Instagram - Disable Double Tap Like
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevent double tap to like on Instagram web
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('dblclick', function(e) {
        // prevent default double tap behavior
        e.stopPropagation();
        e.preventDefault();
    }, true);
})();