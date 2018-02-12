/* pwstrength-bootstrap 2016-08-26 - GPLv3 & MIT License */


!function(a){var b={};!function(a,b){"use strict";a.fallback={wordLength:"Your password is too short",wordNotEmail:"Do not use your email as your password",wordSimilarToUsername:"Your password cannot contain your username",wordTwoCharacterClasses:"Use different character classes",wordRepetitions:"Too many repetitions",wordSequences:"Your password contains sequences",errorList:"Errors:",veryWeak:"Very Weak",weak:"Weak",normal:"Normal",medium:"Medium",strong:"Strong",veryStrong:"Very Strong"},a.t=function(c){var d="";return d=b?b.t(c):a.fallback[c],d===c?"":d}}(b,window.i18next);var c={};try{if(!a&&module&&module.exports){var a=require("jquery"),d=require("jsdom").jsdom;a=a(d().parentWindow)}}catch(e){}!function(a,b){"use strict";var c={};b.forbiddenSequences=["0123456789","abcdefghijklmnopqrstuvwxyz","qwertyuiop","asdfghjkl","zxcvbnm","!@#$%^&*()_+"],c.wordNotEmail=function(a,b,c){return b.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)?c:0},c.wordLength=function(a,b,c){var d=b.length,e=Math.pow(d,a.rules.raisePower);return d<a.common.minChar&&(e+=c),e},c.wordSimilarToUsername=function(b,c,d){var e=a(b.common.usernameField).val();return e&&c.toLowerCase().match(e.replace(/[\-\[\]\/\{\}\(\)\*\+\=\?\:\.\\\^\$\|\!\,]/g,"\\$&").toLowerCase())?d:0},c.wordTwoCharacterClasses=function(a,b,c){return b.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)||b.match(/([a-zA-Z])/)&&b.match(/([0-9])/)||b.match(/(.[!,@,#,$,%,\^,&,*,?,_,~])/)&&b.match(/[a-zA-Z0-9_]/)?c:0},c.wordRepetitions=function(a,b,c){return b.match(/(.)\1\1/)?c:0},c.wordSequences=function(c,d,e){var f,g=!1;return d.length>2&&(a.each(b.forbiddenSequences,function(b,c){if(!g){var e=[c,c.split("").reverse().join("")];a.each(e,function(a,b){for(f=0;f<d.length-2;f+=1)b.indexOf(d.toLowerCase().substring(f,f+3))>-1&&(g=!0)})}}),g)?e:0},c.wordLowercase=function(a,b,c){return b.match(/[a-z]/)&&c},c.wordUppercase=function(a,b,c){return b.match(/[A-Z]/)&&c},c.wordOneNumber=function(a,b,c){return b.match(/\d+/)&&c},c.wordThreeNumbers=function(a,b,c){return b.match(/(.*[0-9].*[0-9].*[0-9])/)&&c},c.wordOneSpecialChar=function(a,b,c){return b.match(/[!,@,#,$,%,\^,&,*,?,_,~]/)&&c},c.wordTwoSpecialChar=function(a,b,c){return b.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/)&&c},c.wordUpperLowerCombo=function(a,b,c){return b.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&c},c.wordLetterNumberCombo=function(a,b,c){return b.match(/([a-zA-Z])/)&&b.match(/([0-9])/)&&c},c.wordLetterNumberCharCombo=function(a,b,c){return b.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/)&&c},b.validation=c,b.executeRules=function(c,d){var e=0;return a.each(c.rules.activated,function(f,g){if(g){var h,i,j=c.rules.scores[f],k=b.validation[f];a.isFunction(k)||(k=c.rules.extra[f]),a.isFunction(k)&&(h=k(c,d,j),h&&(e+=h),(0>h||!a.isNumeric(h)&&!h)&&(i=c.ui.spanError(c,f),i.length>0&&c.instances.errors.push(i)))}}),a.isFunction(c.common.onScore)&&(e=c.common.onScore(c,d,e)),e}}(a,c);try{module&&module.exports&&(module.exports=c)}catch(e){}var f={};f.common={},f.common.minChar=6,f.common.usernameField="#username",f.common.userInputs=[],f.common.onLoad=void 0,f.common.onKeyUp=void 0,f.common.onScore=void 0,f.common.zxcvbn=!1,f.common.zxcvbnTerms=[],f.common.events=["keyup","change","paste"],f.common.debug=!1,f.rules={},f.rules.extra={},f.rules.scores={wordNotEmail:-100,wordLength:-50,wordSimilarToUsername:-100,wordSequences:-20,wordTwoCharacterClasses:2,wordRepetitions:-25,wordLowercase:1,wordUppercase:3,wordOneNumber:3,wordThreeNumbers:5,wordOneSpecialChar:3,wordTwoSpecialChar:5,wordUpperLowerCombo:2,wordLetterNumberCombo:2,wordLetterNumberCharCombo:2},f.rules.activated={wordNotEmail:!0,wordLength:!0,wordSimilarToUsername:!0,wordSequences:!0,wordTwoCharacterClasses:!1,wordRepetitions:!1,wordLowercase:!0,wordUppercase:!0,wordOneNumber:!0,wordThreeNumbers:!0,wordOneSpecialChar:!0,wordTwoSpecialChar:!0,wordUpperLowerCombo:!0,wordLetterNumberCombo:!0,wordLetterNumberCharCombo:!0},f.rules.raisePower=1.4,f.ui={},f.ui.bootstrap2=!1,f.ui.bootstrap4=!1,f.ui.colorClasses=["danger","danger","danger","warning","warning","success"],f.ui.showProgressBar=!0,f.ui.progressBarEmptyPercentage=1,f.ui.progressBarMinPercentage=1,f.ui.progressBarExtraCssClasses="",f.ui.showPopover=!1,f.ui.popoverPlacement="bottom",f.ui.showStatus=!1,f.ui.spanError=function(a,b){"use strict";var c=a.i18n.t(b);return c?'<span style="color: #d52929">'+c+"</span>":""},f.ui.popoverError=function(b){"use strict";var c=b.instances.errors,d=b.i18n.t("errorList"),e="<div>"+d+"<ul class='error-list' style='margin-bottom: 0;'>";return a.each(c,function(a,b){e+="<li>"+b+"</li>"}),e+="</ul></div>"},f.ui.showVerdicts=!0,f.ui.showVerdictsInsideProgressBar=!1,f.ui.useVerdictCssClass=!1,f.ui.showErrors=!1,f.ui.showScore=!1,f.ui.container=void 0,f.ui.viewports={progress:void 0,verdict:void 0,errors:void 0,score:void 0},f.ui.scores=[0,14,26,38,50],f.i18n={},f.i18n.t=b.t;var g={};!function(a,b){"use strict";var c=["error","warning","success"],d=["veryWeak","weak","normal","medium","strong","veryStrong"];b.getContainer=function(b,c){var d;return d=a(b.ui.container),d&&1===d.length||(d=c.parent()),d},b.findElement=function(a,b,c){return b?a.find(b).find(c):a.find(c)},b.getUIElements=function(a,c){var d,e,f;return a.instances.viewports?a.instances.viewports:(d=b.getContainer(a,c),f={},e=a.ui.bootstrap4?"progress.progress":"div.progress",f.$progressbar=b.findElement(d,a.ui.viewports.progress,e),a.ui.showVerdictsInsideProgressBar&&(f.$verdict=f.$progressbar.find("span.password-verdict")),a.ui.showPopover||(a.ui.showVerdictsInsideProgressBar||(f.$verdict=b.findElement(d,a.ui.viewports.verdict,"span.password-verdict")),f.$errors=b.findElement(d,a.ui.viewports.errors,"ul.error-list")),f.$score=b.findElement(d,a.ui.viewports.score,"span.password-score"),a.instances.viewports=f,f)},b.initProgressBar=function(c,d){var e=b.getContainer(c,d),f="<div class='progress ";c.ui.bootstrap2?f+=c.ui.progressBarExtraCssClasses+"'><div class='":c.ui.bootstrap2||c.ui.bootstrap4||(f+="'><div class='"+c.ui.progressBarExtraCssClasses+" progress-"),f+="bar'>",c.ui.bootstrap4&&(f="<progress class='progress "+c.ui.progressBarExtraCssClasses+"' value='0' max='100'>"),c.ui.showVerdictsInsideProgressBar&&(f+="<span class='password-verdict'></span>"),f+=c.ui.bootstrap4?"</progress>":"</div></div>",c.ui.viewports.progress?e.find(c.ui.viewports.progress).append(f):a(f).insertAfter(d)},b.initHelper=function(c,d,e,f){var g=b.getContainer(c,d);f?g.find(f).append(e):a(e).insertAfter(d)},b.initVerdict=function(a,c){b.initHelper(a,c,"<span class='password-verdict'></span>",a.ui.viewports.verdict)},b.initErrorList=function(a,c){b.initHelper(a,c,"<ul class='error-list'></ul>",a.ui.viewports.errors)},b.initScore=function(a,c){b.initHelper(a,c,"<span class='password-score'></span>",a.ui.viewports.score)},b.initPopover=function(a,b){b.popover("destroy"),b.popover({html:!0,placement:a.ui.popoverPlacement,trigger:"manual",content:" "})},b.initUI=function(a,c){a.ui.showPopover?b.initPopover(a,c):(a.ui.showErrors&&b.initErrorList(a,c),a.ui.showVerdicts&&!a.ui.showVerdictsInsideProgressBar&&b.initVerdict(a,c)),a.ui.showProgressBar&&b.initProgressBar(a,c),a.ui.showScore&&b.initScore(a,c)},b.updateProgressBar=function(c,d,e,f){var g=b.getUIElements(c,d).$progressbar,h=g.find(".progress-bar"),i="progress-";c.ui.bootstrap2&&(h=g.find(".bar"),i=""),a.each(c.ui.colorClasses,function(a,b){c.ui.bootstrap4?g.removeClass(i+b):h.removeClass(i+"bar-"+b)}),c.ui.bootstrap4?(g.addClass(i+c.ui.colorClasses[e]),g.val(f)):(h.addClass(i+"bar-"+c.ui.colorClasses[e]),h.css("width",f+"%"))},b.updateVerdict=function(a,c,d,e){var f=b.getUIElements(a,c).$verdict;f.removeClass(a.ui.colorClasses.join(" ")),d>-1&&f.addClass(a.ui.colorClasses[d]),f.html(e)},b.updateErrors=function(c,d,e){var f=b.getUIElements(c,d).$errors,g="";e||a.each(c.instances.errors,function(a,b){g+="<li>"+b+"</li>"}),f.html(g)},b.updateScore=function(a,c,d,e){var f=b.getUIElements(a,c).$score,g="";e||(g=d.toFixed(2)),f.html(g)},b.updatePopover=function(a,b,c,d){var e=b.data("bs.popover"),f="",g=!0;return a.ui.showVerdicts&&!a.ui.showVerdictsInsideProgressBar&&c.length>0&&(f="<h5><span class='password-verdict'>"+c+"</span></h5>",g=!1),a.ui.showErrors&&(a.instances.errors.length>0&&(g=!1),f+=a.ui.popoverError(a)),g||d?void b.popover("hide"):(a.ui.bootstrap2&&(e=b.data("popover")),void(e.$arrow&&e.$arrow.parents("body").length>0?b.find("+ .popover .popover-content").html(f):(e.options.content=f,b.popover("show"))))},b.updateFieldStatus=function(b,d,e,f){var g=b.ui.bootstrap2?".control-group":".form-group",h=d.parents(g).first();a.each(c,function(a,c){b.ui.bootstrap2||(c="has-"+c),h.removeClass(c)}),f||(e=c[e],b.ui.bootstrap2||(e="has-"+e),h.addClass(e))},b.percentage=function(a,b,c){var d=Math.floor(100*b/c),e=a.ui.progressBarMinPercentage;return d=e>=d?e:d,d=d>100?100:d},b.getVerdictAndCssClass=function(a,b){var c,e;return void 0===b?["",0]:(c=b<=a.ui.scores[0]?0:b<a.ui.scores[1]?1:b<a.ui.scores[2]?2:b<a.ui.scores[3]?3:b<a.ui.scores[4]?4:5,e=d[c],[a.i18n.t(e),c])},b.updateUI=function(a,c,d){var e,f,g,h;e=b.getVerdictAndCssClass(a,d),g=0===d?"":e[0],e=e[1],h=a.ui.useVerdictCssClass?e:-1,a.ui.showProgressBar&&(f=void 0===d?a.ui.progressBarEmptyPercentage:b.percentage(a,d,a.ui.scores[4]),b.updateProgressBar(a,c,e,f),a.ui.showVerdictsInsideProgressBar&&b.updateVerdict(a,c,h,g)),a.ui.showStatus&&b.updateFieldStatus(a,c,e,void 0===d),a.ui.showPopover?b.updatePopover(a,c,g,void 0===d):(a.ui.showVerdicts&&!a.ui.showVerdictsInsideProgressBar&&b.updateVerdict(a,c,h,g),a.ui.showErrors&&b.updateErrors(a,c,void 0===d)),a.ui.showScore&&b.updateScore(a,c,d,void 0===d)}}(a,g);var h={};!function(a,b){"use strict";var d,e,h;d=function(b){var d,e,f,h,i=a(b.target),j=i.data("pwstrength-bootstrap"),k=i.val();void 0!==j&&(j.instances.errors=[],0===k.length?h=void 0:j.common.zxcvbn?(d=[],a.each(j.common.userInputs.concat([j.common.usernameField]),function(b,c){var e=a(c).val();e&&d.push(e)}),d=d.concat(j.common.zxcvbnTerms),h=Math.log2(zxcvbn(k,d).guesses)):h=c.executeRules(j,k),g.updateUI(j,i,h),e=g.getVerdictAndCssClass(j,h),f=e[1],e=e[0],j.common.debug&&console.log(h+" - "+e),a.isFunction(j.common.onKeyUp)&&j.common.onKeyUp(b,{score:h,verdictText:e,verdictLevel:f}))},e=function(b){var c,e=a(b.target),f=e.val(),g=0;c=function(){var a=e.val();a!==f?d(b):3>g&&(g+=1,setTimeout(c,100))},setTimeout(c,100)},b.init=function(b){return this.each(function(c,h){var i=a.extend(!0,{},f),j=a.extend(!0,i,b),k=a(h);j.instances={},k.data("pwstrength-bootstrap",j),a.each(j.common.events,function(a,b){var c="paste"===b?e:d;k.on(b,c)}),g.initUI(j,k),k.trigger("keyup"),a.isFunction(j.common.onLoad)&&j.common.onLoad()}),this},b.destroy=function(){this.each(function(b,c){var d=a(c),e=d.data("pwstrength-bootstrap"),f=g.getUIElements(e,d);f.$progressbar.remove(),f.$verdict.remove(),f.$errors.remove(),d.removeData("pwstrength-bootstrap")})},b.forceUpdate=function(){this.each(function(a,b){var c={target:b};d(c)})},b.addRule=function(b,c,d,e){this.each(function(f,g){var h=a(g).data("pwstrength-bootstrap");h.rules.activated[b]=e,h.rules.scores[b]=d,h.rules.extra[b]=c})},h=function(b,c,d){this.each(function(e,f){a(f).data("pwstrength-bootstrap").rules[c][b]=d})},b.changeScore=function(a,b){h.call(this,a,"scores",b)},b.ruleActive=function(a,b){h.call(this,a,"activated",b)},a.fn.pwstrength=function(c){var d;return b[c]?d=b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?a.error("Method "+c+" does not exist on jQuery.pwstrength-bootstrap"):d=b.init.apply(this,arguments),d}}(a,h)}(jQuery);
