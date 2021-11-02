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
    container: document.getElementById('container'), // required
    path: '/images/lottie/middle.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
  });

  bodymovin.loadAnimation({
    container: document.getElementById('bebas'), // required
    path: '/images/lottie/middle.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
  });
});

window.onpopstate = function () {
  activateLanguage(getLanguageFromQueryString());
};