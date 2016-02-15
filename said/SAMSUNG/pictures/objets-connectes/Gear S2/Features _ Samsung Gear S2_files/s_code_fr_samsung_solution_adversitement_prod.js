/* SiteCatalyst code version: H.24.4.
Copyright 1996-2012 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

var s_account_adv="sssamsungadvcrmfrdev"; 	// Replace by dev reportsuite ID
var s_adv=s_gi(s_account_adv)

s_adv.eVar75="s_code 2015-09-29 prod FR";
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s_adv.charSet="UTF-8"
/* Conversion Config */
s_adv.currencyCode="EUR"
/* Link Tracking Config */
s_adv.trackDownloadLinks=true;
s_adv.trackExternalLinks=true;
s_adv.trackInlineStats=false ;

s_adv.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s_adv.linkInternalFilters="javascript:,samsung.com/fr/,mobileadvance.samsung.fr,it-advance.samsung.fr,advance.samsung.fr,compte.samsung.fr,promos.samsung.fr,mysamsung.fr,samsung.where-to-buy.fr,samsung.fr,account.samsung.com,shop.samsung.com"
s_adv.linkLeaveQueryString=true
s_adv.linkTrackVars="prop1,prop7"
s_adv.linkTrackEvents="None"
s_adv.usePlugins=true;
s_adv.dynamicAccountSelection=true
s_adv.dynamicAccountMatch=window.location.host+window.location.pathname
s_adv.dynamicAccountList="sssamsungadvcrmfrdev=p3.samsung.com,stgweb4.samsung.com,stg-kr.shop.samsung.com;sssamsungadvcrmfr=samsung.com/fr/,mobileadvance.samsung.fr,it-advance.samsung.fr,advance.samsung.fr,compte.samsung.fr,promos.samsung.fr,samsung.where-to-buy.fr,samsung.fr,mysamsung.fr,account.samsung.com,shop.samsung.com"; 

s_setTimeOutDelay = 500; //in ms

s_adv.visitorNamespace="Samsung CRM"
s_adv.trackingServer="nmetrics.samsung.com";
s_adv.trackingServerSecure="smetrics.samsung.com";
/*
s_adv.trackingServer="wa.mysite.com" // INSERT 1st Party COOKIE DETAILS
s_adv.trackingServerSecure="swa.mysite.com" // INSERT 1st Party COOKIE DETAILS
*/

// Form Analysis Config 
s_adv.formList="accountSelectionForm,accountOpeningForm"

s_adv.trackFormList=true
s_adv.trackPageName=true
s_adv.useCommerce=true
s_adv.varUsed="eVar17"
s_adv.eventList="event8" //Abandon

s_trackPV=true;
advjsTrackFlag = true;

if(typeof s_pName != "undefined" && s_pName==""){
	advjsTrackFlag = false
}
if(typeof s_siteTitle != "undefined" && s_siteTitle != ""){
	advjsTrackFlag=false;
}

if (typeof s_deliveryMethod != "undefined")
	s_deliveryMethod = "";

function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	  return getCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break; 
  }
  return null;
}	

function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
	endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function s_trackECMP(){

	// External Campaign
	s_adv.campaign=s_adv.getValOnce(s_adv.getQueryParam("cid"), 's_campaign_adv', 0) 

	// Internal promotions
	s_adv.eVar8=s_adv.getValOnce(s_adv.getQueryParamA('pid'), 's_v8', 0) ;

	// Neolane campaign code
	s_adv.eVar10=s_adv.getValOnce(s_adv.getQueryParamA('nid'), 's_v10', 0) ;

	// Neolane user code
	s_adv.eVar11=s_adv.getValOnce(s_adv.getQueryParamA('uid'), 's_v11', 0) ;
	
	// Adversitement campaign code
	s_adv.eVar12=s_adv.getValOnce(s_adv.getQueryParamA('advid'), 's_v12', 0) ;

	// Campaign Bounce Rate Calculation
	s_adv.ctru1 = "2"
	if (s_adv.eVar12){
		s_adv.events=s_adv.addToList(s_adv.events,"event4");	// Campaign Click Through or 1st PV
		s_adv.ctru1 = "1"
		s_adv.prop4='D="EC|"+v12+"|"+c1';	// Pathing on campaign
		s_adv.eVar1=s_adv.eVar2="D=v12";	//Other Campaign allocation methodologies
		// Campaign Type
		if (s_adv.eVar12.indexOf("|")!=-1){
			pos_camp_type = s_adv.eVar12.indexOf("|");
			s_adv.eVar3 = s_adv.eVar12.substring(0,pos_camp_type).toUpperCase();
		}
		else{
		
		}
	}
	else if(s_adv.eVar8){
		s_adv.prop4='D="IC|"+v8+"|"+c1';
}


	// Warning: this code should always be outside the doplugin call as it could be called
	// at every clic onthe site and therefore disrupt the cookie values
	s_adv.ctru2 = s_adv.getPreviousValue(s_adv.ctru1, "s_ctru2", "");
	if (!s_adv.campaign && s_adv.ctru2 == "1") {
		s_adv.events=s_adv.addToList(s_adv.events,"event5");		// Campaign 2nd PV
	}

	/*s_adv.eVar5 = s_adv.crossVisitParticipation(s_adv.campaign,'s_cvp','30','5','>','event21,event22,event46'); // Campaign Stacking - 30 days, 5 values max, > separator
	s_adv.eVar6 = s_adv.crossVisitParticipation(s_adv.eVar3,'s_ctvp','30','5','>','event21,event22,event46'); // Campaign Type Stacking - 30 days, 5 values max, > separator
	*/
	
	// All landings
	s_adv.cvis1 = "2"
	if (s_adv.getVisitStart("s_vstart")=="1"){
		s_adv.eVar9 = "D=c1" // 1st page visited
		s_adv.events=s_adv.addToList(s_adv.events,"event2");		// Visit 1st PV
		s_adv.cvis1 = "1"
	}
	s_adv.cvis2 = s_adv.getPreviousValue(s_adv.cvis1, "s_cvis2", "");
	if (!s_adv.campaign && s_adv.cvis2 == "1") {
		s_adv.events=s_adv.addToList(s_adv.events,"event3");		// Visit 2nd PV
	}

}


function s_formatDateNumber(intNumber){
	if(intNumber<10)
		return "0" + intNumber
	else
		return ""+intNumber
}

