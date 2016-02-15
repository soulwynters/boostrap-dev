/**
 * Gear S2
 * Common
 */
var GEAR = GEAR || {};
(function( $, window, document){

    GEAR.UTIL = {

        /**
         * 스크롤바너비를 포함한 윈도우 너비
         * @returns {Number} px
         */
        getWinWidth : function(){
            var $win = $(window), $doc = $(document), scrollbarWidth = 0;
            if( $win.height() < $doc.height() ){
                scrollbarWidth = (function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c})();
            }
            return parseInt( $win.width() + scrollbarWidth, 10 ) ;
        },
        getScreenMode : function(){
            return (this.getWinWidth() > 767 ? 'PC' : 'MOBILE');
        },
        isVideoSupport : !!document.createElement('video').canPlayType
    };


})(jQuery, window, document);



/**
 * Tagging Binding
 */
(function(){
    $(function($){
        var SITECODE = $('meta[name="sitecode"]').attr('content');

        $('a[data-omniture]').each(function(idx, ele){
            $(ele).click(function(event){
                //event.preventDefault();
                if($(ele).attr('href') == '#'){
                    event.preventDefault();
                }
                sendClickCode('microsite_action', SITECODE + ':'+ $(this).data('omniture'));
            })
        });
    });
})(jQuery);


/**
 * Swapping PC/Mobile Image Change (Lazy Loading)
 */
(function($, window){

    var resizeTimer = null;
    var viewPortMode = null;

    var changeImageMode = function(){
        var checkedViewPort = null;
        var $adaptiveImg = $('[data-img-m]');

        if ( GEAR.UTIL.getWinWidth() > 767 ){
            checkedViewPort = 'p';
        } else {
            checkedViewPort = 'm';
        }

        if( viewPortMode != checkedViewPort ){

            $adaptiveImg.each(function(){
                $(this).attr('src', $(this).attr('data-img-'+ checkedViewPort ) );
            });

            viewPortMode = checkedViewPort;
        }
    };

    $(function(){
        changeImageMode();

        $(window).on('resize',function(){
            clearTimeout( resizeTimer );
            resizeTimer = null;
            resizeTimer = setTimeout(function(){
                changeImageMode();
            },100);
        });
    });

})(jQuery, window);


/**
 * sCheck
 * custome Radio Check box Plugin
 *
 */
;(function(window, document, $, undefined){

    var pluginName = 'sCheck';
    var defaults = {
        isCheckedClass : pluginName+'--checked',
        hasFocusClass : pluginName+'--focusing'
    };

    function S_Check (el, options){
        var _this = this;

        _this.el = el;
        _this.$el = $(el);
        _this.type = el.type.toLowerCase();
        _this.option = $.extend({}, defaults, options);
        _this._name = pluginName;

        if(_this.type == 'radio' || _this.type == 'checkbox'){
            _this._init();
        }
    }

    S_Check.prototype._init = function(){
        var _this = this;
        _this.$label = $('[for='+ _this.$el.attr('id') +']');
        _this.$el.data(_this._name+'-label',_this.$label).addClass(_this._name +' '+ _this._name+'-'+_this.type).off();
        _this.$label.addClass(_this._name+'-label '+_this._name+'-label-'+_this.type);
        _this.validator(_this.el);
        _this._onEvent();
    };

    S_Check.prototype.validator = function( elements ){
        var _this = this;
        var $elem = $(elements);

        $elem.each(function(){
            var $this = $(this);

            if( this.checked ){
                $( $this.data(_this._name+'-label') ).addClass(_this.option.isCheckedClass);
            } else {
                $( $this.data(_this._name+'-label') ).removeClass(_this.option.isCheckedClass);
            }
        });
    };

    S_Check.prototype._onEvent = function() {
        var _this = this;

        if (_this.type == 'checkbox') {
            _this.$el.on('change', function () {
                _this.validator(this)
            });
        }
        if (_this.type == 'radio') {
            _this.$el.on('change', function () {
                _this.validator( $('input[name="'+ $(this).attr('name') +'"]') );
            });
        }

        _this.$el.on({
            'keyup' : function(){
                _this.$label.addClass( _this.option.hasFocusClass );
                $(this).one('blur',function(){
                    _this.$label.removeClass( _this.option.hasFocusClass );
                })
            },
            'update' : function(){
                _this.validator( this );
            }
        });
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            var _this = this;
            if (!$.data(_this, "plugin_" + pluginName)) {
                $.data(_this, "plugin_" + pluginName, new S_Check(_this, options));
            }
        });
    };

	$(function(){
		$('.chk').find('input').sCheck();
	});

})(window, document, jQuery);




/***********************************************
 *
 *  LNB Navigation
 *
 **********************************************/
/**
 * PC & mobile LNB Menu Toggle Action Binding
 */
