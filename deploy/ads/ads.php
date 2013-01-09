<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	</head>
	<body>
		<?php
		switch($_GET['type']) {
			case 'ascend':
				$ad		= "<script type='text/javascript'>(function(){function d(a){top===self?emcOriginCreate.init(e,emcOriginParams30,a):(a='http://'+document.referrer.split('/')[2]+'/',window.name=encodeURIComponent(JSON.stringify(emcOriginParams30)),window.location=a+'emcOriginIframe/emcOriginIframe.html?'+encodeURIComponent(e))}var a=document.createElement('script'),b=document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1],e='http://local.origin_prod/index.php?option=com_emc_origin&view=ascend&format=raw&id=30&debug=1';a.src='http://local.origin_prod/components/com_emc_origin/assets/js/emcOrigin.js';a.id='emcOriginScript';window.emcOriginFlag='undefined'===typeof window.emcOriginFlag?!0:!1;emcOriginParams30={'emcOriginDomain': 'local.origin_prod', 'bgHex':'#ffffff','auto':'0','close':'0','hover':'0','clickthru1':'/','clickthru2':'/','clickthru3':'/','clickthru4':'/','clickthru5':'/'};if('undefined'!=typeof emcOriginParamsOverride)for(var c in emcOriginParamsOverride)emcOriginParamsOverride[c]&&(emcOriginParams30[c]=emcOriginParamsOverride[c]);window.emcOriginFlag&&b.parentNode.insertBefore(a,b);a.addEventListener?document.getElementById('emcOriginScript').addEventListener('load',function(){d(b)},!1):a.readyState&&(a.onreadystatechange=function(){'loaded'===a.readyState&&d(b)})})();</script>";
				break;
			case 'horizon':
				$ad 	= "<script type='text/javascript'>(function(){function d(a){top===self?emcOriginCreate.init(e,emcOriginParams10,a):(a='http://'+document.referrer.split('/')[2]+'/',window.name=encodeURIComponent(JSON.stringify(emcOriginParams10)),window.location=a+'emcOriginIframe/emcOriginIframe.html?'+encodeURIComponent(e))}var a=document.createElement('script'),b=document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1],e='http://local.origin_prod/index.php?option=com_emc_origin&view=horizon&format=raw&id=10&debug=1';a.src='http://local.origin_prod/components/com_emc_origin/assets/js/emcOrigin.js';a.id='emcOriginScript';window.emcOriginFlag='undefined'===typeof window.emcOriginFlag?!0:!1;emcOriginParams10={'emcOriginDomain': 'local.origin_prod', 'bgHex':'#636363','auto':'0','close':'0','hover':'0','clickthru1':'/','clickthru2':'/','clickthru3':'/','clickthru4':'/','clickthru5':'/'};if('undefined'!=typeof emcOriginParamsOverride)for(var c in emcOriginParamsOverride)emcOriginParamsOverride[c]&&(emcOriginParams10[c]=emcOriginParamsOverride[c]);window.emcOriginFlag&&b.parentNode.insertBefore(a,b);a.addEventListener?document.getElementById('emcOriginScript').addEventListener('load',function(){d(b)},!1):a.readyState&&(a.onreadystatechange=function(){'loaded'===a.readyState&&d(b)})})();</script>";
				break;
			case 'meridian':
				$ad		= "<script type='text/javascript'>(function(){function d(a){top===self?emcOriginCreate.init(e,emcOriginParams31,a):(a='http://'+document.referrer.split('/')[2]+'/',window.name=encodeURIComponent(JSON.stringify(emcOriginParams31)),window.location=a+'emcOriginIframe/emcOriginIframe.html?'+encodeURIComponent(e))}var a=document.createElement('script'),b=document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1],e='http://local.origin_prod/index.php?option=com_emc_origin&view=meridian&format=raw&id=31&debug=1';a.src='http://local.origin_prod/components/com_emc_origin/assets/js/emcOrigin.js';a.id='emcOriginScript';window.emcOriginFlag='undefined'===typeof window.emcOriginFlag?!0:!1;emcOriginParams31={'emcOriginDomain': 'local.origin_prod', 'bgHex':'#ffffff','auto':'0','close':'0','hover':'0','clickthru1':'/','clickthru2':'/','clickthru3':'/','clickthru4':'/','clickthru5':'/'};if('undefined'!=typeof emcOriginParamsOverride)for(var c in emcOriginParamsOverride)emcOriginParamsOverride[c]&&(emcOriginParams31[c]=emcOriginParamsOverride[c]);window.emcOriginFlag&&b.parentNode.insertBefore(a,b);a.addEventListener?document.getElementById('emcOriginScript').addEventListener('load',function(){d(b)},!1):a.readyState&&(a.onreadystatechange=function(){'loaded'===a.readyState&&d(b)})})();</script>";
				break;
			case 'nova':
				$ad		= "<script type='text/javascript'>(function(){function d(a){top===self?emcOriginCreate.init(e,emcOriginParams27,a):(a='http://'+document.referrer.split('/')[2]+'/',window.name=encodeURIComponent(JSON.stringify(emcOriginParams27)),window.location=a+'emcOriginIframe/emcOriginIframe.html?'+encodeURIComponent(e))}var a=document.createElement('script'),b=document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1],e='http://local.origin_prod/index.php?option=com_emc_origin&view=nova&format=raw&id=27&debug=1';a.src='http://local.origin_prod/components/com_emc_origin/assets/js/emcOrigin.js';a.id='emcOriginScript';window.emcOriginFlag='undefined'===typeof window.emcOriginFlag?!0:!1;emcOriginParams27={'emcOriginDomain': 'local.origin_prod', 'bgHex':'#ffffff','auto':'0','close':'0','hover':'0','clickthru1':'/','clickthru2':'/','clickthru3':'/','clickthru4':'/','clickthru5':'/'};if('undefined'!=typeof emcOriginParamsOverride)for(var c in emcOriginParamsOverride)emcOriginParamsOverride[c]&&(emcOriginParams27[c]=emcOriginParamsOverride[c]);window.emcOriginFlag&&b.parentNode.insertBefore(a,b);a.addEventListener?document.getElementById('emcOriginScript').addEventListener('load',function(){d(b)},!1):a.readyState&&(a.onreadystatechange=function(){'loaded'===a.readyState&&d(b)})})();</script>";
				break;
			default:
				$ad		= "";
				break;
		}
		
		echo $ad;
		?>
	</body>
</html> 