function s_doPlugins(s) {


	// Date d'accès
	var tmp_Date=new Date();
	hop=tmp_Date.getTimezoneOffset();
	
	var tmp_curYear= tmp_Date.getFullYear();
	var tmp_curMonth= s_formatDateNumber(tmp_Date.getMonth()+1);
	var tmp_curDay= s_formatDateNumber(tmp_Date.getDate());
	var tmp_curHour= s_formatDateNumber(tmp_Date.getHours());

	s_adv.eVar4= tmp_curYear + "-" + tmp_curMonth + "-" + tmp_curDay + " " + tmp_curHour + ":00:00";
	
	s_adv.prop6=s_adv.getTimeParting("d","+1",tmp_curYear)+"-"+s.getTimeParting("h","+1",tmp_curYear);	// TimeParting (prop)
	
	
	//Product page view
	if( document.getElementById( "model_name" ) != undefined && document.getElementById( "model_name" ) != null && document.getElementById( "model_name" ).value != "" && location.href.indexOf("dealerlocator") == -1){
	s_adv.events="prodView,event17"
	s_product_code = document.getElementById( "model_name" ).value
	s_product_display_name = document.getElementById( "display_name" ).value
	s_product_group = document.getElementById( "group" ).value
	s_product_type = document.getElementById( "type" ).value
	s_product_subtype = document.getElementById( "subtype" ).value
	s_productID = document.getElementById( "model_code" ).value
	s_adv.eVar23 = s_product_code;
	s_adv.products=";"+s_productID;
	s_adv.eVar45 = s_productID+"|"+s_product_display_name+"|"+s_product_group+"|"+s_product_type+"|"+s_product_subtype;
		if(document.getElementById( "discontinued" ).value == "N"){
			s_adv.events=s_adv.addToList(s_adv.events,"event62"); // Shop product view
		}
	}
	
	//pvi project
	if( document.getElementById( "pvi_project_name" ) != undefined && document.getElementById( "pvi_project_name" ) != null && document.getElementById( "pvi_project_name" ).value != "" && location.href.indexOf("dealerlocator") == -1){
	s_pvi_project_name = document.getElementById( "pvi_project_name" ).value
	s_pvi_project_code = document.getElementById( "pvi_project_code" ).value
	s_pvi_subtype_code = document.getElementById( "pvi_subtype_code" ).value
	s_pvi_subtype_name = document.getElementById( "pvi_subtype_name" ).value
	s_pvi_type_code = document.getElementById( "pvi_type_code" ).value
	s_pvi_type_name = document.getElementById( "pvi_type_name" ).value
	s_adv.eVar53 = s_pvi_project_code+"|"+s_pvi_project_name+"|"+s_pvi_type_code+"|"+s_pvi_type_name+"|"+s_pvi_subtype_code+"|"+s_pvi_subtype_name;
	}

	//article
	if( document.getElementById( "artice_id" ) != undefined && document.getElementById( "artice_id" ) != null && document.getElementById( "artice_id" ).value != ""){
	artice_id = document.getElementById( "artice_id" ).value
	artice_name = document.getElementById( "artice_name" ).value
	s_adv.eVar54 = artice_id+"|"+artice_name;
	s_adv.events=s_adv.addToList(s_adv.events,"event29"); // Article views
	}

	//promotion page view
	if( document.getElementById( "offer_id" ) != undefined && document.getElementById( "offer_id" ) != null && document.getElementById( "offer_id" ).value != ""){
		s_processName="Promotions tickets";
		s_adv.eVar20=s_processName;
		s_adv.eVar24=document.getElementById( "offer_id" ).value;
		s_adv.events=s_adv.addToList(s_adv.events,"event18"); // Promotion page view
	}
	
	//File download
	s_url=s_adv.downloadLinkHandler("pdf,ppt,doc,png,img");
	if(s_url){
		s_adv.linkTrackVars="prop1,prop7,eVar26,events";
		s_adv.linkTrackEvents="event26";
		s_adv.prop7='D="File Download : "+v26';
		s_adv.eVar26=(s_url.indexOf("?")!=-1?s_url.substring(0,s_url.indexOf("?")):s_url);
		s_adv.events=s_adv.addToList(s_adv.events,"event26"); // File Download
	}

	s_adv.eVar13=s_adv.getNewRepeat(365,'s_gnr'); // Nouveau visiteur ou retour
	s_adv.events=s_adv.apl(s_adv.events,"event1",",",1); // Page View event
	s_adv.server=location.host;

	/*s_adv.eVar21=(typeof s_timestamp !="undefined" && s_timestamp!="")?s_timestamp:"Not Set";	//TimeStamp*/

	// Copy variables

	s_adv.hier1="D=c1"; // Hierarchy
	s_adv.prop3="D=g"; // Page URL
	s_adv.eVar19="D=g"; // Page URL
	
	s_adv.prop5='D=c1+"|'+s_adv.server+'"'; // Page name (with Site Name)
	s_adv.prop9="D=c1"; // Pathing for campaigns & int. search
	s_adv.eVar14="D=c1"; // Conversion PageName
	s_adv.eVar16="D=channel";	//Site Type

	if(typeof s_errorType !="undefined" && s_errorType!=""){
		s_adv.eVar17="+1";
		s_adv.eVar18=s_errorType;	//Error Type
		s_pName ="Error Page : " + s_errorType;
		if(s_errorType==404 || s_errorType=="404"){
			s_adv.events=s_adv.addToList(s_adv.events,"event6"); // 404 Error
			s_adv.pageType="errorPage";
			s_adv.eVar19=(typeof s_errorMsg !="undefined" && s_errorMsg!=""?s_errorMsg:"Not Set");	//Error Message
		}
		else{
			s_adv.events=s_adv.addToList(s_adv.events,"event7"); // Other Error
		}
	}

	
	if(typeof s_pState != "undefined"){
		switch(s_pState){
			case "mysamsung:homepage":
				s_pName = "Mysamsung:Homepage";
				s_processName="Account Creation/Account Connection/Products add/Promotions tickets/Contest/Emag";
				s_adv.events=s_adv.addToList(s_adv.events,"event8"); // MySamsung - HomePage
			break;
			case "mysamsung:login_page":
				s_pName = "Mysamsung:Login page";
				s_processName="Account Connection";
				s_adv.eVar20=s_processName;
				s_sourceLogin=s_adv.getValOnce(s_adv.getQueryParamA('siteID'), 's_advsiteID', 0);
				if(s_sourceLogin){
					s_adv.eVar38=s_sourceLogin; // Source : Login
				}
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Account Connection - Step 1 
			break;
			case "mysamsung:connection":
				s_pName = "Mysamsung:Connection";
				s_processName="Account Connection";
				s_adv.eVar20=s_processName;
				s_adv.eVar21=s_accountID;
				s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Account Connection - Step 2
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
				s_adv.events=s_adv.addToList(s_adv.events,"event35"); // Account Connection - Completed
			break;
			case "form:step1":
				s_pName = "Registration form:step 1";
				s_processName="Account Creation";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Account Creation - step 1
			break;
			case "form:step2":
				s_typeform = s_adv.getValOnce(s_adv.getQueryParamA('prev'), 's_modif/crea', 0);
				s_typeform = GetCookie("s_modif/crea");
				if (!s_selectboxflag){
					if (s_productintentionFlag){
						if (typeof s_typeform != "undefined" && s_typeform != ""){
							switch (s_typeform){
								case "inscription":
									s_pName = "Product add:Confirmation[creation]";
								break;
								case "modification":
									s_pName = "Product add:Confirmation[modification]";
								break;
							}
						}
						s_processName="Products add";
						s_adv.eVar20=s_processName;
						s_adv.eVar31=s_productID;
						s_adv.products=(typeof s_productSKU != "undefined" && s_productSKU != "")?s_productSKU:"";
						s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Product add - step 2
						s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
						s_adv.events=s_adv.addToList(s_adv.events,"event33"); // Product add - Completed
					}else{
						if (typeof s_typeform != "undefined" && s_typeform != ""){
							switch (s_typeform){
							case "inscription":
								s_pName = "Registration form:step 2";
								s_processName="Account Creation";
							break;
							case "modification":
								s_pName = "Account Modification:step 2";
								s_processName="Account Modification";
							break;
							}
						}
						s_adv.eVar20=s_processName;
						s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Account Creation - step 2
						if (typeof s_newsletter != "undefined"){
							s_adv.eVar22=s_newsletter;
							if(s_newsletter=="1" || s_newsletter=="2"){
								s_adv.events=s_adv.addToList(s_adv.events,"event21"); //Optin Newsletter
								if(typeof s_alert != "undefined" && s_alert != ""){
									s_adv.eVar22+="|"+s_alert;
									s_adv.events=s_adv.addToList(s_adv.events,"event22"); //Optin Alert Promo
								}
							}
						}
					}
				}
			break;
			case "form:step3":
				s_typeform = GetCookie("s_modif/crea");
				if (typeof s_typeform != "undefined" && s_typeform != ""){
					switch (s_typeform){
						case "inscription":
							s_pName = "Registration form:step 3";
							s_processName="Account Creation";
							s_adv.events=s_adv.addToList(s_adv.events,"event12"); // Account Creation - step 3
						break;
						case "modification":
							s_pName = "Account Modification:step 3";
							s_processName="Account Modification";
							s_adv.events=s_adv.addToList(s_adv.events,"event12"); // Account Modification - step 3
							s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
							s_adv.events=s_adv.addToList(s_adv.events,"event42"); // Account Modification - Completed
						break;
					}
				}
				s_adv.eVar20=s_processName;
				s_adv.eVar21=s_accountID;
			break;
			case "form:step4":
				s_pName = "Registration form:step 4";
				s_processName="Account Creation";
				s_adv.eVar20=s_processName;
				s_adv.eVar21=s_accountID;
				s_adv.events=s_adv.addToList(s_adv.events,"event13"); // Account Creation - step 4
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
				s_adv.events=s_adv.addToList(s_adv.events,"event31"); // Account Creation - Completed
			break;
			case "modification:step1":
				s_pName = "Account Modification:step 1";
				s_processName="Account Modification";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Account Modification - step 1
			break;
			case "promotion:homepage":
				s_pName = "Promotion:Homepage";
				s_processName="Promotions tickets";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event8"); // Promotions - HomePage
			break;
			case "promotion_ticket:step1":
				s_pName = "Promotion ticket:step 1";
				s_processName="Promotions tickets";
				if (typeof s_loginflag != "undefined" && s_loginflag){
					s_processName="Account Connection/Promotions tickets";
				}
				s_adv.eVar20=s_processName;
				//s_adv.eVar20=((typeof s_loginflag != "undefined" && s_loginflag !="")?"Account Connection/Promotions tickets":"Promotions tickets");
				//s_adv.eVar24=s_adv.getValOnce(s_adv.getQueryParamA('IDPromo'), 's_advpromoID', 0) ;
				s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Promotions tickets - step 2
			break;
			case "promotion_ticket:step2":
				s_pName = "Promotion ticket:step 2";
				s_processName="Promotions tickets";
				s_adv.eVar20=s_processName;
				s_adv.eVar31=s_productID;
				s_adv.products=(typeof s_productSKU != "undefined" && s_productSKU != "")?s_productSKU:"";
				//s_adv.eVar24=s_promoID;
				s_adv.eVar32=s_promoretailType;
				s_adv.eVar33=s_promoRetail;
				// s_adv.eVar34=s_purchasePrice;
				s_adv.events=s_adv.addToList(s_adv.events,"event12"); // Promotions tickets - step 3
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
				s_adv.events=s_adv.addToList(s_adv.events,"event32"); // Promotion tickets - Completed
			break;
			case "promotion:download":
				s_promoID=s_adv.getValOnce(s_adv.getQueryParamA('promoID'), 's_advpromoID', 0) ;
				if (s_promoID){
					s_adv.eVar24=s_promoID;
					s_pName = "Promotion:download:"+s_promoID;
					s_adv.events=s_adv.addToList(s_adv.events,"event27"); // Promotions - Download
				}
			break;
			case "application:view":
				s_adv.eVar25=s_productID;
				s_adv.events=s_adv.addToList(s_adv.events,"event23"); // Application page view
			break;
			case "application_download:step1":
				s_pName = "Application download:step 1";
				s_processName="Application Download";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Application download - step 1
			break;
			case "application_download:step2":
				s_pName = "Application download:step 2";
				s_processName="Application Download";
				s_adv.eVar20=s_processName;
				s_adv.eVar25=s_productID;
				if (typeof s_appsPrice != "undefined" && s_appsPrice != ""){
					s_adv.events=s_adv.addToList(s_adv.events,"event24");
					s_adv.products=";"+s_productID+";;;event24="+s_appsPrice;
				}
				s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Application download - step 2
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
				s_adv.events=s_adv.addToList(s_adv.events,"event34"); // Application download - Completed
			break;
			case "emag:homepage":
				s_processName="Emag";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event8"); // Emag - Home page
			break;
			case "emag:view":
				s_pName = "Emag:"+s_emagName;
				s_adv.events=s_adv.addToList(s_adv.events,"event20"); // Emag view
			break;
			case "product_order:step1":
				switch(s_siteName){
					case "advance.samsung.fr":
						s_pName = "Product order Advance:step 1";
						s_processName="Product order:Advance";
					break;
					case "itadvance.samsung.fr":
						s_pName = "Product order ITAdvance:step 1";
						s_processName="Product order:ITAdvance";
					break;
					case "mobileadvance.samsung.fr":
						s_pName = "Product order Mobile:step 1";
						s_processName="Product order:Mobile";
					break;
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Product Order - step 1
			break;
			case "product_order:step2":
				switch(s_siteName){
					case "advance.samsung.fr":
						s_pName = "Product order Advance:step 2";
						s_processName="Product order:Advance";
					break;
					case "itadvance.samsung.fr":
						s_pName = "Product order ITAdvance:step 2";
						s_processName="Product order:ITAdvance";
					break;
					case "mobileadvance.samsung.fr":
						s_pName = "Product order Mobile:step 2";
						s_processName="Product order:Mobile";
					break;
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Product Order - step 2
			break;
			case "product_order:step3":
				switch(s_siteName){
				case "advance.samsung.fr":
					s_pName = "Product order Advance:step 3";
					s_processName="Product order:Advance";
				break;
				case "itadvance.samsung.fr":
					s_pName = "Product order ITAdvance:step 3";
					s_processName="Product order:ITAdvance";
				break;
				case "mobileadvance.samsung.fr":
					s_pName = "Product order Mobile:step 3";
					s_processName="Product order:Mobile";
				break;
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event12"); // Product Order - step 3
			break;
			case "product_order:step4":
				switch(s_siteName){
					case "advance.samsung.fr":
						s_pName = "Product order Advance:step 4";
						s_processName="Product order:Advance";
						s_adv.events=s_adv.addToList(s_adv.events,"event36"); // Product order Advance - Completed
					break;
					case "itadvance.samsung.fr":
						s_pName = "Product order ITAdvance:step 4";
						s_processName="Product order:ITAdvance";
						s_adv.events=s_adv.addToList(s_adv.events,"event37"); // Product order ITAdvance - Completed
					break;
					case "mobileadvance.samsung.fr":
						s_pName = "Product order Mobile:step 4";
						s_processName="Product order:Mobile";
						s_adv.events=s_adv.addToList(s_adv.events,"event38"); // Product order Mobile - Completed
					break;
				}
				s_adv.eVar20=s_processName;
				s_adv.eVar35=s_productID;
				if (typeof s_orderPrice != "undefined" && s_orderPrice != ""){
					s_adv.events=s_adv.addToList(s_adv.events,"event25"); // Order Price
					s_adv.products=";"+s_productID+";;;event25="+s_orderPrice;
				}
				s_adv.events=s_adv.addToList(s_adv.events,"event13"); // Product Order - step 4
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
			break;
			case "communication:view":
				s_adv.eVar27=s_articleName;
				s_adv.events=s_adv.addToList(s_adv.events,"event19"); // Communication page view
			break;
			case "where_to_buy:online":
				s_pName = "where_to_buy:online";
				s_adv.products=";"+s_productID;
				s_adv.events=s_adv.addToList(s_adv.events,"event40"); // Where to buy Page
			break;
			case "contest:confirmation":
				s_pName = "contest:confirmation";
				s_adv.eVar28=s_contestName;
				s_adv.events=s_adv.addToList(s_adv.events,"event39"); // Contest Confirmation
			break;
			case "microsite:form:start":
				s_processName="Microsite Form";
				s_adv.eVar42=s_micrositeFormName;
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Microsite Form - step 1
			break;
			case "microsite:form:step":
				if(s_stepInt<6){
					s_processName="Microsite Form";
					s_adv.eVar42=s_micrositeFormName;
					s_adv.eVar20=s_processName;
					if (typeof s_newsletter != "undefined"){
						s_adv.eVar22=s_newsletter;
						if(s_newsletter=="1" || s_newsletter=="2"){
							s_adv.events=s_adv.addToList(s_adv.events,"event21"); //Optin Newsletter
							if(typeof s_alert != "undefined" && s_alert != ""){
								s_adv.eVar22+="|"+s_alert;
								s_adv.events=s_adv.addToList(s_adv.events,"event22"); //Optin Alert Promo
							}
						}
					}
					s_adv.events=s_adv.addToList(s_adv.events,"event"+(s_stepInt+9)); // Microsite Form - step N
				
				}
			break;
			case "microsite:form:confirmation":
				if(s_stepInt<7){
					s_processName="Microsite Form";
					s_adv.eVar42=s_micrositeFormName;
					s_adv.eVar20=s_processName;
					if (typeof s_newsletter != "undefined"){
						s_adv.eVar22=s_newsletter;
						if(s_newsletter=="1" || s_newsletter=="2"){
							s_adv.events=s_adv.addToList(s_adv.events,"event21"); //Optin Newsletter
							if(typeof s_alert != "undefined" && s_alert != ""){
								s_adv.eVar22+="|"+s_alert;
								s_adv.events=s_adv.addToList(s_adv.events,"event22"); //Optin Alert Promo
							}
						}
					}
					s_adv.events=s_adv.addToList(s_adv.events,"event"+(parseInt(s_stepInt)+9)); // Microsite Form - step N
					s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
					s_adv.events=s_adv.addToList(s_adv.events,"event43"); // Microsite Form - Completed
				}
			break;
			case "where_to_buy:product_locator":
			case "where_to_buy:dealer_locator":
				switch(s_pState){
					case "where_to_buy:product_locator":
						s_pName = "Product Locator Page";
					break;
					case "where_to_buy:dealer_locator":
						s_pName = "Dealer Locator Page";
					break;
				}
				s_product_productlocator = s_adv.getQueryParamA('id');
				s_adv.products=";"+s_product_productlocator;
				s_adv.events=s_adv.addToList(s_adv.events,"event40"); // Where to buy Page
				// Track previous page using parameters and write it at the end of s_pName
				param = s_adv.getQueryParamA('prevp');
				if (param!="") {
					switch(param){
						case "ms":
							s_pName+="[microsite]";
						break;
						case "em":
							s_pName+="[email]";
						break;
					}
				}
			break;
			case "shopsamsung:cart_page":
				s_pName = "Online Shop:cart";
				s_processName="Online Shop Just Logged/Online Shop Already Logged/Online Shop Guest";
				s_adv.eVar20=s_processName;
				s_adv.eVar38=(typeof s_sourceLogin != "undefined" && s_sourceLogin != "")?s_sourceLogin:""; // Source : Login
				if(typeof s_productID != "undefined" && s_productID != ""){
					arrayshopproducts = s_productID.split("|");
					arrayshopprice = s_orderPrice.split("|");
					arrayshopquantity = s_orderQuantity.split("|");
					for(i=0;i<arrayshopproducts.length;i++){
						if(i==0){
							s_adv.products=";"+arrayshopproducts[i]+";;;";
						}else{
							s_adv.products+=",;"+arrayshopproducts[i]+";;;";
						}
					}
				}
				s.events=s.addToList(s.events,"scView"); // Cart Viewed
			break;
			case "shopsamsung:login_page":
				s_pName = "Online Shop:step1";
				s_processName="Online Shop Just Logged/Online Shop Guest";
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event10"); // Shop Connection - Step 1 
			break;
			case "online_shop:step2":
				if(typeof s_onlineshop_flag == "undefined"){
					if(typeof s_accountID != "undefined" && s_accountID != ""){
						if(typeof s_adv.c_r("s_ppn") != "undefined" && s_adv.c_r("s_ppn") == "Online Shop:cart"){
							s_pName = "Online Shop:step2[already logged]";
							s_processName="Online Shop Already Logged";
							s_adv.eVar21=s_accountID;
							s_adv.c_w("o_s_logged", "already logged", 0);
						}else{
							s_pName = "Online Shop:step2[just logged]";
							s_processName="Online Shop Just Logged";
							s_adv.eVar21=s_accountID;
							if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") != ""){
								s_adv.c_w("o_s_logged", "just logged", -1);
							}
						}
					}else{
						s_pName = "Online Shop:step2[guest]";
						s_processName="Online Shop Guest";
							s_adv.c_w("o_s_logged", "", -1);
					}
					s_adv.eVar20=s_processName;
					s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Online Shop - Step 2 
				}
			break;
			case "online_shop:step6":
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_pName = "Online Shop:step6[just logged]";
					s_processName="Online Shop Just Logged";
					s_adv.c_w("o_s_logged", "", -1);
					s_adv.events=s_adv.addToList(s_adv.events,"event60"); // Online Shop Completed [just logged]
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_pName = "Online Shop:step6[already logged]";
					s_processName="Online Shop Already Logged";
					s_adv.c_w("o_s_logged", "", -1);
					s_adv.events=s_adv.addToList(s_adv.events,"event64"); // Online Shop Completed [already logged]
				}else{
					s_pName = "Online Shop:step6[guest]";
					s_processName="Online Shop Guest";
					s_adv.events=s_adv.addToList(s_adv.events,"event61"); // Online Shop Completed [guest]
				}
				s_adv.eVar20=s_processName;
				s_adv.eVar55=s_purchaseID;
				s_adv.purchaseID=s_purchaseID;
				s_adv.transactionID=s_purchaseID;
				arrayshopproducts = s_productID.split("|");
				arrayshopprice = s_orderPrice.split("|");
				arrayshopquantity = s_orderQuantity.split("|");
				for(i=0;i<arrayshopproducts.length;i++){
					if(i==0){
						s_adv.products=";"+arrayshopproducts[i]+";"+arrayshopquantity[i]+";"+arrayshopprice[i]+";event56="+arrayshopprice[i]+"|event55="+arrayshopquantity[i];
					}else{
						s_adv.products+=",;"+arrayshopproducts[i]+";"+arrayshopquantity[i]+";"+arrayshopprice[i]+";event56="+arrayshopprice[i]+"|event55="+arrayshopquantity[i];
					}
				}
				if(typeof s_mycouponPrice != "undefined" && s_mycouponPrice != ""){
					if(typeof s_promotioncode != "undefined" && s_promotioncode != ""){
						s_adv.products+=",;;;;event57="+s_mycouponPrice+"|event58="+s_promotioncode;
					}else{
						s_adv.products+=",;;;;event57="+s_mycouponPrice;
					}
				}else{
					if(typeof s_promotioncode != "undefined" && s_promotioncode != ""){
						s_adv.products+=",;;;;event58="+s_promotioncode;
					}
				}
				s_adv.eVar56 = (typeof deliveryMethod != "undefined" && deliveryMethod != "")?deliveryMethod:"";
				s_adv.events=s_adv.addToList(s_adv.events,"event15"); // Online Shop - Step 6
				s_adv.events=s_adv.addToList(s_adv.events,"event16"); // End Process
				s_adv.events=s_adv.addToList(s_adv.events,"event55"); // Transaction Units
				s_adv.events=s_adv.addToList(s_adv.events,"event56"); // Transaction Amount
				s_adv.events=s_adv.addToList(s_adv.events,"event57"); // Reduction Coupon Price
				s_adv.events=s_adv.addToList(s_adv.events,"event58"); // Promotion Code Price
				s_adv.events=s_adv.addToList(s_adv.events,"event59"); // Online Shop - Confirmation
				s_adv.events=s_adv.addToList(s_adv.events,"purchase");
				if(s_adv.c_r("livechat")!=""){
					s_adv.events=s_adv.addToList(s_adv.events,"event67"); // Online Shop - Confirmation with Live Chat
					s_adv.c_w("livechat","",-1);
				}
			break;
		}
	}
	

	
//	arrayMain("playerstar|Microsites Telecom|Player Star","")
//	arrayOther("www.my.sqmsung/sdqsd/qsdqs")
	
	function getSection(strURL){
		/*if (strURL.indexOf(tmp_samsung))
			for (i = 0 ; qrrqyMqin.length;i++)
				if (qrrqyMqin[i].split("|")[0] == strURL.substring(..))
					section = qrrqyMqin.split("|")[1]
			*/
	}
	
	
	
	tmp_loc = location.href;
	pos0_samsung = tmp_loc.indexOf("http://www.samsung.com/fr/");
	if (pos0_samsung == -1){
		pos0_samsung = tmp_loc.indexOf("https://www.samsung.com/fr/");
	}
	if (pos0_samsung != -1){
		lgloc = tmp_loc.length;
		tmp_samsung = "http://www.samsung.com/fr/";
		lg_samsung = tmp_samsung.length;
		tmp_Val = tmp_loc.substring(lg_samsung,lgloc);
		lg_Val = tmp_Val.length;
		pos1_tmpVal = tmp_Val.indexOf("/");
		if (pos1_tmpVal != -1){
			tmp_Val1 = tmp_Val.substring(0,pos1_tmpVal);
			}
			else
			{
			tmp_Val1 = tmp_Val.substring(0,lg_Val);
		}
		s_siteName = "samsung.com/fr/";
		switch(tmp_Val1){
			case "playerstar":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Player Star";
			break;
			case "hellokitty":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Hello Kitty";
			break;
			case "spica":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Spica";
			break;
			case "blueearth":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Blue Earth";
			break;
			case "player5":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Player 5";
			break;
			case "b3410":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="B3410";
			break;
			case "wave":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave";
			break;
			case "wave575":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave 575";
			break;
			case "wave533":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave 533";
			break;
			case "wave723":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave 723";
			break;
			case "wave2":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave 2";
			break;
			case "wave2samsungmusic":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Wave 2 Samsung Music";
			break;
			case "collectionwave":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Collection Wave";
			break;
			case "galaxy550":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy 550";
			break;
			case "galaxyteos":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Teos";
			break;
			case "galaxyace":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Ace";
			break;
			case "galaxys":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy S";
			break;
			case "galaxyswifi":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy S WiFi";
			break;
			case "galaxys2":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy S II";
			break;
			case "galaxys3":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy S III";
			break;
			case "galaxynote":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Note";
			break;
			case "rmix":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Rmix";
			break;
			case "gammeomnia":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Gamme Omnia";
			break;
			case "kies":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Kies";
			break;
			case "omnia7":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Omnia 7";
			break;
			case "tictoc":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="TicToc";
			break;
			case "gammegalaxy":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Gamme Galaxy";
			break;
			case "applicationfactoryandroid":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Application Factory Android";
			break;
			case "applicationfactorybada":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Application Factory Bada";
			break;
			case "offresurmesure":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Offre sur Mesure - Repurchase";
			break;
			case "galaxytab":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Tab 10.1";
			break;
			case "entrezdanslhistoire":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Conciergerie";
			break;
			case "galaxynote2":
				s_adv.prop2="Microsites Telecom";
				s_adv.eVar37="Galaxy Note 2";
			break;
			case "tvonedesign":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="OneDesign";
			break;
			case "samsungtvapps":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="SMART TV Standalone";
			break;
			case "smarttvchallenge":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="SMART TV Challenge";
			break;
			case "disquedurexterne":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="Disque Dur Externe";
			break;
			case "docontrol":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="Do Control";
			break;
			case "smarttv":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="SMART TV";
			break;
			case "hifi-sans-fil":
				s_adv.prop2="Microsites Brun";
				s_adv.eVar37="Audio Dock";
			break;
			case "navibot":
				s_adv.prop2="Microsites Blanc";
				s_adv.eVar37="Navibot";
			break;
			case "intuitio":
				s_adv.prop2="Microsites Blanc";
				s_adv.eVar37="Intuitio";
			break;
			case "nouvellesinvitations":
				s_adv.prop2="Microsites Blanc";
				s_adv.eVar37="Nouvelles Invitations";
			break;
			case "encastrable":
				s_adv.prop2="Microsites Blanc";
				s_adv.eVar37="Encastrable";
			break;
			case "ecobubble":
				s_adv.prop2="Microsites Blanc";
				s_adv.eVar37="Ecobubble";
			break;
			case "serie5":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Serie 5";
			break;
			case "serie7":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Serie 7";
			break;
			case "serie9":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Serie 9";
			break;
			case "convergence":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Convergence";
			break;
			case "moniteurreseau":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Moniteurs Réseaux";
			break;
			case "hospitality":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Hospitality";
			break;
			case "emotionslab":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Émotions Lab";
			break;
			case "smartstation":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="SMART Station";
			break;
			case "smarthub":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="SMART Hub";
			break;
			case "reprenez-des-couleurs-laser":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="Reprenez des couleurs";
			break;
			case "serie9moniteur":
				s_adv.prop2="Microsites IT";
				s_adv.eVar37="LED Serie 9";
			break;
			case "doubleecran":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="Double-Ecran";
			break;
			case "double-ecran":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="Double-Ecran Expérience";
			break;
			case "pl120":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="PL120";
			break;
			case "pl170":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="PL170";
			break;
			case "pl150":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="PL150";
			break;
			case "multiview":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="MV800";
			break;
			case "mv900f":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="MV900F";
			break;
			case "nx200":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="NX200";
			break;
			case "smartcamera":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="Smart Camera";
			break;
			case "nx":
				s_adv.prop2="Microsites Photo";
				s_adv.eVar37="NX";
			break;
			case "applitime":
				s_adv.prop2="Microsites Corporate";
				s_adv.eVar37="Applitime";
			break;
			case "playground":
				s_adv.prop2="Microsites Corporate";
				s_adv.eVar37="Playground";
			break;
			case "applisetservices":
				s_adv.prop2="Microsites Corporate";
				s_adv.eVar37="Applications & services";
			break;
			case "noel":
				s_adv.prop2="Microsites Corporate";
				s_adv.eVar37="Samsung Bose Noël";
			break;
			case "mondossier":
				s_adv.prop2="Plateformes de fidélisation";
				s_adv.eVar37="Mon dossier";
			break;
			case "microsite":
			case "experience":
			case "mysamsung":
				tmp_Val2 = tmp_Val.substring(pos1_tmpVal+1,lg_Val);
				lg_Val2 = tmp_Val2.length;
				pos2_tmpVal2 = tmp_Val2.indexOf("/");
				if (pos2_tmpVal2 != -1){
				tmp_Val3 = tmp_Val2.substring(0,pos2_tmpVal2);
				}
				else
				{
				tmp_Val3 = tmp_Val2.substring(0,lg_Val2);
				}
				switch(tmp_Val3){
					case "ecostyle":
					s_adv.prop2="Microsites Blanc";
					s_adv.eVar37="Ecostyle";
					break;
					case "gammefroid":
					s_adv.prop2="Microsites Blanc";
					s_adv.eVar37="Gamme Froid";
					break;
					case "monitor":
					s_adv.prop2="Microsites IT";
					s_adv.eVar37="Moniteurs LED 3D";
					break;
					case "promotion":
					s_adv.prop2="Microsites Photo";
					s_adv.eVar37="Objectifs NX";
					break;
					case "mag1":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 1";
					break;
					case "mag2":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 2";
					break;
					case "mag3":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 3";
					break;
					case "mag4":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 4";
					break;
					case "mag5":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 5";
					break;
					case "mag6":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 6";
					break;
					case "mag7":
					s_adv.prop2="Microsites Corporate";
					s_adv.eVar37="E-Mag 7";
					break;
				}
			break;
			default:
				s_adv.prop2="Samsung FR";
			break;
		}
	}
	else
	{
		pos0_samsung = tmp_loc.indexOf("//www.mysamsung.fr");
		if(pos0_samsung != -1)
			{
			s_siteName = "mysamsung.fr"
			s_adv.prop2="Plateformes de fidélisation";
			s_adv.eVar37="My Samsung";
			}
			else
			{
			pos0_samsung = tmp_loc.indexOf("//promos.samsung.fr");
			if(pos0_samsung != -1)
				{
				s_siteName = "promos.samsung.fr"
				s_adv.prop2="Promotions";
				s_adv.eVar37="Promotions";
				}
				else
				{
				pos0_samsung = tmp_loc.indexOf("//mobileshop.samsung.fr");
				if(pos0_samsung != -1)
					{
					s_siteName = "mobileshop.samsung.fr"
					s_adv.prop2="E-Commerce";
					s_adv.eVar37="Mobile Shop";
					}
					else
					{
					pos0_samsung = tmp_loc.indexOf("//advance.samsung.fr");
					if(pos0_samsung != -1)
						{
						s_siteName = "advance.samsung.fr"
						s_adv.prop2="B2B";
						s_adv.eVar37="Samsung Advance";
						}
						else
						{
						pos0_samsung = tmp_loc.indexOf("//mobileadvance.samsung.fr");
						if(pos0_samsung != -1)
							{
							s_siteName = "mobileadvance.samsung.fr"
							s_adv.prop2="B2B";
							s_adv.eVar37="Samsung Mobile Advance";
							}
							else
							{
							pos0_samsung = tmp_loc.indexOf("//itadvance.samsung.fr");
							if(pos0_samsung != -1)
								{
								s_siteName = "itadvance.samsung.fr"
								s_adv.prop2="B2B";
								s_adv.eVar37="Samsung IT Advance";
								}
								else
								{
								pos0_samsung = tmp_loc.indexOf("//pro.samsung.fr");
								if(pos0_samsung != -1)
									{
									s_siteName = "pro.samsung.fr"
									s_adv.prop2="B2B";
									s_adv.eVar37="Pro IT";
									}
									else
									{
									pos0_samsung = tmp_loc.indexOf("//www.samsung-microsites_adv.fr/");
									if(pos0_samsung != -1)
										{
										lgloc = tmp_loc.length;
										tmp_samsung = "http://www.samsung-microsites_adv.fr/";
										s_siteName = "samsung-microsites_adv.fr/"
										lg_samsung = tmp_samsung.length;
										tmp_Val = tmp_loc.substring(lg_samsung,lgloc);
										lg_Val = tmp_Val.length;
										pos1_tmpVal = tmp_Val.indexOf("/");
										if (pos1_tmpVal != -1){
											tmp_Val1 = tmp_Val.substring(0,pos1_tmpVal);
											}
											else
											{
											tmp_Val1 = tmp_Val.substring(0,lg_Val);
										}
										switch(tmp_Val1){
											case "galaxytab":
												s_adv.prop2="Microsites Telecom";
												s_adv.eVar37="Galaxy Tab 7";
											break;
										}
										}
										else
										{
										
									}
								}
							}
						}
					}
				}
			}
		}
	}
	if(typeof s_adv.eVar37 == "undefined" || (typeof s_adv.eVar37 != "undefined" && s_adv.eVar37 == "")){
		s_adv.eVar37=(typeof s_siteTitle != "undefined" && s_siteTitle != "")?s_siteTitle:"";
	}
	s_adv.eVar15=(typeof s_siteName !="undefined" && s_siteName!="")?s_siteName:location.host;
	s_adv.prop8=s_adv.getPreviousValue(s_adv.prop1, "s_ppn", "");
	

	if(s_trackPV){
		s_trackECMP();
		s_trackPV=false;
	}

	
	if(typeof s_pName !="undefined" && s_pName!=""){
		if(typeof s_eventID !="undefined" && s_eventID!=""){
			s_adv.prop1=s_pName += ":"+s_eventID;
			}else{
			s_adv.prop1=s_pName;
		}
	}
	else{
		s_tmpprop1 = location.pathname.replace(/\//g,":")
		if(s_tmpprop1.indexOf(":")==0){
		s_tmpprop1 = s_tmpprop1.substring(1,s_tmpprop1.length);
		}
		if(s_tmpprop1=="fr:"){
		s_tmpprop1="fr:home";
		}
		tmpprop1Array = s_tmpprop1.split(":");
		ln_tmpprop1 = tmpprop1Array.length;
		if(tmpprop1Array[ln_tmpprop1]=="undefined" || tmpprop1Array[ln_tmpprop1]==""){
		s_tmpprop1 = s_tmpprop1.substring(0,s_tmpprop1.length-1);
		}
		s_adv.prop1 = s_tmpprop1;
	}// Page Name Copy


	
	tmppageNameArray = s_adv.prop1.split(":");
	tmpChannel = tmppageNameArray[1];
	if(typeof s_processName != "undefined" && s_processName != ""){
		s_adv.channel=s_processName;
	}else{
		if(typeof s_adv.prop2 != "undefined" && s_adv.prop2!=""){
			s_adv.channel=s_adv.prop2;
		}else{
			s_adv.channel=(typeof s_siteType !="undefined" && s_siteType!="")?s_siteType:tmpChannel;	//Section
		}
	}
	
	if(typeof s_processName != "undefined" && s_processName != ""){
	s_adv.eVar36=s_processName;
	}else{
	s_adv.eVar36=s_adv.channel;
	}
	
	s_adv.pageName="D=c1"; // Page Name
	
	if(typeof s_adv.prop1 != "undefined" && s_adv.prop1 == "fr:offer"){
		s_processName="Promotions tickets";
		s_adv.eVar20=s_processName;
		s_adv.events=s_adv.addToList(s_adv.events,"event9"); // Promotion - Landing page
	}

}


/*if(typeof frames[0] != "undefined" && frames[0] != ""){
	alert(frames[0]);
	NameFrame = document.getElementById( "framePromo" ).name;
}*/
ms_checked=false;
if (document.getElementsByTagName( "iframe" ).length > 0){
	for (i=0;i<document.getElementsByTagName( "iframe" ).length;i++){
		document.getElementsByTagName( "iframe" )[i].id
		if (document.getElementsByTagName( "iframe" )[i].id == "frameSamsung"){
			if(document.getElementsByTagName( "iframe" )[i].name == "SELFHTML_samsung"){
				ms_checked = true;
			}
		}
	}
}
//document.getElementById("framePromo").getElementsByTagName( "iframe" )[i].name == "SELFHTML_in_a_box"
if(ms_checked){
}else{
s_adv.doPlugins=s_doPlugins;
}

/*********Media Module Calls**************/
s_adv.loadModule("Media")
s_adv.Media.autoTrack=false
s_adv.Media.trackWhilePlaying=false
s_adv.Media.trackVars="None"
s_adv.Media.trackEvents="None"

s_adv.Media.trackUsingContextData = true
s_adv.Media.contextDataMapping = {
  "a.media.name":"eVar43,prop9",
  "a.media.segment":"eVar44",
  "a.contentType":"eVarYY",
  "a.media.timePlayed":"event50",
  "a.media.view":"event47",
  "a.media.segmentView":"event49",
  "a.media.complete":"event48",
  "a.media.milestones":{
    25: "event51",
    50: "event52",
    75: "event53"
   }
};
s_adv.Media.trackSeconds = 30;
s_adv.Media.trackMilestones = "25,50,75";
s_adv.Media.SegmentByMilestones = false;
s_adv.Media.completeByCloseOffset = true;
s_adv.Media.completeCloseOffsetThreshold = 5;

function s_videoStart(mediaName,mediaLength,mediaPlayerName){
	s_adv.Media.open(mediaName,mediaLength,mediaPlayerName);
	s_videoPlay(mediaName,0);
}

function s_videoEnd(mediaName,mediaLength){
	s_videoStop(mediaName,mediaLength);
	s_adv.Media.close(mediaName);
}

function s_videoPlay(mediaName,mediaOffset, segmentNum, segment, segmentLength){
	if(typeof segmentNum != "undefined" && typeof segment != "undefined" && typeof segmentLength != "undefined")
		s_adv.Media.play(mediaName,mediaOffset, segmentNum, segment, segmentLength);
	else
		s_adv.Media.play(mediaName,mediaOffset);
}

function s_videoStop(mediaName,mediaOffset){
	s_adv.Media.stop(mediaName,mediaOffset);
}

function s_videoSkip(mediaName,mediaStopTime,mediaStartTime, segmentNum, segment, segmentLength){
	s_adv.Media.stop(mediaName,mediaStopTime);
	if(typeof segmentNum != "undefined" && typeof segment != "undefined" && typeof segmentLength != "undefined")
		s_adv.Media.play(mediaName,mediaStartTime, segmentNum, segment, segmentLength);
	else
		s_adv.Media.play(mediaName,mediaStartTime);
}

function s_sendOmnitureData(pState,val1,val2,val3,val4,val5,val6){
	s_tmp_LTV = s_adv.linkTrackVars;
	s_tmp_LTE = s_adv.linkTrackEvents;
	s_tmp_pName = s_pName;

	s_customLinkTrack = false;
	s_doNotTrack = false;
	s_pNameReset = false;

	s_resetVars();
	if(typeof(pState) != "undefined"){
		switch(pState){
			/*case 'emag:page':
				s_pName += ":"+val1;
				s_pNameReset = true;
			break;
			case 'emag:link':
				s_adv.eVar29=val1+":"+val2+":"+val3;
				s_adv.events=s_adv.addToList(s_adv.events,"event28"); // Emag  Link
			break;*/
			case 'promotion:download':
				//s_adv.eVar24=val1;
				s_pName = "promotion:download:"+val1;
				s_customLinkTrack=false;
				s_adv.events=s_adv.addToList(s_adv.events,"event27"); // Promotions - Download
			break;
			case 'where_to_buy:online:link':
				s_customLinkTrack=true;
				s_customLinkName = "Where_to_buy:online:link:"+val1;
				s_adv.linkTrackVars += ",eVar23,eVar39,eVar52,eVar45,products,events";
				s_adv.eVar52 = "Where_to_buy:online:link:"+val1;
				s_adv.linkTrackEvents="event41";
				s_adv.eVar39=val1;
				if((typeof s_adv.products == "undefined" || (typeof s_adv.products != "undefined" && s_adv.products == "")) && (typeof retailerModelCode != "undefined" && retailerModelCode != "")){
					s_adv.products=";"+retailerModelCode;
					if((typeof s_adv.eVar45 == "undefined" || (typeof s_adv.eVar45 != "undefined" && s_adv.eVar45 == "")) && (typeof retailerDisplayName != "undefined" && retailerDisplayName != "") && (typeof retailerGroupName != "undefined" && retailerGroupName != "") && (typeof retailerTypeName != "undefined" && retailerTypeName != "") && (typeof retailerSubTypeName != "undefined" && retailerSubTypeName != "")){
						s_adv.eVar45=retailerModelCode+"|"+retailerDisplayName+"|"+retailerGroupName+"|"+retailerTypeName+"|"+retailerSubTypeName;
					}
				}
				s_adv.events=s_adv.addToList(s_adv.events,"event41"); // Where to buy onlune link
			break;
			case 'video:start':
				s_doNotTrack = true; 
				s_videoStart(val1,val2,val3);
			break;
			case 'video:stop':
				s_doNotTrack = true; 
				s_videoStop(val1,val2);
			break;
			case 'video:restart':
				s_doNotTrack = true; 
				s_videoPlay(val1,val2);
			break;
			case 'video:skip':
				s_doNotTrack = true; 
				s_videoStop(val1,val2);
				s_videoPlay(val1,val3);
			break;
			case 'video:completed':
				s_doNotTrack = true; 
				s_videoEnd(val1,val2);
			break;
			case 'visual:download':
				s_doNotTrack = true; 
				s_adv.eVar26=val1+":"+val2;
			break;
			case 'microsite:link:click':
			case 'microsite:flash:click':
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_customLinkName = val1;
				s_adv.linkTrackVars += "eVar20,eVar39,events";
				s_adv.linkTrackEvents="event45";
				s_pName= "Link click : "+val1;
				s_adv.eVar39=val2;
				s_adv.events=s_adv.addToList(s_adv.events,"event45"); // Microsite Click
			break;
			case "microsite:file:download":
			case "microsite:flash:download":
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_customLinkName = "Microsite:download:"+val1;
				s_adv.linkTrackVars += "eVar20,eVar40,events";
				s_adv.linkTrackEvents="event27";
				s_pName="Microsite:download : "+val1;
				s_adv.eVar40=val2;
				s_adv.events=s_adv.addToList(s_adv.events,"event27"); // Microsite Download
			break;
			case "microsite:AddShare":
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_customLinkName = "AddShare click : "+val1;
				s_adv.linkTrackVars += "eVar20,eVar41,events";
				s_adv.linkTrackEvents="event45";
				s_pName= "AddShare click : "+val1;
				s_adv.eVar41 = val1; // Microsite AddShare
				s_adv.events=s_adv.addToList(s_adv.events,"event45"); // Microsite Click
			break;
			case 'microsite:flash:page':
				s_pName = s_siteTitle + val1;
				s_customLinkTrack=false;
			break;
			case 'microsite:sponsorship':
				if(val1){
				s_pName += ":sponsorship";
				s_adv.events=s_adv.addToList(s_adv.events,"event46"); // Sponsorship Sent
				}
				s_customLinkTrack=false;
			break;
			case 'where_to_buy:product_locator:search':
			case 'where_to_buy:dealer_locator:search':
			case 'where_to_buy:dealer_locator:brand_click':
			case 'where_to_buy:product_locator:brand_click':
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_adv.linkTrackVars += ",eVar46,eVar47,eVar52,events";
				s_adv.linkTrackEvents="event54";
				switch(pState){
					case 'where_to_buy:product_locator:search':
						s_adv.eVar52 = "Product Locator - Search";
						s_customLinkName = "Product Locator - Search";
					break;
					case 'where_to_buy:dealer_locator:search':
						s_adv.eVar52 = "Dealer Locator - Search";
						s_customLinkName = "Product Locator - Search";
					break;
					case 'where_to_buy:product_locator:brand_click':
						s_adv.eVar52 = "Product Locator - Filter Click";
						s_customLinkName = "Product Locator - Filter Click";
					break;
					case 'where_to_buy:dealer_locator:brand_click':
						s_adv.eVar52 = "Dealer Locator - Filter Click";
						s_customLinkName = "Dealer Locator - Filter Click";
					break;
				}
				s_adv.eVar46 = val1; // Product Locator - City
				s_adv.eVar47 = val2; // Product Locator - Kilometer
				s_adv.events=s_adv.addToList(s_adv.events,"event54"); // Product Locator Actions
			break;
			case 'where_to_buy:product_locator:filter':
			case 'where_to_buy:dealer_locator:filter':
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_adv.linkTrackVars += ",eVar48,eVar49,eVar52,events";
				switch(pState){
					case 'where_to_buy:product_locator:filter':
						s_adv.eVar52 = "Product Locator - Result Filter";
						s_customLinkName = "Product Locator - Result Filter";
					break;
					case 'where_to_buy:dealer_locator:filter':
						s_adv.eVar52 = "Dealer Locator - Result Filter";
						s_customLinkName = "Dealer Locator - Result Filter";
					break;
				}
				s_adv.linkTrackEvents="event54";
				s_adv.eVar48 = val1; // Product Locator - NB Vendor
				s_adv.eVar49 = val2; // Product Locator - Brand Filter
				s_adv.events=s_adv.addToList(s_adv.events,"event54"); // Product Locator Actions
			break;
			case 'where_to_buy:product_locator:result_click':
			case 'where_to_buy:product_locator:map_click':
			case 'where_to_buy:product_locator:map_itinerary':
			case 'where_to_buy:product_locator:map_streetview':
			case 'where_to_buy:dealer_locator:result_click':
			case 'where_to_buy:dealer_locator:map_click':
			case 'where_to_buy:dealer_locator:map_itinerary':
			case 'where_to_buy:dealer_locator:map_streetview':
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_adv.linkTrackVars += ",eVar46,eVar50,eVar51,eVar52,events";
				switch(pState){
					case 'where_to_buy:product_locator:result_click':
						s_adv.eVar52 = "Product Locator - Result Click";
						s_customLinkName = "Product Locator - Result Click";
					break;
					case 'where_to_buy:product_locator:map_click':
						s_adv.eVar52 = "Product Locator - Map Click";
						s_customLinkName = "Product Locator - Map Click";
					break;
					case 'where_to_buy:product_locator:map_itinerary':
						s_adv.eVar52 = "Product Locator - Map Itinerary";
						s_customLinkName = "Product Locator - Map Itinerary";
					break;
					case 'where_to_buy:product_locator:map_streetview':
						s_adv.eVar52 = "Product Locator - Map Street View";
						s_customLinkName = "Product Locator - Map Street View";
					break;
					case 'where_to_buy:dealer_locator:result_click':
						s_adv.eVar52 = "Dealer Locator - Result Click";
						s_customLinkName = "Dealer Locator - Result Click";
					break;
					case 'where_to_buy:dealer_locator:map_click':
						s_adv.eVar52 = "Dealer Locator - Map Click";
						s_customLinkName = "Dealer Locator - Map Click";
					break;
					case 'where_to_buy:dealer_locator:map_itinerary':
						s_adv.eVar52 = "Dealer Locator - Map Itinerary";
						s_customLinkName = "Dealer Locator - Map Itinerary";
					break;
					case 'where_to_buy:dealer_locator:map_streetview':
						s_adv.eVar52 = "Dealer Locator - Map Street View";
						s_customLinkName = "Dealer Locator - Map Street View";
					break;
				}
				s_adv.linkTrackEvents="event54";
				s_adv.eVar50 = val1; // Product Locator - Brand Click
				s_adv.eVar46 = val2; // Product Locator - City
				s_adv.eVar51 = val3; // Product Locator - Zip/Code
				s_adv.events=s_adv.addToList(s_adv.events,"event54"); // Product Locator Actions
			break;
			case 'where_to_buy:dealer_locator:product_selected':
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_adv.linkTrackVars += ",products,eVar52,events";
				s_adv.eVar52 = "Dealer Locator - Product Selected";
				s_customLinkName = "Dealer Locator - Product Selected";
				s_adv.linkTrackEvents="event54";
				s_adv.products = ";"+val3; // Product Locator - Product
				s_adv.events=s_adv.addToList(s_adv.events,"event54"); // Product Locator Actions
			break;
			case "online_shop:step2":
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_pName = "Online Shop:step2[just logged]";
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_pName = "Online Shop:step2[already logged]";
					s_processName="Online Shop Already Logged";
				}else{
					s_pName = "Online Shop:step2[guest]";
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event11"); // Online Shop - Step 2
				s_onlineshop_flag =true;
			break;
			case "online_shop:step3":
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_pName = "Online Shop:step3[just logged]";
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_pName = "Online Shop:step3[already logged]";
					s_processName="Online Shop Already Logged";
				}else{
					s_pName = "Online Shop:step3[guest]";
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event12"); // Online Shop - Step 3
				s_onlineshop_flag =true;
			break;
			case "online_shop:step4":
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_pName = "Online Shop:step4[just logged]";
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_pName = "Online Shop:step4[already logged]";
					s_processName="Online Shop Already Logged";
				}else{
					s_pName = "Online Shop:step4[guest]";
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event13"); // Online Shop - Step 4
				s_onlineshop_flag =true;
			break;
			case "online_shop:step5":
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_pName = "Online Shop:step5[just logged]";
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_pName = "Online Shop:step5[already logged]";
					s_processName="Online Shop Already Logged";
				}else{
					s_pName = "Online Shop:step5[guest]";
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				s_adv.events=s_adv.addToList(s_adv.events,"event14"); // Online Shop - Step 5
				s_adv.events=s_adv.addToList(s_adv.events,"scCheckout"); // Checkout
				s_onlineshop_flag =true;
			break;
			case "online_shop:print":
				s_pNameReset = true;
				s_customLinkTrack = true;
				s_customLinkName = "online_shop:print";
				s_adv.linkTrackVars += ",eVar20,events";
				s_adv.linkTrackEvents="event63";
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_processName="Online Shop Already Logged";
				}else{
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				s_pName="Online Shop:print";
				s_adv.events=s_adv.addToList(s_adv.events,"event63"); // Microsite Download
			break;
			case "online_shop:live_chat:display":
				s_customLinkTrack = true;
				s_customLinkName = "online_shop:live_chat:display";
				s_adv.linkTrackVars += ",eVar20,eVar21,eVar57,events";
				s_adv.linkTrackEvents="event65";
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_processName="Online Shop Already Logged";
				}else{
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				if(typeof s_accountID != "undefined" && s_accountID != ""){
					s_adv.eVar21=s_accountID;
				}
				s_adv.eVar57=((typeof val1 != "undefined" && val1 != "")?val1+"|":"")+s_tmp_pName;
				var expiredcookie=new Date();
				currentTime=expiredcookie.getTime()
				halfhour=30*60*1000;
				expiredcookie.setTime(currentTime+halfhour);
				s_adv.c_w("livechatdisplay",s_adv.eVar57,expiredcookie);
				s_adv.events=s_adv.addToList(s_adv.events,"event65"); // Live chat displayed
			break;
			case "online_shop:live_chat:start":
				s_customLinkTrack = true;
				s_customLinkName = "online_shop:live_chat:start";
				s_adv.linkTrackVars += ",eVar20,eVar21,eVar57,events";
				s_adv.linkTrackEvents="event66";
				if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "just logged"){
					s_processName="Online Shop Just Logged";
				}else if(typeof s_adv.c_r("o_s_logged") != "undefined" && s_adv.c_r("o_s_logged") == "already logged"){
					s_processName="Online Shop Already Logged";
				}else{
					s_processName="Online Shop Guest";
				}
				s_adv.eVar20=s_processName;
				if(typeof s_accountID != "undefined" && s_accountID != ""){
					s_adv.eVar21=s_accountID;
				}
				var expiredcookie=new Date();
				currentTime=expiredcookie.getTime()
				halfhour=30*60*1000;
				expiredcookie.setTime(currentTime+halfhour);
				s_adv.c_w("livechat","livechat",expiredcookie);
				if(typeof s_adv.c_r("livechatdisplay") != "undefined" && s_adv.c_r("livechatdisplay") != ""){
					var getchatModeCookie = s_adv.c_r("livechatdisplay").split('|');
					if(typeof val1 != "undefined" && val1 != "" && getchatModeCookie[0] != val1){
						s_adv.eVar57= val1+"|"+s_tmp_pName;
					}else{
						s_adv.eVar57=s_adv.c_r("livechatdisplay")+"|"+s_tmp_pName;
					}
					s_adv.c_w("livechatdisplay","",-1);
				}else{
					s_adv.eVar57= ((typeof val1 != "undefined" && val1 != "")?val1+"|":"")+s_tmp_pName;
				}
				
				s_adv.events=s_adv.addToList(s_adv.events,"event66"); // Live chat started
			break;
		}
	}

	if(!s_doNotTrack){
		if(s_customLinkTrack){
			s_adv.tl(true,"o",s_customLinkName);
			s_adv.linkTrackVars = s_tmp_LTV ;
			s_adv.linkTrackEvents = s_tmp_LTE;
		}
		else{
			s_adv.t();
		}
		if(s_pNameReset)
			s_pName = s_tmp_pName;
	}
}


function s_resetVars(){

	s_pState="";
	s_pState2 = "";
	s_adv.events="";
	s_adv.products="";
	s_adv.purchaseID="";
	s_adv.campaign="";
	s_adv.pageName="";
	s_adv.channel="";
	s_adv.server="";
	s_adv.hier1="";
	
	for(i=1;i<=75;i++){
		eval("s_adv.prop"+i+"=''")
		eval("s_adv.eVar"+i+"=''")
	}
}


/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
 /*
 * Plugin: exitLinkHandler 0.5 - identify and report exit links
 */
s_adv.exitLinkHandler=new Function("p",""
+"var s=this,h=s_adv.p_gh(),n='linkInternalFilters',i,t;if(!h||(s_adv.linkTyp"
+"e&&(h||s_adv.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s_adv.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s_adv.lt(h)=='e')s_adv.li"
+"nkType='e';else h='';s[n]=t;return h;");
/*
 * Plugin: downloadLinkHandler 0.5 - identify and report download links
 */
s_adv.downloadLinkHandler=new Function("p",""
+"var s=this,h=s_adv.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s_adv.linkT"
+"ype&&(h||s_adv.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s_adv.lt(h)=='d')s_adv.linkType='d';else h='';s[n]=t;return h;");

/*
 * Utility Function: p_gh
 */
s_adv.p_gh=new Function(""
+"var s=this;if(!s_adv.eo&&!s_adv.lnk)return '';var o=s_adv.eo?s_adv.eo:s_adv.lnk,y=s_adv.ot("
+"o),n=s_adv.oid(o),x=o.s_oidt;if(s_adv.eo&&o==s_adv.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s_adv."
+"ot(o);n=s_adv.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*
* Plugin Utility: apl v1.1
*/
s_adv.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l"); 


if(typeof(Adversitement) == 'undefined') {
  var Adversitement = {};
}

function s_strReplacement(str){
	newstr = str.replace(/[??]/g,"a")
	newstr = newstr.replace(/[??]/g,"A")
	newstr = newstr.replace(/[????]/g,"e")
	newstr = newstr.replace(/[????]/g,"E")
	newstr = newstr.replace(/[???]/g,"u")
	newstr = newstr.replace(/[???]/g,"U")
	newstr = newstr.replace(/[??]/g,"i")
	newstr = newstr.replace(/[??]/g,"I")
	return newstr;
}

Adversitement.extra = function() {
  //Private variables
  /**
   * Handle javascript errors
   * @private   
   */     
  var onError = function(s_account, prop, msg, url, l) {
    var p,ltv,lte;
    var err = url+':'+msg+':'+l;
    var s = s_gi(s_account);
    ltv = s_adv.linkTrackVars;
    lte = s_adv.linkTrackEvents;  
    if(prop) {
      p = s[prop];
      s[prop] = err;
      s_adv.linkTrackVars = prop;
    }
    s_adv.linkTrackEvents = 'None';
    s_adv.tl(this,'o','Javascript Error');
    if(p) {
      s[prop] = p;
    }
    s_adv.linkTrackVars = ltv;
    s_adv.linkTrackEvents = lte;
  };
 
  //Public variables
  return /** @scope Adversitement.extra */ {
 
    
    /**
     * On Javascript error send error url, message and line number as link to SiteCatalyst
     * @param s_account accountId
     * @param prop CustomInsight variable name or eVar variable name          
     */         
    addOnErrorHandler: function(s_account, prop) {
      if(window.onerror && typeof(window.onerror)=='function') {
        var tmp = window.onerror;
        window.onerror = function(msg, url, l) {
          tmp(msg, url, l);
          onError(s_account, prop, msg, url, l);
        };
      } else {
        window.onerror = function(msg, url, l) {
          onError(s_account, prop, msg, url, l);
        };
      }
    }
  }
}(); // create the actual object

//Adversitement.extra.addOnErrorHandler(s_account, 'prop16');
/*
 * Function to transform specific integer to an interval
 */
s_adv.createInterval = function(val, bounds, unit, units, dutch) {
    if (val == parseFloat(val)) {        // numeric input
        var s_i = 0;
        var s_len = bounds_adv.length;
        while (s_i < s_len && val > bounds[s_i]) {       
            s_i++;
        }
       
        if (dutch) {
            var smaller = "Minder dan ";
            var larger = "Meer dan ";
            var separator = " tot ";
            var plural = (units !== undefined ? units : unit + "en");
        }
        else {
            var smaller = "Less than ";
            var larger = "More than ";
            var separator = " to ";
            var plural = (units !== undefined ? units : unit + "s");
        }
       
       
        if (val == 0) {   
            val = "0 " + plural;
        }
        else if (s_i == 0) {        // val <= bound[0]
            val = smaller + bounds[0] + " " + plural;
        }
        else if (s_i == s_len) {    // val > bounds[s_len-1]
            val = larger + bounds[s_len - 1] + " " + plural;
        }
        else {                        // val <= bounds[s_i]
            if (bounds[s_i] - bounds[s_i-1] == 1) {    // unit interval
                val = val + " " + (val != 1 ? plural : unit);
            }
            else {
                val = bounds[s_i - 1] + separator + bounds[s_i] + " " + plural;
            }
        }
    }   
    return val;   
};


s_adv.addToList=new Function("l","s","if(l){if(s){return l+','+s}else{retu"
+"rn l}}else{return s}");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s_adv.getValOnce=new Function("v","c","e",""
+"var s=this,k=s_adv.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s_adv.c_w(c,v,e?a:0);}return v==k?'':v");


/*
 * Plugin: getQueryParamA 1.0
 * Based on getQueryParam 2.3
 * 
 * http://www.adversitement.nl
 */
s_adv.getQueryParamA=function(p,d,u){var s=this,v="",i,t,a;d=d?d:"";u=u?u:(s_adv.pageURL?s_adv.pageURL:s_adv.wd.location);
if(u=="f"){u=s_adv.gtfs().location}while(p){i=p.indexOf(",");i=i<0?p.length:i;
t=s_adv.p_gpvA(p.substring(0,i),u+"");if(t){t=t.indexOf("#")>-1?t.substring(0,t.indexOf("#")):t
}if(t){v+=v?d+t:t}a=s_adv.p_gpvA(p.substring(0,i),u+"","#");if(a){v+=v?d+a:a
}p=p.substring(i==p.length?i:i+1)}return v};s_adv.p_gpvA=function(k,u,a){if(!a){a="?"
}var s=this,v="",i=u.indexOf(a),q;if(k&&i>-1){q=u.substring(i+1);v=s_adv.pt(q,"&","p_gvfA",k)
}return v};s_adv.p_gvfA=function(t,k){if(t){var s=this,i=t.indexOf("="),p=i<0?t:t.substring(0,i),v=i<0?"True":t.substring(i+1);
if(p.toLowerCase()==k.toLowerCase()){return s_adv.epa(v)}}return""};

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s_adv.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s_adv.c_r(cn);if(cval.length="
+"=0){s_adv.c_w(cn,ct+'-New',e);return'New';}sval=s_adv.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s_adv.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s_adv.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getQueryParam 2.3
 */
s_adv.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s_adv.pageURL?s_adv.pageURL:s_adv.wd.locati"
+"on);if(u=='f')u=s_adv.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s_adv.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s_adv.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s_adv.pt(q,'&','p_gvf',k)}return v");
s_adv.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s_adv."
+"epa(v)}return ''");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s_adv.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin: Get Previous Value (requires s_adv.split)
 */
s_adv.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s_adv.events){i=s_adv.split(el,',');j=s_adv.split(s_adv.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s_adv.c_r(c)) r=s_adv.c_r(c);v?s_adv.c_w(c,v,t)"
+":s_adv.c_w(c,'no value',t);return r}}}}}else{if(s_adv.c_r(c)) r=s_adv.c_r(c);v?"
+"s_adv.c_w(c,v,t):s_adv.c_w(c,'no value',t);return r}");

