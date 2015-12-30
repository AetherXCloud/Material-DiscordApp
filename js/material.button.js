/*  --  Replaces discord buttons with MD buttons  --  */

$('btn btn-primary span').each(function( index ) {
	var buttontext = this.html;
	this.attr('style', 'display: none;');
	this.parent().append('<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">' + buttontext + '</button>');
});

