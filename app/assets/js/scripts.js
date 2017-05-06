/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';




function hideWdwAndShowOne(sWindowId){
  $('.wdw').hide();
  $('#' + sWindowId).show();
}


$(document).ready(function() {
  hideWdwAndShowOne('wdw-market');
})

  $(function () {
    // FastShell
  });


console.log('f');









})(jQuery, window, document);
