!function n(e,t,i){function r(l,s){if(!t[l]){if(!e[l]){var o="function"==typeof require&&require;if(!s&&o)return o(l,!0);if(a)return a(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[l]={exports:{}};e[l][0].call(c.exports,function(n){var t=e[l][1][n];return r(t?t:n)},c,c.exports,n,e,t,i)}return t[l].exports}for(var a="function"==typeof require&&require,l=0;l<i.length;l++)r(i[l]);return r}({1:[function(n,e,t){n("./modules/install-franklin"),jQuery(document).ready(function(n){n("body.widgets-php")&&n(".benjamin-widget-area-options").appendTo(".widgets-sortables")}),window.$=jQuery},{"./modules/install-franklin":2}],2:[function(n,e,t){window.franklinPlugin={success:function(n){var e=document.querySelector(".js--install-activate-franklin");n.activateUrl&&setTimeout(function(){e.setAttribute("href",n.activateUrl),e.classList.remove("disabled"),e.innerText=wp.updates.l10n.activatePlugin},2e3)},error:function(n){var e=document.querySelector(".js--install-activate-franklin");e.classList.remove("disabled"),e.innerText=wp.updates.l10n.installNow},init:function(){var n=document.querySelector(".js--install-activate-franklin");n&&n.addEventListener("click",function(n){var e=n.target.getAttribute("href"),t=n.target.innerText;if(this.classList.contains("disabled"))return void n.preventDefault();if(t.indexOf("Install")>-1&&e.indexOf("action=install-plugin")>-1){var i={slug:"franklin",success:franklinPlugin.success};n.preventDefault(),this.classList.add("disabled"),this.innerText=wp.updates.l10n.installing,wp.updates.ajax("install-plugin",i)}else t.indexOf("Activate")>-1&&e.indexOf("action=activate")>-1&&console.log("activate plugin",n.originalEvent,"bom")})}},franklinPlugin.init()},{}]},{},[1]);