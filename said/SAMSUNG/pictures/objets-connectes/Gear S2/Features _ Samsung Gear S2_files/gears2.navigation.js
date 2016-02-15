(function(){
    /************
     * CONFIG
     *************/
    var _ROOT_PATH,
        _CONFIG = {
            pageList : [
                {
                    constantName : 'features',  // html상단에 입력한 페이지 텍스트 & URL 폴더명
                    displayName : 'Caractéristiques',    // GNB 및 Footer 네비게이션에 표시되는 텍스트
                    pageUrl : false,                              // 외부 url이 있는지 유무
                    pageLink : 'features/#design'                                    // 외부 url 주

                },
				 /*{
                    constantName : 'personalize',  // html상단에 입력한 페이지 텍스트 & URL 폴더명
                    displayName : 'Personnalisation',    // GNB 및 Footer 네비게이션에 표시되는 텍스트
                    pageUrl : false,                              // 외부 url이 있는지 유무
                    pageLink : 'personalize/'                                    // 외부 url 주

                },*/
		   {
                    constantName : 'accessories',
                    displayName : 'ACCESSOIRES',
                    pageUrl : false,
                    pageLink : 'accessories/'
                },
               {
                   constantName : 'apps',
                    displayName : 'APPLICATIONS',
                    pageUrl : false,
                    pageLink : 'apps/'
                }, 
				
                {
                    constantName : 'videos',
                    displayName : 'VIDEO',
                    pageUrl : false,
                    pageLink : 'videos/'
                },
               {
                   constantName : 'gallery',
                    displayName : 'GALERIE',
                    pageUrl : false,
                    pageLink : 'gallery/'
                },
                {
                    constantName : 'specs',
                    displayName : 'Spécifications',
                    pageUrl : false,
                    pageLink : 'specs/'
                },
              //  {
              //     constantName : 'support',
              //      displayName : 'ASSISTANCE ',
              //      pageUrl : true,
              //      pageLink : '/fr/support'

              //  }
			  
            ],
            familySite : [
                {
                    img : '../common/promotions/galaxy/familyLink/img_gnb_family_edge+.png', // icon image
                    title : 'Galaxy S6 edge +',                                                             // text
                    link : '/fr/promotions/galaxy/s6edge-plus/',                                // link
                    fClassName : 's6edge'
                },
                {
                    img : '../common/promotions/galaxy/familyLink/img_gnb_family_edge.png',
                    title : 'Galaxy Note 5',
                    link : '/fr/promotions/galaxy/galaxys6/',
                    fClassName : 'note5'
                }
            ],
            shop : true,
            buyNow : ''
        };
    /************
     * ////// CONFIG
     *************/

    var topNaviHtml = [],
        bottomNaviHtml= [],
        pageName = __CONSTANT_CURRENT_PAGE_NAME || '';
    pageName = pageName.toLowerCase();

    _ROOT_PATH = ( pageName === 'overview') ? '' : '../';

    var currentPageIdx = (function( pageName ){
        var _idx  = null;

        $.each( _CONFIG.pageList , function( idx, obj ){
            if( obj.constantName == pageName ){
                _idx = idx;
            }
        });

        return _idx;

    })( pageName );

    var prevPage = ( currentPageIdx != null )  ? _CONFIG.pageList[currentPageIdx-1] : null,
        nextPage = ( currentPageIdx != null ) ? _CONFIG.pageList[currentPageIdx+1] : null,
        currentPageDisplayName = ( _CONFIG.pageList[currentPageIdx] ) ? _CONFIG.pageList[currentPageIdx].displayName : '';

    /**
     * topNaviHtml
     */
topNaviHtml.push('<div class="l-con">');

    topNaviHtml.push('<a class="l-lnb-logo" href="'+ _ROOT_PATH +'" title="Home"><span class="sr-only">Gear S2</span></a>');
    // topNaviHtml.push('<a class="l-lnb-toggle" href="#"><span class="sr-only" data-open="menu open" data-close="menu close">menu open</span></a>'); 150922 삭제
    topNaviHtml.push('<nav class="l-lnbGroup">');
    topNaviHtml.push('  <div class="l-lnb-listWrap" id="wrapper">');
    topNaviHtml.push('  <div class="lnb-wrap">');
    topNaviHtml.push('      <ul class="l-lnb-list">');

    $.each( _CONFIG.pageList, function( idx, obj ){
        if( idx == currentPageIdx ){
            if (obj.pageUrl == true) {
                topNaviHtml.push('          <li class="l-lnb-item l-lnb-item--'+ obj.constantName +' is-active"><a href="'+ obj.pageLink +'/" onClick=\"sendClickCode( \'microsite_action\' , \'fr:gears2:menu_' +  obj.constantName + '\');"'+'>'+ obj.displayName +'</a></li>');
            }else {
                topNaviHtml.push('          <li class="l-lnb-item l-lnb-item--'+ obj.constantName +' is-active"><a href="'+ _ROOT_PATH + obj.pageLink +'"  onClick=\"sendClickCode( \'microsite_action\' , \'fr:gears2:menu_' +  obj.constantName + '\');"'+'>'+ obj.displayName +'</a></li>');
            }
        } else {
            if (obj.pageUrl == true) {
                topNaviHtml.push('          <li class="l-lnb-item l-lnb-item--'+ obj.constantName +'"><a href="'+ obj.pageLink +'/" onClick=\"sendClickCode( \'microsite_action\' , \'fr:gears2:menu_' +  obj.constantName + '\');"'+'>'+ obj.displayName +'</a></li>');
            }else {
                topNaviHtml.push('          <li class="l-lnb-item l-lnb-item--'+ obj.constantName +'"><a href="'+ _ROOT_PATH + obj.pageLink +'" onClick=\"sendClickCode( \'microsite_action\' , \'fr:gears2:menu_' +  obj.constantName + '\');"'+'>'+ obj.displayName +'</a></li>');
            }
        }
    });
    
    
    topNaviHtml.push('      </ul>');
    topNaviHtml.push('  <span class="l-lnb-bar"></span>');
    topNaviHtml.push('  </div>');
    topNaviHtml.push('  </div>');

    // Type A, B
	
	
    topNaviHtml.push('  <span class="l-lnb-item l-lnb-item--buynow l-lnb-item--shop"><a href="/fr/galaxy/gear-s2/shop/" data-omniture="gears2:menu_buynow"><span>ACHETER</span></a></span>');
	
	<!--topNaviHtml.push('  <span class="l-lnb-item l-lnb-item--buynow"><a href="/fr/offer/un-tour-d-avance" data-omniture="gears2:menu_promotion"><span>Promotion</span></a></span>');-->

   
   
    // Type C
    //topNaviHtml.push('  <span class="l-lnb-item l-lnb-item--buynow"><a href="'+ _ROOT_PATH+'pre-order/" data-omniture="gears2:menu_wheretobuy" class="active><span>Précommande</span></a></span>');
    // Type D
   // topNaviHtml.push('  <span class="l-lnb-item l-lnb-item--buynow"><a href="http://www.samsung.com/my/storelocator/" target="_blank" data-omniture="gears2:menu_wheretobuy" class="active"><span>WHERE TO BUY</span></a></span>');

    
    topNaviHtml.push('</nav><script type="text/javascript" src="../js/gears2.iscroll.js"></script>');

topNaviHtml.push('  </div>');

    /**
     * bottomNaviHtml
     */
    //bottomNaviHtml.push('<div class="storeLink">');
    //if( _CONFIG.shop ){
        // 150922 삭제
        // bottomNaviHtml.push('   <div class="storeLink-group storeLink-group-online">');
        // bottomNaviHtml.push('       <strong class="storeLink-group-tit">Shop Samsung.com</strong>');
        // bottomNaviHtml.push('       <p class="storeLink-group-txt">You can buy the Gear S2 from the Samsung Online Store.</p>');
        // bottomNaviHtml.push('       <a href="http://www.samsung.com/my/shop/" target="_blank" title="new window open" class="storeLink-group-link">Buy Gear S2</a>');
        // bottomNaviHtml.push('   </div>');
    //} else {
        //bottomNaviHtml.push('   <div class="storeLink-group storeLink-group-support">');
        //bottomNaviHtml.push('       <strong class="storeLink-group-tit">Support</strong>');
        //bottomNaviHtml.push('       <p class="storeLink-group-txt">Get Support and advice on Samsung mobile <br>products from knowledgeable experts.</p>');
        //bottomNaviHtml.push('       <a href="/fr/support/category/mobile/mobiledevice/smartphone/"  target="_blank" title="new window open" class="storeLink-group-link">Go to support</a>');
        //bottomNaviHtml.push('   </div>');
    //}
    //bottomNaviHtml.push('   <div class="storeLink-group storeLink-group-offline">');
    //bottomNaviHtml.push('       <strong class="storeLink-group-tit">Se rendre dans un magasin</strong>');
    //bottomNaviHtml.push('       <p class="storeLink-group-txt">Trouvez le Gear S2 le plus proche.</p>');
    //bottomNaviHtml.push('       <a href="http://ouacheterenmagasin.samsung.fr/" target="_blank" title="new window open" class="storeLink-group-link" onClick="sendClickCode( \'microsite_action\', \'fr:gears2:find a store\' );" >Trouvez un magasin</a>');
    // bottomNaviHtml.push('       <a href="#" title="Layer Open" class="storeLink-group-link preview-location-btn">Find PRE-view store</a>');
    //bottomNaviHtml.push('   </div>');
    //bottomNaviHtml.push('</div>');
	
    // 150922 삭제
    // bottomNaviHtml.push('<div class="quickNavigation">');
    // if( prevPage ){
    //     bottomNaviHtml.push('   <a href="'+ _ROOT_PATH + prevPage.constantName +'/" class="quickNavigation-btn quickNavigation-btn-prev"><span class="quickNavigation-indicator">Prev</span><strong class="quickNavigation-name">'+ prevPage.displayName + '</strong></a>');
    // }
    // if( nextPage ){
    //     bottomNaviHtml.push('   <a href="'+ _ROOT_PATH + nextPage.constantName +'/" class="quickNavigation-btn quickNavigation-btn-next"><span class="quickNavigation-indicator">Next</span><strong class="quickNavigation-name">'+ nextPage.displayName +' </strong></a>');
    // }
    // bottomNaviHtml.push('</div>');



    function gears2ShopLayerOpen(){
        var $iframe = $('<iframe class="ly-findstore-iframe" src="'+ _ROOT_PATH +'/shoplayer/index.html" frameborder="0" width="100%" height="100%" frameborder=0 marginheight=0 marginwidth=0>');

        if(!$('#ly-findstore').length){
            $('body').append('<div id="ly-findstore" class="ly-findstore"><div class="ly-findstore-body"></div></div>');
        }

        $('#ly-findstore').find('.ly-findstore-body').append($iframe.after($('<a href="#" id="closeshopLayer" class="closeshopLayer">Close</a>')));
        $('#ly-findstore').show();
        $('#closeshopLayer').click(function(event){
            event.preventDefault();
            $('#ly-findstore').fadeOut(function(){
                $('#ly-findstore').remove();
            });
        });
    }


    $(function(){
        $('#l-lnb').html( topNaviHtml.join('') );
        $('#l-quickNavigation').html(bottomNaviHtml.join(''));

        if( $('.preview-location-btn').length ){
            $('.preview-location-btn').on('click',function(e){
                e.preventDefault();
                gears2ShopLayerOpen();
            })
        }

        $(document).ready(function(){
            $('#l-lnb').sticky();
        });
        


    });
})();
