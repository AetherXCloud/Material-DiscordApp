var targetNodes         = $('span[data-reactid=".0.5"]');
var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
var myObserver          = new MutationObserver (mutationHandler);
var obsConfig           = { childList: true, characterData: true, attributes: true, subtree: true };

//--- Add a target node to the observer. Can only add one node at a time.
targetNodes.each ( function () {
    myObserver.observe (this, obsConfig);
} );

function mutationHandler (mutationRecords) {
	$('btn btn-primary span').each(function() {
		var buttontext = $(this).html;
		var reactid = $(this).attr('data-reactid');
		$(this).attr('style', 'display: none;');
		$(this).parent().append('<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mc-react-btn">' + buttontext + '</button>');
	});
}

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
