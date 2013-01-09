//console.log('here');
s = document.createElement("script");
s.src="http://local.webservices/components/com_emc_origin/assets/js/emcOrigin.min.js";
if(s.addEventListener) {
  s.addEventListener("load",callback,false);
} 
else if(s.readyState) {
  s.onreadystatechange = callback;
}
document.body.appendChild(s);
function callback() {
	emcOriginIframe.init();
	}
	