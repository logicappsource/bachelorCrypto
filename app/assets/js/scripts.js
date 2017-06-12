/*!
 * Cryptonite
 * Most Advanced Crypto Tool
 * https://HosseinKarami.github.io/fastshell
 * @author Patrick Sahlgren
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';




$(document).ready(function() {
  /*
//Loading modules from Highcharts 
var Highcharts = require('highcharts/highstock');

// Load Highmaps as a module
require('node_modules/highcharts/modules/map')(Highcharts);
*/

});




  /**********************************************************************/
  // BItocin
  /**********************************************************************/
  $('#btn-crypto-btc').on('click',function() {
    hideWdwAndShowOne('wdw-crypto-btc');
  });



  function hideWdwAndShowOne(sWindowId){
    $('.wdw').hide();
    $('#' + sWindowId).show();
   }


  $(document).ready(function() {
    hideWdwAndShowOne('wdw-market , wdw-news, wdw-values');
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
  });

  //Global  
  $('#btn-global').on('click', function() {
      hideWdwAndShowOne('wdw-global');
      });

  $(function () {
    // FastShell

  });



  /**********************************************************************/
  // API Data 
  /**********************************************************************/

  //var sDivForCoin =   ' <td class="v-a-m text-white">"{{coin-fullname}}" <small class="text-muted">{{coin-short}}</small></td>';
                   

  //CryptoCompare  -- Fetch All Coins Names 
  var cryptoLink = "https://www.cryptocompare.com/api/data/coinlist/"; 

  $.ajax({
    "url": cryptoLink,
    "cache": false,
    "dataType": "json", 
    "method": "get"

  }).done(function(jData) {
 //   console.log(jData);

 

  }).fail(function(jFail) {
  //  console.log(jFail);
  });   




})(jQuery, window, document);
