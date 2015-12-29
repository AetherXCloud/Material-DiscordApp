//META{"name":"MaterialCord"}*//

function materialCord() {}

materialCord.prototype.load = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") loaded", "color: purple; font-weight: bold;", "");
};

materialCord.prototype.unload = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") unloaded", "color: purple; font-weight: bold;", "");
};

materialCord.prototype.start = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + "(" + this.getVersion() + ") started", "color: purple; font-weight: bold;", "");
    
    var materializeJS = document.createElement("script");
    materializeJS.type = "text/javascript";
    materializeJS.src = "//raw.githubusercontent.com/Dogfalo/materialize/master/bin/materialize.js";
    $("head").append(materializeJS);
    
    var materializeCSS = document.createElement("link");
    materializeCSS.rel = "stylesheet";
    materializeCSS.href = "//raw.githubusercontent.com/Dogfalo/materialize/master/bin/materialize.css";
    $("head").append(materializeCSS);
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