/*
 * Plugin: TimeParting
 */
s_adv.getTimeParting = new Function("t", "z", "y", "" + "dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||" + "dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);" + "if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay(" + ");gnov= new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'" + "+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();" + "if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO" + "ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear(" + ");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr" + "iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi" + "sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=" + "days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3" + "0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th" + "ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'" + ":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim" + "estring}if(t=='d'){return daystring};if(t=='w'){return en" + "dstring}}};");

/*
 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
 *	specified variable in cookie and returns value
 */

s_adv.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s_adv.events&&ev){var"
+" ay=s_adv.split(ev,',');var ea=s_adv.split(s_adv.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s_adv.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s_adv.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s_adv.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s_adv.repl(z,'[','');z=s_adv.repl(z,']','');z=s_adv.repl(z,\"'\",'');arry"
+"[q]=s_adv.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s_adv.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s_adv.c_w(cn,data,e);var r=s_adv.join(h,{deli"
+"m:dl});if(ce)s_adv.c_w(cn,'');return r;");

/*
 * Plugin Utility: Replace v1.0
 */
s_adv.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");



/*
 * Plugin: s_adv.join (required by Campaign stacking)
*/

s_adv.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s_adv.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Function to transform specific integer to an interval
 */
s_adv.createInterval = function(val, bounds, unit, units, dutch) {
    if (val == parseFloat(val)) {        // numeric input
        var s_i = 0;
        var s_len = bounds_adv.length;
        while (s_i < s_len && val > bounds[s_i]) {       
            s_i++;
        }
       
        if (dutch) {
            var smaller = "Minder dan ";
            var larger = "Meer dan ";
            var separator = " tot ";
            var plural = (units !== undefined ? units : unit + "en");
        }
        else {
            var smaller = "Less than ";
            var larger = "More than ";
            var separator = " to ";
            var plural = (units !== undefined ? units : unit + "s");
        }
       
       
        if (val == 0) {   
            val = "0 " + plural;
        }
        else if (s_i == 0) {        // val <= bound[0]
            val = smaller + bounds[0] + " " + plural;
        }
        else if (s_i == s_len) {    // val > bounds[s_len-1]
            val = larger + bounds[s_len - 1] + " " + plural;
        }
        else {                        // val <= bounds[s_i]
            if (bounds[s_i] - bounds[s_i-1] == 1) {    // unit interval
                val = val + " " + (val != 1 ? plural : unit);
            }
            else {
                val = bounds[s_i - 1] + separator + bounds[s_i] + " " + plural;
            }
        }
    }   
    return val;   
};

