/**
 * when the DOM is ready to be manipulated
 */
$(document).ready(function() {

    $('h1').hide().html(chrome.app.getDetails().name).fadeIn('normal');
    $('h2').hide().html(chrome.app.getDetails().description).fadeIn('slow');

    // clip current tab content
    console.log('going to clip ...');
});

