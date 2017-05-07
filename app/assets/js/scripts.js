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
    hideWdwAndShowOne('wdw-market , wdw-news');
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



  $(function () {
    // FastShell

  });



  /**********************************************************************/
  // API Data 
  /**********************************************************************/






})(jQuery, window, document);
