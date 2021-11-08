//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $('.dark-box > .lang-selector');
  elem.width(elem.parent().width());
}

$(function () {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', '.toc-list-h3', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded(function () {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function () {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();

  bodymovin.loadAnimation({
    container: document.getElementById('payment-link-demo-left'), // required
    path: '/images/lottie/Payment Link Demo Left.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation Payment Link Left", // optional
  });

  bodymovin.loadAnimation({
    container: document.getElementById('payment-link-demo-middle'), // required
    path: '/images/lottie/Payment Link Demo Middle.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation Payment Link Middle", // optional
  });

  bodymovin.loadAnimation({
    container: document.getElementById('payment-link-demo-right'), // required
    path: '/images/lottie/Payment Link Demo Right.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation Payment Link Right", // optional
  });

  bodymovin.loadAnimation({
    container: document.getElementById('payment-link-demo-right-stick'), // required
    path: '/images/lottie/Payment Link Demo Right Stick.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation Payment Link Right Stick", // optional
  });
});

window.onpopstate = function () {
  activateLanguage(getLanguageFromQueryString());
};
