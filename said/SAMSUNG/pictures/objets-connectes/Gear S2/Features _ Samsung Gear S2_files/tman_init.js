var site_url = document.URL;
var split_url;
var site_cd;
try {
	split_url = site_url.split("/");
	site_cd = split_url[3];		
} catch(e) {
	site_cd = "us";	
}
var arrSiteCode = new Array("ar", "au", "at", "be_fr", "be", "br", "ca_fr", "ca", "cl", "cn", "co", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hk_en", "hk", "hu", "in", "id", "iran", "ie", "il", "it", "jp", "kz_ru", "sec", "lv", "lt", "my", "mx", "nl", "nz", "no", "latin", "pe", "ph", "pl", "pt", "ru", "sa_en", "sg", "sk", "za", "es", "se", "ch_fr", "ch", "tw", "th", "tr", "us", "ae", "ua", "ua_ru", "vn", "uk", "global", "eu", "ro", "baltic","mea_ar","mea_en","n_africa","africa_en","ae_ar","bg","rs","hr","africa_fr","africa_pt","latin_en","ve","pk","levant","eg","sa");
var arrCurrencyCode = new Array("ARS", "AUD", "EUR", "EUR", "EUR", "BRL", "CAD", "CAD", "CLP", "CNY", "COP", "CZK", "DKK", "EEK", "EUR", "EUR", "EUR", "EUR", "HKD", "HKD", "HUF", "INR", "IDR", "IRR", "EUR", "ILS", "EUR", "JPY", "KZT", "KRW", "LVL", "LTL", "MYR", "MXN", "ANG", "NZD", "NOK", "PAB", "PEN", "PHP", "PLN", "EUR", "RUB", "SAR", "SGD", "SKK", "ZAR", "EUR", "SEK", "CHF", "CHF", "TWD", "THB", "TRY", "USD", "AED", "UAH", "UAH", "VND", "GBP", "USD", "EUR", "ROL", "USD","USD","USD","USD","USD","AED","BGN","HRK","RSD","USD","USD","PAB","VEB","USD","USD","USD","USD"); 
var currencyCode = "";
try {
	for (var i=0; i<arrSiteCode.length; i++) {
		if (site_cd == arrSiteCode[i]) {
			currencyCode = arrCurrencyCode[i];
			break;
		}
	}
} catch(e) {
	currencyCode = "EUR";
}
var arrLangCode = new Array("es", "en", "de", "fr", "nl", "pt", "fr", "en", "es", "zh1", "es", "cs", "da", "et", "fi", "fr", "de", "el", "en", "zh2", "hu", "en", "id", "fa", "en", "he", "it", "ja", "ru", "ko", "lv", "lt", "en", "es", "nl", "en", "no", "es", "es", "en", "pl", "pt", "ru", "en", "en", "sk", "en", "es", "sv", "fr", "de", "zh", "th", "tr", "en", "en", "uk", "ru", "en", "vi", "en", "en", "en", "ro", "en","ar","en","fr","en","ar","bg","sr","hr","fr","pt","en","es","en","en","ar","ar");
var arrSiteCode = new Array("ar", "au", "at", "be_fr", "be", "br", "ca_fr", "ca", "cl", "cn", "co", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hk_en", "hk", "hu", "in", "id", "iran", "ie", "il", "it", "jp", "kz_ru", "sec", "lv", "lt", "my", "mx", "nl", "nz", "no", "latin", "pe", "ph", "pl", "pt", "ru", "sa_en", "sg", "sk", "za", "es", "se", "ch_fr", "ch", "tw", "th", "tr", "us", "ae", "ua", "ua_ru", "gb", "vn", "uk", "global", "eu", "ro", "baltic","mea_ar","mea_en","n_africa","africa_en","ae_ar","bg","rs","hr","africa_fr","africa_pt","latin_en","ve","pk","levant","eg","sa"); 
var langCode = "";
for (var i=0; i<arrSiteCode.length; i++) {
	if (site_cd == arrSiteCode[i]) {
		langCode = arrLangCode[i];
		break;
	}
}
var URL = unescape(window.location.href.replace( "http://", "" ));
var SplitedURL = URL.split("?")[0].split("/");

(function (w) {
	w.tm2BootPosition = 0;
	w.tm2BootAsync = true;
	w.tmPageId = 6;
	w.tmParam = {country : site_cd,currency : currencyCode,detail_url : site_url,language : langCode};
	
	var phost;
	if (site_cd=="uk" || site_cd=="fr" || site_cd=="sec")
		phost = "pfa.levexis.com";
	else
		phost = "xxx.xxx.xxx";
	
	var conf = { host: phost,
		account: 'samsungfr',
		version: '3',
		async: true,
		cdn: (location.protocol === 'https:') ? 'sec.levexis.com' : 'res.levexis.com',
		waitService: 'wt.tagman.com',
		waitTest: false,
		bootstrap: true,
		param: w.tmParam || {} };
	// do not change values below this line
	function ap(sr , ol) {
		 var e = document.createElement('script'); 
	     e.src = sr;
	     e.async = true;
	     if (ol) {
	    	e.onload = e.onerror = function() { if (!this.loaded) { ol(); this.loaded = true; } };
			e.onreadystatechange = function() { if (this.readyState === 'complete' || this.readyState === 'loaded') { this.onload(); } };
	     }
	     var s = document.getElementsByTagName('script')[0];
		 s.parentNode.insertBefore( e , s);
	}	
	w.TMAN = w.TMAN || {};	
     	w.TMAN.startTime = +new Date();
	w.TMAN.asyncLoader = function() {
	      TMAN.addContainer( new TMAN.Container(conf.account, w.tmPageId, conf) );
	};
	 var tm = '//' + conf.cdn + '/clientfiles/v' + conf.version + '/' + conf.account + '.js'; 
	if (conf.waitService && conf.waitTest) ap ( '//' + conf.waitService + '/wait/0/' + Math.random() , function() { TMAN.waitLatency=new Date() - TMAN.startTime; } );
	if (conf.async) {
	     w.TMAN.position = {};
	     w.TMAN.doTags = function(p) { TMAN.currentPosition = p; };
	     w.TMAN.addParam = function(n,v) {
                               w.tmParam[n]=v;
                    };
             w.TMAN.addParams = function(c,p) {
               for (var n in p) {
                 w.tmParam[n] = p[n];
               }
             };
                    ap(tm);               
	} else {
		document.write('<script src="' + tm + '"><\/script>');   			 
	}
})(window);
