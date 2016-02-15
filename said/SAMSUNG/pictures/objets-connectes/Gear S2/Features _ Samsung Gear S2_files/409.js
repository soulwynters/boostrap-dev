function error(msg) {
  var version = "2.6.1";
  var now = new Date();
  var dUrl = '';
  if (top === self) dUrl = window.location.href;
  else dUrl = document.referrer;
  if (dUrl === "") dUrl = parent.document.location.href;
  var content = [now, version, msg, dUrl].join('|');
  content += '|' + navigator.userAgent;
  var errorUrl = "//its.tradelab.fr/?type=debug&content=" + encodeURIComponent(content);
  var img = new Image();
  img.src = errorUrl;
  if ( typeof console != "undefined" ) console.log(content);
}
try { 
(function(){

var hasTM = true;
if (typeof tldc == 'undefined') {
	window.tldc = {};
	hasTM = false;
}
if ( typeof tldc.params == 'undefined') tldc.params = {};
if ( typeof tldc.params.fsegs == 'undefined') tldc.params.fsegs = {};
if ( typeof tldc.advid == 'undefined' ) tldc.advid = '';
if ( typeof tldc.funnelSegments == 'undefined' ) tldc.funnelSegments = {};
if ( typeof tldc.funnelSegments['409'] == 'undefined' ) {
	tldc.funnelSegments['409'] = [];
	var n=0;
	tldc.funnelSegments['409'][n++] = { 'seg':'2560062', 	'step':4, 'ievs':'2560061', 'conv':'504295' };
	tldc.funnelSegments['409'][n++] = { 'seg':'3584546', 	'step':4, 'ievs':'2560061', 'conv':'0' };
	tldc.funnelSegments['409'][n++] = { 'seg':'2652116', 	'step':4, 'ievs':'2560061', 'conv':'0' };

}

tl_async_loader=function(b){function d(a,c){var d=b.createElement(a),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function e(){var a=navigator.userAgent;f={async:!0===b.createElement("script").async};(f.webkit=/AppleWebKit\//.test(a))||(f.ie=/MSIE|Trident/.test(a))||(f.opera=/Opera/.test(a))||(f.gecko=/Gecko\//.test(a))||(f.unknown=!0)}function a(k,m,q,t,u){var v=function(){var b=g[k],c,d;b&&(c=b.callback,d=b.urls,d.shift(),pollCount=0,d.length||(c&&c.call(b.context,b.obj),g[k]=
null,n[k].length&&a(k)))},r=[],h,p,l,w;f||e();if(m)if(m="string"===typeof m?[m]:m.concat(),f.async||f.gecko||f.opera)n[k].push({urls:m,callback:q,obj:t,context:u});else for(h=0,p=m.length;h<p;++h)n[k].push({urls:[m[h]],callback:h===p-1?q:null,obj:t,context:u});if(!g[k]&&(w=g[k]=n[k].shift())){c||(c=b.head||b.getElementsByTagName("head")[0]);m=w.urls.concat();h=0;for(p=m.length;h<p;++h)q=m[h],l=d("script",{src:q}),l.async=!1,l.className="lazyload",l.setAttribute("charset","utf-8"),f.ie&&"onreadystatechange"in
l&&!("draggable"in l)?l.onreadystatechange=function(){/loaded|complete/.test(l.readyState)&&(l.onreadystatechange=null,v())}:l.onload=l.onerror=v,r.push(l);h=0;for(p=r.length;h<p;++h)c.appendChild(r[h])}}var f,c,g={},n={js:[]};return{js:function(b,c,d,e){a("js",b,c,d,e)}}}(this.document);function tl_getStoredStep(b){return"undefined"==typeof tldc.params.fsegs?0:"undefined"==typeof tldc.params.fsegs[b]?0:tldc.params.fsegs[b]}
function tl_storeStep(b,d){tldc.params.fsegs[d]=b;"function"===typeof tldc.tl_setParamsCookie&&tldc.tl_setParamsCookie(tldc.params)}function getFunnelStepData(b,d){for(var e={},a=0;a<d.length;a++){var f=d[a];if(f.seg==b)return e.step=f.step,e.i=a,e}return{step:!1,i:!1}}function insertInDom(b){var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}
function firePixel(b,d){var e=document.createElement("img"),a;e.style.position="absolute";e.style.height=0;e.style.width=0;a=document.location.protocol;a="https:"===a?a+"//secure.adnxs.com/":a+"//ib.adnxs.com/";e.src="undefined"==typeof d?a+"seg?add="+b+"&t=2":a+"seg?add="+b+":"+d+"&t=2";insertInDom(e)}function contains(b,d){for(var e=b.length;e--;)if(b[e]===d)return!0;return!1}
function tl_getLocation(){var b="",b=top===self?window.location.href:document.referrer;""===b&&(b=parent.document.location.href);return b}
function fireFSEGVal(b,d,e,a,f,c){var g=document.createElement("img"),n=navigator.userAgent,k=tl_getLocation();"undefined"===typeof tldc.tl_getAnalyticsData&&"function"===typeof tl_getAnalyticsData&&(tldc.tl_getAnalyticsData=tl_getAnalyticsData);c=c?"&isregen=1&ua="+encodeURIComponent(encodeURIComponent(n))+"&ur="+encodeURIComponent(encodeURIComponent(k)):"&isregen=0&ua="+encodeURIComponent(encodeURIComponent(n))+"&ur="+encodeURIComponent(encodeURIComponent(k));"function"===typeof tldc.tl_getAnalyticsData&&
(c+="&adata="+tldc.tl_getAnalyticsData());g.style.position="absolute";g.style.height=0;g.style.width=0;g.src="object"==typeof tldc.ses&&"string"==typeof tldc.ses.uuid2&&""!=tldc.ses.uuid2?"//its.tradelab.fr/?type=fseg&uuid2="+tldc.ses.uuid2+"&sid="+b+"&val="+d+"&fun="+f+"&step="+a+"&iev="+e+"&fp="+fingerprint+"&advid="+tldc.advid+c:"//ib.adnxs.com/getuid?//its.tradelab.fr/?type=fseg&uuid2=$UID&sid="+b+"&val="+d+"&fun="+f+"&step="+a+"&iev="+e+"&fp="+fingerprint+"&advid="+tldc.advid+c;insertInDom(g)}
function processFunnelSegVal(b,d,e,a){if(!1===hasTM)void 0!==b&&firePixel(b,d);else{var f=getFunnelStepData(b,a),c=f.i,f=f.step,g=getFunnelStepData(tl_getStoredStep(e),a).step;!1===g||g<=f?("0"!=a[c].conv?tl_async_loader.js("//cdn.tradelab.fr/conv/"+a[c].conv+".js",function(){"undefined"!=typeof a[c].seg&&(firePixel(a[c].seg,d),hasTM&&fireFSEGVal(a[c].seg,d,a[c].ievs,a[c].step,e,!1))}):"undefined"!=typeof a[c].seg&&(firePixel(a[c].seg,d),hasTM&&fireFSEGVal(a[c].seg,d,a[c].ievs,e,!1)),tl_storeStep(b,
e)):"0"!=a[c].conv?tl_async_loader.js("//cdn.tradelab.fr/conv/"+a[c].conv+".js",function(){"undefined"!=typeof a[c].seg&&firePixel(a[c].seg,d)}):"undefined"!=typeof a[c].seg&&firePixel(a[c].seg,d);return!0}};

var qs = {},
		fingerprint = '0';
if (typeof tldc.tlfseg == 'undefined') tldc.tlfseg = {};
var scriptTags = document.getElementsByTagName("script");
for (var i = 0; i < scriptTags.length; i++) {
  var scriptTag = scriptTags[i],
      ssrc = scriptTag.getAttribute("src");
  //console.log('src:'+scriptTag.getAttribute("src"));
  if (undefined !== ssrc && null !== ssrc && ssrc.indexOf('fseg') !== -1 && ssrc.indexOf('409.js') !== -1) {  	
  	ssrc.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
	    qs[$1] = $3;
	  });
	  //console.log('qs.add:'+qs.add);
    if ( typeof qs.add != 'undefined' ) {
    //console.log('tlfseg:'+JSON.stringify(tldc.tlfseg));
    	if ( typeof tldc.tlfseg[qs.add] === 'undefined' ) {	    		  		
    		if ( processFunnelSegVal(qs.add,qs.val,'409',tldc.funnelSegments['409']) ) tldc.tlfseg[qs.add] = 1;  
    	}
    }
  }
}

})();

} catch(err) { error('fseg|'+err.message); }