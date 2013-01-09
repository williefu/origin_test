var JSON;JSON||(JSON={});
(function(){function k(a){return 10>a?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+b;
case "object":if(!b)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+
e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,j,c){var d;l=e="";if(typeof c==="number")for(d=0;d<c;d=d+1)l=l+" ";else typeof c==="string"&&(l=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return m("",
{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)){f=c(b,g);f!==void 0?b[g]=f:delete b[g]}return e.call(a,d,b)}var d,a=""+a;q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof e==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();

var XD=function(){var e,g,h=1,f,d=this;return{postMessage:function(c,b,a){b&&(a=a||parent,d.postMessage?a.postMessage(c,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(a.location=b.replace(/#.*$/,"")+"#"+ +new Date+h++ +"&"+c))},receiveMessage:function(c,b){if(d.postMessage)if(c&&(f=function(a){if("string"===typeof b&&a.origin!==b||"[object Function]"===Object.prototype.toString.call(b)&&!1===b(a.origin))return!1;c(a)}),d.addEventListener)d[c?"addEventListener":"removeEventListener"]("message",f,!1);
else d[c?"attachEvent":"detachEvent"]("onmessage",f);else e&&clearInterval(e),e=null,c&&(e=setInterval(function(){var a=document.location.hash,b=/^#?\d+&/;a!==g&&b.test(a)&&(g=a,c({data:a.replace(b,"")}))},100))}}}();

//Preventing multiple instances
if(!emcWebsvc) {
var emcWebsvc	= function() {
	
	var emcDomain	= 'http://local.template_razor_websvc';
		
	var brandedCanvas = {
		init: function() {
			//Get expanded iframe ready
			emcExpand				= document.createElement('iframe');
			emcExpand.id			= emcId;
			emcExpand.style.position= 'absolute';
			emcExpand.style.top		= '0px';
			emcExpand.style.left	= '0px';
			emcExpand.style.zIndex  = '999999';
			emcExpand.style.width	= '100%';
			emcExpand.style.height	= '100%';
			emcExpand.scrolling		= 'no';
			emcExpand.frameBorder	= 0;
		},
		close: function(config) {
			document.getElementById(config.emcId).parentNode.removeChild(document.getElementById(config.emcId));
			//document.body.style.overflow	= 'auto'	
		},
		expand: function(config) {
			emcExpand.src			= config.url + '#' + encodeURIComponent(document.location.href);
			document.body.appendChild(emcExpand);
			//document.body.style.overflow	= 'hidden';
		}
	};
	
	var razor = {
		animateClose: function(selector, start, end, time) {
			var i 		= start,
				speed	= (start - end)/(time * 20),
				animation = setInterval(function() {
					i 	= Math.min(start, i - speed);
					selector.height = i + 'px';
					document.body.style.backgroundPosition = '50% '+i+'px';
					if(i <= end) clearInterval(animation);
				}, 30);
		},
		animateOpen: function(selector, start, end, time) {
			var i 		= start,
				speed 	= (end - start)/(time * 20),
				animation = setInterval(function() {
					i 	= Math.min(end, i + speed);
					selector.height = i + 'px';
					document.body.style.backgroundPosition = '50% '+i+'px';
					if (i >= end) clearInterval(animation);
				}, 30);
		},
		init: function(emcId, emcLink) {
			emcClose				= document.createElement('iframe');
			emcClose.id				= emcId;
			emcClose.src			= emcLink;
			emcClose.width			= '970px';
			emcClose.height			= '50px';
			emcClose.style.margin	= '0px auto';
			emcClose.style.display	= 'block';
			emcClose.scrolling		= 'no';
			emcClose.frameBorder	= 0;
			
			//Move razor unit to top
			document.body.insertBefore(emcClose, document.body.firstChild);
			
			//Adjust background
			document.body.style.backgroundPosition = '50% 50px';
		},
		close: function(config) {
			emcRazor				= document.getElementById(config.emcId);
			razor.animateClose(emcRazor, 250, 50, .4);
		},
		expand: function(config) {
			emcRazor				= document.getElementById(config.emcId);
			razor.animateOpen(emcRazor, 50, 250, .25);
		}
	};

	//Listener
	XD.receiveMessage(function(message) {		
		message		= JSON.parse(message.data);
		//console.log(message);
		
		switch(message.type) {
			case 'brandedCanvas': 	brandedCanvas[message.event](message);
									break;
			case 'razor':			razor[message.event](message);
									break;
		}
		
	}, emcDomain);
	
	
	
	return {
		init: function(emcType, emcId, emcLink) {
			//setup ad units
			switch(emcType) {
				case 'brandedCanvas':	brandedCanvas.init();
										break;
				case 'razor':			razor.init(emcId, emcLink);
										break;
			}
			
			/*
			var emcLink		= 'http://local.template_razor_websvc/brandedCanvas/collapsed.php';
					var emcType		= 'brandedCanvas';
			*/
		}
	};
}();
}