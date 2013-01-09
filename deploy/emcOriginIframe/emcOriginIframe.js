var originIframe = (function() {
	return {
		init: function() {
			var originParams 	= JSON.parse(decodeURIComponent(window.name));
			var emcOrigin		= document.createElement('script');
				emcOrigin.id	= 'emcOrigin';
				emcOrigin.src	= 'http://local.origin_test/emcOrigin/originRender.js';
				emcOrigin.setAttribute('data-init', 'true');
			for(var i in originParams) {
				emcOrigin.setAttribute('data-'+i, originParams[i]);
			}
		
			switch(originParams.dcopt) {
				case 'false':
					frameElement.parentNode.insertBefore(emcOrigin, frameElement);
					frameElement.parentNode.removeChild(frameElement);
					break;
				case 'true':
					window.top.document.body.appendChild(emcOrigin);
					break;
			}	
		}
	}
})();
		