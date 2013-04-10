// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var b=arguments,c;b.callee=b.callee.caller;c=[].slice.call(b);typeof console.log=="object"?log.apply.call(console.log,console,c):console.log.apply(console,c)}};(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());)a[d]=a[d]||b})(function(){try{console.log();return window.console}catch(a){return window.console={}}}());(function(a){a.fn.getTweet=function(b,c,d){a.fn.getTweet.defaults={username:"whiteboardis",numberOfTweets:"1"};if(a.isPlainObject(b)&&b!=null)d=a.extend({},b);else if(a.isPlainObject(c&&c!=null)){d=a.extend({},c);d.username=b}else{d={};d.username=b;d.numberOfTweets=c}var e=a.extend({},a.fn.getTweet.defaults,d);return this.each(function(){var b=a(this),c="http://api.twitter.com/1/statuses/user_timeline/"+e.username+".json?count="+e.numberOfTweets+"&callback=?";a.getJSON(c,function(c){var d="";if(e.numberOfTweets>1){d="<ul id='getTweet'>";a.each(c,function(a,b){var c=b.text.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/g,"<a href='$1'>$1</a>");c=c.replace(/(?:^|\s)#([^\s]+)/g,"<a href='http://search.twitter.com/search?q=%23$1'> #$1</a> ");c=c.replace(/@([^\s]+)/g,'<a href="http://twitter.com/$1">@$1</a>');d+="<li class='tweet'>"+c+"</li>"});d+="</ul>"}else if(e.numberOfTweets=1){tweettext=c[0].text;var f=tweettext.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/g,"<a href='$1'>$1</a>"),d=f.replace(/(?:^|\s)#([^\s]+)\s/g,"<a href='http://search.twitter.com/search?q=%23$1'> #$1</a> ");d=f.replace(/@([^\s]+)/g,'<a href="http://twitter.com/$1">@$1</a>')}b.html(d)})})};a.getTweet=function(b,c,d,e){a.getTweet.defaults={username:"jcutrell",numberOfTweets:"1",callback:""};a.getTweet.api={};var e=a.extend({},a.getTweet.defaults);!a.isFunction(b)&&a.isPlainObject(b)&&b!=null?e=a.extend({},b):a.isFunction(b)&&(e.callback=b);a.isArray(b)&&(e.numberOfTweets=b);if(!a.isFunction(c)&&a.isPlainObject(c)&&c!=null){e=a.extend({},c);e.username=b}else if(a.isFunction(c)){e.callback=c;e.username=b}else if(!a.isFunction(d)&&a.isPlainObject(d)&&d!=null){e=a.extend({},d);e.numberOfTweets=c;e.username=b}else{var e={};e.username=b;e.numberOfTweets=c;e.callback=d;e.totalTweets=c}a.isArray(c)?e.totalTweets=Math.max(e.numberOfTweets[0],e.numberOfTweets[1])+1:e.totalTweets=c;var f=a.extend({},a.getTweet.defaults,e),g="http://api.twitter.com/1/statuses/user_timeline/"+f.username+".json?count="+f.totalTweets+"&callback=?";a.getJSON(g,function(b){returnval=[];a.getTweet.api=b;if(f.numberOfTweets>1&&!a.isArray(f.numberOfTweets))a.each(b,function(a,b){returnval[a]=b.text});else if(f.numberOfTweets==1&&!a.isArray(f.numberOfTweets))returnval[0]=b[0].text;else{var c=f.numberOfTweets[0],d=b.length-1;if(c>d){d=f.numberOfTweets[0];c=f.numberOfTweets[1];var e=!0}var g=c;for(var g=c;g<=d;g++)b[g]&&(returnval[g-c]=b[g].text);e&&(returnval=returnval.reverse())}f.callback!=""&&a.isFunction(f.callback)&&f.callback(returnval)})}})(jQuery);(function(a){var b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(c){function d(){var b=a(m),d=a(n);g&&(n.length?g.reject(i,b,d):g.resolve(i));a.isFunction(c)&&c.call(f,i,b,d)}function e(c){var f=c.target;f.src===b||-1!==a.inArray(f,l)||(l.push(f),"error"===c.type?n.push(f):m.push(f),a.data(f,"imagesLoaded",{event:c.type,src:f.src}),h&&g.notify(i.length,l.length,m.length,n.length),0>=--k&&(setTimeout(d),i.unbind(".imagesLoaded",e)))}var f=this,g=a.isFunction(a.Deferred)?a.Deferred():0,h=a.isFunction(g.notify),i=f.find("img").add(f.filter("img")),k=i.length,l=[],m=[],n=[];k||d();i.bind("load.imagesLoaded error.imagesLoaded",e).each(function(){var c=this.src,d=a.data(this,"imagesLoaded");d&&d.src===c?a(this).triggerHandler(d.event):(this.src=b,this.src=c)});return g?g.promise(f):f}})(jQuery);(function(a,b,c){var d={},e,f,g,h,i,j,k=0,l=400;d.hideThings=function(){a("#grid-wrap, #main-nav, #about-top #slide-down").hide();a(".curtain").css("opacity",0)};d.getWindowSize=function(){e=a(b).height();f=a(b).width()};d.setArticleSize=function(){e>720?a("article.main").css({height:e}):a("article.main").css({height:"719px"});f>1023?a("article.main").css({width:f}):a("article.main").css({width:"1024px"})};d.spaceContent=function(){a("#home-loader").each(function(b,c){var d=a(this).outerHeight();a(this).css({"margin-top":(e-d)/2})});a(".grid-box").css({"padding-left":(f-238*Math.floor((f-80)/238))/2})};d.showGrid=function(){a(".content").fadeOut(l*.5);a("#grid-wrap").fadeIn(l)};d.hideGrid=function(){a(".content").fadeIn(l*.5);a("#grid-wrap").fadeOut(l);a("article .curtain").stop().animate({opacity:0},l)};d.exactURL=function(a){return a.replace(/"/g,"").replace(/url\(|\)$/ig,"")};d.panels=function(b){var c=a(b+" .item-content .panel");c.css({height:e,width:f});a(b+" .item-content").each(function(b,c){var d=a(c);d.find(".panel-content").each(function(b,c){var d=a(c).outerHeight();a(c).css("margin-top",(e-d)/2)});var g='<div class="prev-panel"></div><div class="next-panel"></div>',h='<div class="close-panel-wrap"><div class="close-panel hide-content">Close Case Study</div></div>';d.prepend(g).append(h);var i=d.find(".panel").length;d.children(".panel-slider").width(f*i);var j=0;a(".prev-panel").on("click",function(b){if(j!==0){j--;a(b.target).siblings(".panel-slider").stop().animate({"margin-left":f*-1*j},1e3)}else{j=i-1;a(b.target).siblings(".panel-slider").stop().animate({"margin-left":(i-1)*f*-1},1e3)}});a(".next-panel").on("click",function(b){if(j<i-1){j++;a(b.target).siblings(".panel-slider").stop().animate({"margin-left":f*-1*j},1e3)}else{a(b.target).siblings(".panel-slider").stop().animate({"margin-left":"0px"},1e3);j=0}})});a(".prev-panel, .next-panel").css("top",(e-73)/2);a(".hide-content").on("click",function(b){a(b.target).parents("article.main").find(".curtain").stop().animate({opacity:0},500);a(b.target).parents("article.main").find(".content").fadeIn()})};d.nextProject=function(c,d){i=a(b).scrollTop();j=i/e;j=Math.floor(j);c=a("article.main:eq("+(j+1)+")");d=a(c).offset().top;a("html,body").stop().animate({scrollTop:d},350)};d.prevProject=function(c,d){i=a(b).scrollTop();j=i/e;j=Math.floor(j);c=a("article.main:eq("+(j-1)+")");d=a(c).offset().top;a("html,body").stop().animate({scrollTop:d},350)};d.sizeContent=function(){var b=a("#about-top .large").outerHeight(),c=a(".contact .contact-us").outerHeight();a("#about-top, .contact").css({height:e+"px"});a("#about-top .full-wrap").css({"padding-top":(e-b)/2});a(".contact .dots").css({"padding-top":(e-c)/2});a(".panel").css({width:f})};a(document).ready(function(){a("#main-nav div.nav-item").on("click",function(c){var d=a(c.target).attr("data-target"),e=a(d).offset(),f=e.top-58,g=a(b).scrollTop(),h=Math.abs(g-f)/5;a("html,body").stop().animate({scrollTop:f},h,"linear")});a("div#slide-up").on("click",function(){a("article.current").stop().animate({top:-e-100},300)});a(".activate-case-study").on("click",function(b){var c=a(b.target).parents("article"),e=a(c).attr("id");d.panels("#"+e);var f=c.offset().top;a("html,body").stop().animate({scrollTop:f},500);var g=a(b.target);a(".panel-slider").css("margin-left",0);a("article .content").fadeIn(500);a("article .curtain").stop().animate({opacity:0},250);g.parents(".content").fadeOut();g.parents("article").find(".curtain").animate({opacity:1},500)});var f="";a("#grid-btn").on("click",function(b){b.preventDefault();if(a(b.target).hasClass("active")){a(b.target).removeClass("active");d.hideGrid()}else{a(b.target).addClass("active");d.showGrid()}});a("article.main.project").each(function(b,c){a(c).append('<div class="dots"></div>');var e=d.exactURL(a(c).css("background-image")),f=a(c).attr("title"),g=a(c).attr("id");e=e.replace(".jpg","");a(".grid-box").append('<a class="grid-item" data-article-id="'+g+'"><img src="'+e+'-thumb.jpg"><div class="article-title">'+f+"</div></a>")});a(".grid-box").on("click",function(b){b.preventDefault();a("#grid-btn").removeClass("active");if(a(b.target).is("a"))var e=a("#"+a(b.target).data("article-id")).offset().top;else if(a(b.target).closest("a").data("article-id")!="")var e=a("#"+a(b.target).closest("a").data("article-id")).offset().top;e!==c&&a("html,body").stop().animate({scrollTop:e});d.hideGrid()});a("a#close-grid").on("click",function(b){b.preventDefault();a("#grid-btn").removeClass("active");d.hideGrid()});a("#slide-nav #slide-down").on("click",function(a){a.preventDefault();d.nextProject()});a("#slide-up").on("click",function(a){a.preventDefault();d.prevProject()});d.hideThings();d.getWindowSize();d.setArticleSize();d.sizeContent();d.spaceContent();a(".tweet-text").getTweet({username:"whiteboardis"});a(".content .box").each(function(b,c){a(c).imagesLoaded(function(){var b=a(c).outerHeight();a(this).css({"margin-top":(e-b)/2})})});a("#about-top #slide-down").delay(1e3).fadeIn(350);a("#about-top #slide-down").on("click",function(b){var c=a("#directive").offset().top;b.preventDefault();a("html,body").stop().animate({scrollTop:c-60},350)})});a(b).on("resize",function(){d.getWindowSize();d.setArticleSize();d.sizeContent();d.spaceContent()});a(b).on("scroll",function(){var c=a(b).scrollTop();c>e-100?a("nav#main-nav").fadeIn(500):a("nav#main-nav").fadeOut(500)})})(jQuery,window);