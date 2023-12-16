// ==UserScript==
// @name         Yandere show hidden posts
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Display all hidden NSFW posts and add a red border around them
// @author       remisiki
// @match        https://yande.re/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yande.re
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelectorAll(".javascript-hide").forEach(x => {
        x.classList.remove("javascript-hide");
        x.style.border = "1px solid red";
    });
})();