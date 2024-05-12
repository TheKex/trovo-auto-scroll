// ==UserScript==
// @name         Trovo auto-scroll fix
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Scroll down chat, when it stuck every 20 seconds
// @author       TheKex
// @match        https://trovo.live/chat/*
// @match        https://trovo.live/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trovo.live
// @require      https://raw.githubusercontent.com/TheKex/trovo-auto-scroll/main/trovo-auto-scroll.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function check_tip() {
        let tip = document.querySelector(".at-tip");
        if (tip !== null) {

            tip.click();
        }
        tip = document.querySelector(".read-tip");
        if (tip !== null) {
            tip.click();
        }
    };

    setInterval(check_tip, 20000);

})();
