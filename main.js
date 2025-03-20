// ==UserScript==
// @name         Adryan-dev Brainly Free
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Get Brainly free now! with this script.
// @author       Adryan-dev
// @match        https://brainly.com.br/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";


    setInterval(function () {
      // DELETE ALL COOKIES HEHEHE ADRYANDEV


      var KeyPrimary = window.localStorage.getItem('social-qa/telemetry');

      if(KeyPrimary != null && KeyPrimary != 'none'){
        window.localStorage.removeItem('social-qa/telemetry');
      }else {};


    }, 2100);


   /**
 * Função para remover anúncios, alterar elementos e personalizar o site.
 * A função é executada periodicamente a cada 2 segundos, para garantir que alterações e remoções de anúncios aconteçam dinamicamente.
 */
setInterval(function() {

  // Seleciona os elementos que representam os anúncios e sobreposições no site
  var sgOverlay = document.querySelector(".sg-overlay"); // Overlay do site
  var adFirst = document.querySelector('[data-testid="ad_below_first_answer"]'); // Primeiro anúncio abaixo da resposta
  var videoAd = document.querySelector('[data-testid="ad_below_question_module_id"]'); // Anúncio de vídeo abaixo da pergunta
  var adSide = document.querySelector('.sg-hide-for-medium-down'); // Anúncio lateral
  var googleAd = document.querySelector('#google_image_div'); // Anúncio do Google sso_box_module_id
  var adExist = document.querySelector('[data-testid="ad_rightrail_top_module_id"]');
  var adExist2 = document.querySelector('[data-testid="sso_box_module_id"]');

  // Remove ou oculta os anúncios quando encontrados
  if (adFirst) {
    adFirst.style.display = "none"; // Esconde o primeiro anúncio abaixo da resposta
  }

  if (adExist) {
    adExist.remove(); // Esconde o primeiro anúncio abaixo da resposta
  }


  if (adExist2) {
    adExist2.remove(); // Esconde o primeiro anúncio abaixo da resposta
  }


  if (videoAd) {
    videoAd.style.display = "none"; // Esconde o anúncio de vídeo
  }

  if (adSide) {
    adSide.style.display = "none"; // Esconde o anúncio lateral
  }

  if (googleAd) {
    googleAd.remove(); // Remove o anúncio do Google
  }

  // Remove placeholders de anúncios adicionais
  var ads = document.querySelectorAll(".BrainlyAdsPlaceholder-module__placeholder--viegT");
  var adTwo = document.querySelector('[data-testid="ad_below_second_answer"]'); // Anúncio secundário ad_below_second_answer
  var premiumAd = document.querySelector(".sg-dialog__container.sg-dialog__container--motion-default.sg-dialog__container--open.sg-dialog__container--appearance-dialog"); // Anúncio premium

  if (ads.length > 0) {
    ads.forEach(ad => ad.style.display = "none"); // Esconde todos os anúncios encontrados
  }

  if (adTwo) {
    adTwo.style.display = "none"; // Esconde o segundo placeholder de anúncio
  }

  if (premiumAd) {
    premiumAd.style.display = 'none'; // Esconde o anúncio premium
  }

  // Outra parte do código para ocultar ou modificar elementos do site
  let popupLateral = document.querySelector(".sg-box.sg-box--mint-secondary-light.sg-box--padding-m");
  let logo = document.querySelector(".sg-text.sg-text--link.sg-text--bold.CA1G-GuPLdUUWUQsXRFnd");

  let popupOne = document.querySelector(".sg-toplayer.sg-toplayer--lead.sg-toplayer--modal.sg-toplayer--with-bugbox.sg-toplayer--large");
  let popupTwo = document.querySelector(".sg-headline.sg-headline--large.sg-headline--blue-dark.sg-headline--extra-bold");

  // Esconde a seção de Brainly Plus
  if (document.querySelector(".sg-box.sg-box--mint-secondary-light.sg-box--padding-m") != null) {
    let aplus = document.querySelector(".section--lnnYy.section--3Yobl");
    if (aplus) aplus.style.visibility = "hidden";
  }

  // Esconde o popup lateral e altera o texto de outros popups
  if (popupOne) {
    popupOne.style.visibility = "hidden"; // Esconde o primeiro popup
  }

  if (popupTwo) {
    popupTwo.innerText = "∞"; // Altera o texto do segundo popup
  }

  // Personaliza o conteúdo do popup lateral
  if (popupLateral) {
    popupLateral.innerHTML = "ADRYANDEV - BRAINLY PLUS FREE SINCE 2021";
  }

  // Modifica o logo da página
  if (logo) {
    logo.style = "height: 50px; width: 200px;color: #000; font-size: 10px;"; // Ajusta o tamanho do logo
    logo.innerHTML = "<h2>BRAINLY UNLOCKED - ADRYANDEV</h2>"; // Altera o conteúdo do logo
  }

}, 2000); // Intervalo de 2 segundos para garantir que os elementos sejam atualizados continuamente

    setInterval(function(){
       var googleperm = document.querySelector('.google_image_div');
        if(googleperm != null){
            googleperm.remove();
        }

    }, 1000);

        setTimeout(function() {
      const plusMiniAd = document.querySelector('.BrainlyPlusBoxSearchSection__sidebarSection--yKnR4');

      if (plusMiniAd != null){
        plusMiniAd.style = 'display: none;';
      }


    }, 2000);


  })();
