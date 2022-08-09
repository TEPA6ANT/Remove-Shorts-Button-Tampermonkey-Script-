/* globals jQuery */

// ==UserScript==
// @name         Remove "Shorts" Button
// @version      0.1
// @description  NO MORE SHORTS. NO MORE CRINGE. NO MORE RESPECT100100100100. NO MORE "PUMPUMPUM PEEEEEW PURYPUPUPUM PEEEEW". COUB IS THE BEST.
// @author       TEPA6ANT
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    function removeSmallButton()
    {
        const elem =document.getElementsByTagName('ytd-mini-guide-entry-renderer');

        for (let sel of elem)
        {
            if ( sel.getAttribute('aria-label') === 'Shorts' )
            {
                sel.remove();
            }
        }
    }

    function removeBigButton()
    {
        const elem =document.getElementsByTagName('ytd-guide-entry-renderer')
        for (let sel of elem)
        {

            if ( sel.firstElementChild.getAttribute('title') === 'Shorts' )
            {
                sel.remove();
            }
        }
    }

    window.setInterval(function() {
        removeSmallButton()
        removeBigButton()
    }, 1000);
})(jQuery);
