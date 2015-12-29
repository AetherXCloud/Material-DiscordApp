//META{"name":"materialCord"}*//

function materialCord() {}

materialCord.prototype.load = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") loaded", "color: purple; font-weight: bold;", "");
};

materialCord.prototype.unload = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") unloaded", "color: purple; font-weight: bold;", "");
};

materialCord.prototype.start = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") started", "color: purple; font-weight: bold;", "");
    
    //Add javascript and js to head
    $('<script/>', {src: 'https://cdn.rawgit.com/AetherXCloud/Material-DiscordApp/master/js/mdl.min.js'}).appendTo('head');
    // var hammerJS = document.createElement("script");
    //     hammerJS.src = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js";
    //     $('head').append(hammerJS);
    
    $('<link/>', {rel: 'stylesheet', href: 'https://storage.googleapis.com/code.getmdl.io/1.0.6/material.blue-pink.min.css'}).appendTo('head');
    $('<link/>', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}).appendTo('head');
    
    $(".btn.btn-settings").click(function() { setTimeout(function(){ var button = document.createElement('button');
    var textNode = document.createTextNode('Done');
    button.appendChild(textNode);
    button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored';
    button.type = 'button';
    button.id = "settings-done-btn";
    componentHandler.upgradeElement(button);
    $(".settings-actions").append(button);
    $(document).on('click', "#settings-done-btn", function() {
    $("button[data-reactid='.0.5.$=1$UserSettingsModal.0.0.1.1.2']").click()
    });

    
};
materialCord.prototype.stop = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") stopped", "color: purple; font-weight: bold;", "");
};

materialCord.prototype.getName = function() {
    return "MaterialCord";
};

materialCord.prototype.getDescription = function() {
    return "A complete Discord UI overhaul to match the material design by Google";
};

materialCord.prototype.getVersion = function() {
    return "1.0";
};

materialCord.prototype.getAuthor = function() {
    return "Soulweaver & #Jordan";
};

materialCord.prototype.getSettingsPanel = function() {
    return '<p>No settings for this plugin';
};