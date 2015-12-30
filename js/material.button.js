/*  --  Replaces discord buttons with MD buttons  --  */
$( document ).ready(function() {
	$('btn btn-primary span').each(function() {
		var buttontext = $(this).html;
		var reactid = $(this).attr('data-reactid');
		$(this).attr('style', 'display: none;');
		$(this).parent().append('<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mc-react-btn">' + buttontext + '</button>');
	});
	$( "button .mc-react-btn" ).on( "click", function() {
		$(this).prev("button").click();
	});
});