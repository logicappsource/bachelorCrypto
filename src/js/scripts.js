(function ($, window, document, undefined) {

  'use strict';



  /**********************************************************************/
  // BItocin
  /**********************************************************************/





  function hideWdwAndShowOne(sWindowId){
    $('.wdw').hide();
    $('#' + sWindowId).show();
   }


  $(document).ready(function() {
    hideWdwAndShowOne('wdw-market , wdw-news ');
   // hideWdwAndShowOne('wdw-modal-alert');
  });



  /**********************************************************************/
  // Events Handlers 
  /**********************************************************************/

  //Predictions
  $('#btn-predictions').on('click', function() {
      hideWdwAndShowOne('wdw-predictions');
      console.log('wdw predictions click');
  });

 // Pools
    $('#btn-pools').on('click', function() {
      hideWdwAndShowOne('wdw-pools');
      console.log('wdw pool click');
  });

  //Live 
   $('#btn-live').on('click', function() {
      hideWdwAndShowOne('wdw-live');
      console.log('wdw live click');
  });

  //Sign in
  $('#btn-signin').on('click', function() {
    hideWdwAndShowOne('wdw-login');
    console.log('wdw login click');
  });

  //hide modal
  $('#btnmodal').on('click', function() {
    $('#wdw-modal-alert').fadeOut(500);
  })


  $(function () {
    // FastShell

  });



  /**********************************************************************/
  // API Data 
  /**********************************************************************/






})(jQuery, window, document);