/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
s_adv.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/*
 * Plugin: Form Analysis 2.1 (Success, Error, Abandonment)
 */
s_adv.setupFormAnalysis=new Function(""
+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");
s_adv.sendFormEvent=new Function("t","pn","fn","en",""
+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s_adv.faol=new Function("e",""
+"var s=s_c_il["+s_adv._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
+".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s_adv.faos=new Function("e",""
+"var s=s_c_il["+s_adv._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s_adv.fasl=new Function("e",""
+"var s=s_c_il["+s_adv._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"
+"();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"
+"ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s_adv.fam=new Function("e",""
+"var s=s_c_il["+s_adv._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s_adv.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s_adv.fage=new Function("e","a",""
+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

/* Module: Media */
s_adv.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+"Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
+"+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
+".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
+"n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
+"c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
+"2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
+"x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
+"ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.fl"
+"oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
+"s,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
+"m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
+"=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
+"':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
+".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
+".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
+".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
+"'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
+"c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
+"i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
+"=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
+"k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
+"ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
+".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx="
+"sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
+"uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
+"c=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s"
+"_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
+"ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
+",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
+"1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
+"';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
+"hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
+"?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
+"';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
+",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
+"+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
+"(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
+"+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
+"\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTag"
+"Name(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,fal"
+"se);if(m.onLoad)m.onLoad(s,m)";
s_adv.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l="
+"s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilitySta"
+"te;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,"
+"c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'"
+"}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){v"
+"ar s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf"
+"('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':"
+"s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='N"
+"ONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString"
+"()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i"
+"].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.a"
+"pv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.w"
+"d,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c"
+"=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tf"
+"s=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=thi"
+"s,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s."
+"trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.ne"
+"t';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mob"
+"ile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if"
+"(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;"
+"r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_"
+"il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dl"
+"n<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-"
+"b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf="
+"function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='"
+"',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+="
+"8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if"
+"(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c='"
+"'}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\""
+";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nf"
+"l.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substr"
+"ing(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f"
+".indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')s"
+"k='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=f"
+"unction(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrac"
+"kEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',e"
+"vents,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf"
+"(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=="
+"'referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visit"
+"orMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visit"
+"orNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';el"
+"se if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else i"
+"f(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=="
+"'events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSe"
+"conds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';els"
+"e if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier"
+"'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0"
+"?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s"
+".lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lf"
+"t,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','v"
+"ar s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cpp"
+"XYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=functi"
+"on(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l"
+".protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o)"
+"{var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type."
+"toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&("
+"!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o."
+"value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s="
+"this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return '"
+"'};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('="
+"'),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c"
+"_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s"
+".sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Funct"
+"ion('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0|"
+"|oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachE"
+"vent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplin"
+"gGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=fu"
+"nction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))re"
+"turn n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLower"
+"Case)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',argument"
+"s))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s."
+"m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il"
+"','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]]"
+")r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",a"
+"rguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if(("
+"\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)f"
+"or(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){"
+"if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g["
+"i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.subs"
+"tring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_"
+"c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.m"
+"axDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.t"
+"ype=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o"
+"=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=funct"
+"ion(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}"
+"}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s."
+"dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDel"
+"ay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s"
+".track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt="
+"tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',v"
+"b=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn"
+"=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new "
+"Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v"
+"=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if("
+"s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage"
+"(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}i"
+"f(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidt"
+"h=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.documen"
+"t.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o"
+"),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.o"
+"nclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.link"
+"Name;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageUR"
+"L;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape("
+"t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referre"
+"r=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if("
+"s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,"
+"i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i"
+"];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml"
+")for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if"
+"(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.loc"
+"ation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6"
+"=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer')"
+";s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=par"
+"seFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpp"
+"erCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServer"
+"Secure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,"
+"deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,"
+"lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',"
+"prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,jav"
+"ascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,tra"
+"ckingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExte"
+"rnalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s."
+"sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t("
+")};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()