(function( $, window, document ){
    $(function() {
        var $win = $(window),
            $lnb = $('#l-lnb'),
            $toggle = $lnb.find('.l-lnb-toggle'),
            $navListWrap = $lnb.find('.l-lnb-listWrap'),
            $navList = $lnb.find('.l-lnb-list'),
            $currentIdx = $navList.find('.is-active').index(),
            $bar = $lnb.find('.l-lnb-bar');

        var _PC_WIDTH = 1024,
            _IS_MOBILE = GEAR.UTIL.getWinWidth() < _PC_WIDTH;

        var mobileGnbScrollBar;

        /***
         * Mobile
         */

        //모바일 오픈
        var mobileOpen = function ($text) {

            if ( !_IS_MOBILE ) {
                return false;
            }

            $toggle.addClass('is-open');
            $navListWrap.css('display','block');
            var navScreenOffsetTop = $navListWrap.offset().top - $(document).scrollTop();

            $navListWrap.css('height',0)
                .animate({'height': $win.height() - navScreenOffsetTop }, 400 ,function(){
                    mobileGnbScrollBar = new IScroll( $navListWrap.get(0) ,{
                        mouseWheel: true,
                        scrollbars: true,
                        click : true,
                        tab : true
                    });
                });

            $text.text($text.data('close'));

            $navList.find('a').first().off('keydown').on('keydown', function (e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode == 9 && e.shiftKey) {
                    e.preventDefault();
                    mobileClose($toggle.find('.sr-only'));
                }
            });

            $navList.find('a').last().off('keydown').on('keydown', function (e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode == 9 && !e.shiftKey) {
                    e.preventDefault();
                    mobileClose($toggle.find('.sr-only'));
                }
            });

            $(window).on('resize.lnbMenu', function () {
                $navListWrap.height( $win.height() - ( $navListWrap.offset().top - $(document).scrollTop() ) );

                if ( GEAR.UTIL.getWinWidth() >= _PC_WIDTH) {
                    mobileClose( $toggle.find('.sr-only') );
                }
            });
        };

        //모바일 클로즈
        var mobileClose = function ($text) {
            //if ( !_IS_MOBILE ) {
            //    return false;
            //}
            //$navListWrap.height(0).css('display','inline');
            $navListWrap.animate({height : 0}, 300, function(){
                $(this).css('display','inline');
            })
            $toggle.removeClass('is-open');
            $toggle.focus();
            $text.text($text.data('open'));
            mobileGnbScrollBar.destroy();
            mobileGnbScrollBar = null;
            $(window).off('resize.lnbMenu');

        };

        $toggle.on('click', function (e) {
            var $this = $(this);
            var $text = $(this).find('.sr-only');

            if ( $this.hasClass('is-open') ) {
                mobileClose($text);
            } else {
                mobileOpen($text);
            }

            e.preventDefault();
            e.stopPropagation();
        });


        /***
         * PC
         */

        /**
         * PC 네비 언더바 액션
         * @param targetIdx
         * @param barSpeed
         * @returns {boolean}
         */
        var loadNavi = function () {
                if($('.l-lnb-item.is-active').length != 0) {
                    itemLeft = $('.l-lnb-item.is-active').offset().left;
                    $('.lnb-wrap').scrollLeft(itemLeft);
                }
            }
           loadNavi(); 
        var pcBarActive = function (targetIdx, barSpeed) {
            var $li = $navList.find('.l-lnb-item'),
                $target = $li.eq(targetIdx);

            if ( _IS_MOBILE ) {
                return false;
            }

            if (typeof barSpeed == 'undefined') {
                barSpeed = 500;
            }
            if ($bar.offset().left < 100) {
                barSpeed = 0;
            }

            $target.addClass('is-active').siblings().removeClass('is-active');

            var barLeft = $target.offset().left,
                barWidth = $target.outerWidth();

            $bar.css('visibility', 'visible').stop(true, false).animate({
                left: barLeft,
                width: barWidth
            }, barSpeed, 'easeOutExpo');
        };

        var pcBarDeactive = function () {
            $navList.find('.l-lnb-item').removeClass('is-active');
            $bar.animate({
                width: 0
            }, 300, 'easeOutExpo');
        };

        $(document).ready(function () {
            $(window).on('resize.gnb', function () {
                if ($currentIdx >= 0) {
                    pcBarActive($currentIdx, 0);
                }
                _IS_MOBILE = GEAR.UTIL.getWinWidth() < _PC_WIDTH;
            }).trigger('resize.gnb');
        });

        // PC
        $navList.on('mouseenter', 'a', function (e) {
            pcBarActive( $(this).closest('li').index() );
        }).on('mouseleave', function () {
            if ( $currentIdx >= 0 ) {
                pcBarActive($currentIdx);
            } else {
                pcBarDeactive();
            }
        });

    });
})(jQuery, window, document );

$(function(){
    $(function(){
        $('body').animate({scrollTop:$('.nav').height()}, 300, function(){
           setTimeout(function(){firstLoading = false;}, 200);
        });
        if (location.href.indexOf("/features/#design") > -1) {
            var headerHeight = $(".l-lnb").height(), $wrapper = $("#wrapper");
            if ($wrapper.css("display") == "block") headerHeight += $wrapper.height();
            $('html,body').animate({scrollTop:$("#design").offset().top - headerHeight}, {duration:200, easing: "easeInOutSine"});
        }

    });
});

$(document).ready(function () { 
    if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
        $content = $('#content');
        
        is_chrome && $content.addClass('m_chrome');
    }
});








