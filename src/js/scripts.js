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
