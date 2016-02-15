/**
 *   multiText Ellipsis Plugin
 *   sEllipsis
 **/
;(function ( $, window, document, undefined){
    var pluginName = 'sEllipsis';
    var defaults = {
        reducedClass : pluginName+'--reduced',
        expandedClass : pluginName+'--expanded',
        limitLines : 4
    };

    function Ellipsis(elem, option){
        var base = this;
        base.target = elem;
        base.$target = $(elem);

        base.enable = false;
        base.name = pluginName || 'sEllipsis';
        base.option = $.extend( {}, defaults, option );
        base.$toggle = base.$target.siblings('.item-body-btns').find('.item-body-btn');

        base.init();
    }

    Ellipsis.prototype.init = function(){
        var base = this,
            $target = base.$target,
            resizeTimer;

        base.resize();
        base.$toggle.off().on('click keypress',function(){
            if( base.enable ) {
                if( $target.hasClass( base.option.reducedClass ) ){
                    base.setExpandClass();
                } else {
                    base.setReduceClass();
                }
            }
        });
        $(window).on('resize',function(){
            clearTimeout( resizeTimer );
            resizeTimer = null;

            resizeTimer = setTimeout(function(){
                base.resize();
            },250);
        });

    };

    Ellipsis.prototype.getOriginHeight = function(){
        var base = this,
            $target = base.$target;

        var lineHeight = (function(){
                var _fontSize = parseFloat( $target.css('font-size')),
                    _lineH = $target.css('line-height');

                if( _lineH.indexOf('px') != -1 ){
                    return parseFloat(_lineH);
                } else {
                    return parseFloat(_lineH) * _fontSize;
                }
            })(),
            limitLine = base.option.limitLines || 2;

        base.originHeight = $target.css( {
            'display' : 'block',
            'max-height' : 'none',
            'height' :' auto'
        }).height();

        base.limitHeight = lineHeight * limitLine;
        base.enable = (base.originHeight > base.limitHeight);
        $target.data('originHeight', base.originHeight);
    };

    Ellipsis.prototype.setReduceClass = function(){
        var base = this;
        base.$target.removeClass( base.option.expandedClass ).addClass( base.option.reducedClass ).css('height', base.limitHeight+'px');
        base.$toggle.text( base.$toggle.data('show') ).removeClass('item-body-btn--less').addClass('item-body-btn--more');
    };

    Ellipsis.prototype.setExpandClass = function(){
        var base = this;
        base.$target.removeClass( base.option.reducedClass).addClass( base.option.expandedClass ).css('height', base.$target.data('originHeight') +'px');
        base.$toggle.text( base.$toggle.data('close') ).removeClass('item-body-btn--more').addClass('item-body-btn--less');
    };

    Ellipsis.prototype.resize = function(){
        var base = this,
            $target = base.$target;
        base.getOriginHeight();
        $target.removeClass(base.option.reducedClass+' '+base.option.expandedClass);
        if(base.enable){
            $target.addClass(base.option.reducedClass).css('height', base.limitHeight+'px');
            base.$toggle.show().text( base.$toggle.data('show') ).removeClass('item-body-btn--less').addClass('item-body-btn--more');
        } else {
            base.$toggle.hide();
        }
    };

    $.fn.sEllipsis = function(option){
        return this.each(function(){
            var _this = this;
            if( !$.data( _this, 'plugin_'+pluginName ) && $(_this).width() ){
                $.data( _this, 'plugin_'+pluginName, new Ellipsis( _this, option ) );
            }
        });
    };

})( $, window, document );


/****
 * Key Visual _ Youtube
 */
(function( $ ){
    "use strict";
    $(function(){
        var $kv = $('#keyvisual');

        $kv.on('click','.kv-links-video',function(e){
            e.preventDefault();
            $kv.append( _.template( $('#tmpl-kv-video').html() ) );
            $('.ly-kv').addClass('is-visible');
        });

        $kv.on('click','.ly-kv-close',function(e){
            e.preventDefault();
            $('.ly-kv').removeClass('is-visible');
            setTimeout(function(){
                $('.ly-kv').remove();
            },800);
        });
    })
})(jQuery);

/***
 * Buy Now Layer Open
 */
function buyLayerOpen(){
    if( !$('#ly-buy').length ){
        $('body').append( _.template( $('#tmpl-ly-buy').html() )  );
    }
    $('#ly-buy').find('.ly-buy-close').one('click',function(e){
        e.preventDefault();
        $('#ly-buy').hide();
    });
    $('#ly-buy').fadeIn();
}

/**
 * Reviews
 *
 * */
(function( $ ){
    $(function(){

        var reviewSort = {

            init : function(){
                var _this = this;
                _this.$toggle = $('#reviewList-sort-current');
                _this.$list = $('#reviewList-sort-items');

                _this.bindEvent();

                _this.$list.find('a').eq( _this.$list.find('.active').index() || 0).trigger('click');
            },

            _open : function(){
                var _this = this;
                if( $(window).width() >= 768 ){
                    return false;
                }
                _this.$toggle.addClass('open');
                _this.$list.stop().slideDown();
            },

            _close : function(){
                var _this = this;
                if( $(window).width() >= 768 ){
                    return false;
                }
                _this.$toggle.removeClass('open');
                _this.$list.stop().slideUp();
            },

            bindEvent : function(){
                var _this = this;

                //토글버튼
                _this.$toggle.on('click',function(e){
                    e.preventDefault();
                    var $this = $(this);

                    if( $this.hasClass('open') ){
                        _this._close();
                    } else {
                        _this._open();
                    }
                });

                //리스트 클릭
                _this.$list.on('click','a',function(e){
                    e.preventDefault();
                    var $self = $(this).closest('li');

                    $self.addClass('active').siblings().removeClass('active');
                    _this.$toggle.text( $self.text() );
                    _this._close();
                });
            }
        };


        if( $('.review').length ) {
            // Review contents multiLine Text Ellipsis
            //$('.review').find('.item-body-cont').sEllipsis();

            // Review Sorting
            reviewSort.init();
        }
    });
})(jQuery);




/**
 * 비디오태그 사용 여부
 * 768이상이고, video태그를 지원할 경우 체크
 * @returns {boolean}
 * @private
 */
function __IS_SUPPORT_VIDEO(){
    var support = false;

    if( GEAR.UTIL.getWinWidth() >= 768 && $('html').hasClass('video') ){
        support = true;
    }
    return support;
}



/*******
 *
 * 슬라이드 (비디오 포함)
 * @param el
 * @param options
 * @constructor
 */
function Slider( el, options ){

    var defaults = {
        prevClassName : 'slider-arrow-prev',
        nextClassName : 'slider-arrow-next',
        pagerClassName : 'slider-pager',
        listClassName : 'slider-list',
        itemClassName : 'slider-item',
        moveBeforeFunc : undefined,
        moveAfterFunc : undefined,
        speed : 800
    };
    var _this = this;

    _this.option = $.extend({},defaults,options);
    _this.isAnimating = false;
    _this.$el = $(el);
    _this.$prev = _this.$el.find('.'+_this.option.prevClassName);
    _this.$next = _this.$el.find('.'+_this.option.nextClassName);
    _this.$pager = _this.$el.find('.'+_this.option.pagerClassName);
    _this.$list = _this.$el.find('.'+_this.option.listClassName);
    _this.$item = _this.$el.find('.'+_this.option.itemClassName);

    _this.hasVideo = false;
    _this.supportVideo = true;

    if( _.isUndefined( _this.option.moveBeforeFunc ) ){
        _this.moveBeforeFunc = _this.option.moveBeforeFunc;
    }
    if( _.isUndefined( _this.option.moveBeforeFunc ) ){
        _this.moveAfterFunc = _this.option.moveAfterFunc;
    }

    _this.init();
}

Slider.prototype.init = function(){
    var _this = this;

    _this.currentIdx = 0;
    _this.itemLen = _this.$item.length;
    _this.hasVideo = !!_this.$list.find('.sector-figure-item-video').length;

    _this._resize();
    _this._align(1);
    _this.onEvent();
};

/**
 * Move 전 아이템 정렬
 * @param _direction
 * @private
 */
Slider.prototype._align = function( _direction ){
    var _this = this;

    _this.$item.css('left', _direction * 100 +'%').removeClass('is-active')
        .eq( _this.currentIdx ).css('left',0).addClass('is-active');
    _this._pagerChange( _this.currentIdx );
};

/**
 * 아이템 이동
 * @param targetIdx
 * @param _direction
 * @returns {boolean}
 * @private
 */
Slider.prototype._move = function( targetIdx , _direction ){
    var _this = this;

    if( _this.isAnimating ){
        return false;
    }

    _this._align( _direction );
    _this.isAnimating = true;
    _this.moveBeforeFunc && _this.moveBeforeFunc();

    _this.$item.eq( _this.currentIdx ).stop().animate({'left' : _direction * -100 + '%'}, _this.option.speed ,'easeOutCubic').removeClass('is-active');
    _this.$item.eq( targetIdx ).stop().animate({'left':0}, _this.option.speed,'easeOutCubic',function(){
        _this.isAnimating = false;
        _this.moveAfterFunc && _this.moveAfterFunc();
    }).addClass('is-active');

    _this._pagerChange(targetIdx);
    __IS_SUPPORT_VIDEO() && _this.hasVideo && _this._playVideo(targetIdx);

    _this.currentIdx = targetIdx;
};

/**
 * 리사이즈 트리거로, 비디오 지원여부에 따라 보여줄 영상 및 이미지 선별
 * @private
 */
Slider.prototype._resize = function(){
    var _this = this;

    if( __IS_SUPPORT_VIDEO() ){
        _this.$list.find('.sector-figure-item-video').css('visibility','visible');
        _this.$list.find('.sector-figure-item-img').css('visibility','hidden');
    } else {
        _this.$list.find('.sector-figure-item-video').css('visibility','hidden');
        _this.$list.find('.sector-figure-item-img').css('visibility','visible');
        _this._stopVideo();
    }
};

/**
 * 갖고있는 비디오 Stop
 * @private
 */
Slider.prototype._stopVideo = function(){
    var _this = this;
    if( !_this.hasVideo ) {
        return false;
    }

    _.each( _this.$list.find('.sector-figure-item-video'), function( el, index ){
        el.pause();
        if(el.currentTime) el.currentTime = 0;
    });
};

Slider.prototype._playVideo = function( shownIndex ){
    var _this = this;
    if( !_this.hasVideo ) {
        return false;
    }

    var targetVideo = _this.$list.find('.sector-figure-item-video').eq( shownIndex ).get(0);

    _this._stopVideo();

    if( targetVideo.paused ){
        targetVideo.play();
    }
};

Slider.prototype._pagerChange = function( targetIdx ){
    var _this = this;
    _this.$pager.find('a').removeClass('is-active').eq(targetIdx).addClass('is-active');
};

Slider.prototype.onEvent = function(){
    "use strict";
    var _this = this;

    //외부 공개 이벤트 visible,
    _this.$el.on('parallax.visible',function(){
        var $this = $(this);
        if( !$this.hasClass('parallax-visible') ) {
            _this._playVideo(_this.currentIdx);
            $this.addClass('parallax-visible');
        }
    });

    //외부 공개 이벤트 invisible,
    _this.$el.on('parallax.invisible',function(){
        var $this = $(this);
        if( $this.hasClass('parallax-visible') ) {
            _this._stopVideo();
            $this.removeClass('parallax-visible');
        }
    });
    //외부 공개 이벤트 resize,
    _this.$el.on('parallax.resize',function(){
        _this._resize();
    });

    //페이징버튼
    _this.$pager.on('click','a',function(e){
        e.preventDefault();
        var targetIdx = $(this).index();
        var _direction;

        if( targetIdx > _this.currentIdx ){
            // 오른쪽 정렬
            _direction = 1;
        } else if ( targetIdx < _this.currentIdx ){
            // 좌측 정렬
            _direction = -1;
        }
        _this._move( $(this).index(), _direction );
        designSlideBtn();
    });

    //이전
    _this.$prev.on('click',function(e){
        e.preventDefault();

        var targetIdx = _this.currentIdx -1;
        if( targetIdx < 0 ) {
            targetIdx = _this.itemLen-1;
        }

        _this._move( targetIdx , -1 );
        designSlideBtn();
    });

    //다음
    _this.$next.on('click',function(e){
        e.preventDefault();
        var targetIdx = _this.currentIdx +1;
        if( targetIdx >= _this.itemLen ) {
            targetIdx = 0;
        }
        _this._move( targetIdx , 1);
        designSlideBtn();
    });

    //Touch Swipe
    var tabEvent = function (event,target){
        if(event.type == 'touchend'){
            if( $(target).closest('a').attr('href') ){
                $(target).closest('a').trigger('click');
            }
        }
    };

    var swipeStatus = function (event, phase, direction, distance){
        if( GEAR.UTIL.getWinWidth() >= 768 ){
            return false;
        }
        if (phase == "move" && (direction == "left" || direction == "right")) {

        } else if ( phase == "cancel" || phase =="end"){
            if( distance > 75 ){
                if ( direction == "right" ){
                    _this.$prev.trigger('click');
                } else if ( direction == "left" ){
                    _this.$next.trigger('click');
                }
            }
        }
    };

    _this.$el.swipe({
        triggerOnTouchEnd : true,
        tap : tabEvent,
        swipeStatus : swipeStatus,
        allowPageScroll:"vertical",
        threshold:30,
        excludedElements : []
    });

    // Design 슬라이드 버튼
    var designSlideBtn = function () {
        if($('.slider-item').eq(0).hasClass('is-active')) {
            $('#design').removeClass('g-buletooth-3g');
            $('#design').removeClass('g-classic');
            $('#design').addClass('g-buletooth');
        }else if ($('.slider-item').eq(1).hasClass('is-active')) {
            $('#design').removeClass('g-buletooth');
            $('#design').removeClass('g-classic');
            $('#design').addClass('g-buletooth-3g');
        }else if ($('.slider-item').eq(2).hasClass('is-active')) {
            $('#design').removeClass('g-buletooth');
            $('#design').removeClass('g-buletooth-3g');
            $('#design').addClass('g-classic');
        }    
    }
    designSlideBtn();
};


/****
 *
 * 동영상 재생
 *
 */
function VideoSection( el, option ){
    var _this = this;

    _this.$el = $( el );
    _this.supportVideo = true;
    _this.hasVideo = false;
    _this._init();
}

VideoSection.prototype._init = function(){
    var _this = this;

    _this.hasVideo = !!_this.$el.find('.sector-figure-item-video').length;
    _this._resize();
    _this._onEvent();
};

VideoSection.prototype._playVideo = function(){
    var _this = this;
    if( !_this.hasVideo ) {
        return false;
    }

    var _videoEl = _this.$el.find('.sector-figure-item-video').get(0);
    _this._stopVideo();
    if( _videoEl.paused ){
        _videoEl.play();
    }
};

VideoSection.prototype._stopVideo = function(){
    var _this = this;
    if( !_this.hasVideo ) {
        return false;
    }
    var _videoEl = _this.$el.find('.sector-figure-item-video').get(0);
    _videoEl.pause();
    if(_videoEl.currentTime) _videoEl.currentTime = 0;

};

VideoSection.prototype._resize = function(){
    var _this = this;

    if( __IS_SUPPORT_VIDEO() ){
        _this.$el.find('.sector-figure-item-video').css('visibility','visible');
        _this.$el.find('.sector-figure-item-img').css('visibility','hidden');
    } else {
        _this.$el.find('.sector-figure-item-video').css('visibility','hidden');
        _this.$el.find('.sector-figure-item-img').css('visibility','visible');
        _this._stopVideo();
    }
};

VideoSection.prototype._onEvent = function(){
    var _this = this;

    //외부 공개 이벤트 visible,
    _this.$el.on('parallax.visible',function(){
        var $this = $(this);
        if( !$this.hasClass('parallax-visible') ){
            _this._playVideo();
            $this.addClass('parallax-visible');
        }
    });

    //외부 공개 이벤트 invisible,
    _this.$el.on('parallax.invisible',function(){
        var $this = $(this);
        if( $this.hasClass('parallax-visible') ) {
            _this._stopVideo();
            $this.removeClass('parallax-visible');
        }
    });
    //외부 공개 이벤트 resize,
    _this.$el.on('parallax.resize',function(){
        _this._resize();
    });
};




/*****
 * 패럴럭스 이미지
 */

var firstLoading = true;

function ParallaxImage( el, option ){
    "use strict";
    var _this = this;

    _this.isVisible = false;
    _this.$el = $(el);
    _this.$item = _this.$el.find('[data-parallax]');
    _this.areaTop = _this.$item.offset().top;
    _this.areaBottom = _this.$item.offset().top + _this.$item.height();
    _this.onEvent();
}

ParallaxImage.prototype._resize = function(){
    var _this = this;
    _this.areaTop = _this.$item.offset().top;
    _this.areaBottom = _this.$item.offset().top + _this.$item.height();
};

ParallaxImage.prototype._scroll = function(){
    var _this = this;
    if( _this._isVisibleArea() ){

    }
};

ParallaxImage.prototype._isVisibleArea = function(){

};


ParallaxImage.prototype.onEvent = function(){
    var _this = this;

    //외부 공개 이벤트 visible,
    _this.$el.on('parallax.visible',function(event){
        if(GEAR.UTIL.getScreenMode() ==='MOBILE'){
            $('[data-parallax]').removeAttr('style');
            return;
        }

        var $this = $(this);
        var thisTop = _this.$item.offset().top,
            thisHeight = _this.$item.height(),
            windowHeight = $(window).height(),
            scrollOffset = $(document).scrollTop(),
            totalMoveValue = 0,
            thisMoveValue = 0;
        var max = parseInt(_this.$item.data('parallax'), 10);

        if(thisTop < windowHeight){
            totalMoveValue = thisTop + thisHeight;
            thisMoveValue = scrollOffset;
        } else {
            totalMoveValue = windowHeight + thisHeight;
            thisMoveValue = Math.abs(scrollOffset + windowHeight -  thisTop);
        }

        moveRatio =  thisMoveValue / totalMoveValue;

        if( !$this.hasClass('parallax-visible') ) {
            $this.addClass('parallax-visible');
        }

        TweenMax.to(_this.$item, 0.5, {y : (max * moveRatio)});
    });

    //외부 공개 이벤트 invisible,
    _this.$el.on('parallax.invisible',function(){
        var $this = $(this);
        if( $this.hasClass('parallax-visible') ) {
            $this.removeClass('parallax-visible');
        }
    });

    //외부 공개 이벤트 resize,
    _this.$el.on('parallax.resize',function(){
        _this._resize();
    });

};

/***********************************************
 * initialize
 ***********************************************/
(function( $, window, document, undefined ){
    "use strict";

    $(function(){

        var $sector = $('section.sector');
        var imageSector = ['#keyvisual','#mendini','#connectivity'];
        var sliderSector = ['#design','#movement-slider'];
        var videoSector = ['#movement', '#power'];


        //이미지패럴럭스 섹션 바인딩
        _.each( imageSector, function( el, index ){
            if( !$( el ).data('parallax') ){
                $( el ).data('parallax', new ParallaxImage( $(el) ) );
            }
        });

        //슬라이드 섹션 바인딩
        _.each( sliderSector, function( el, index ){
            if( !$( el ).data('parallax') ){
                $( el ).data('parallax', new Slider( $(el) ) );
            }
        });

        //비디오 섹션 바인딩
        _.each( videoSector, function( el, index ){
            if( !$( el ).data('parallax') ){
                $( el ).data('parallax', new VideoSection( $(el) ) );
            }
        });

        //공통 스크롤 이벤트
        (function(){
            var sectorViewTop = [],
                sectorViewBottom = [];
            var prevWinScrollTop = -1;



            function checkScrollPosition() {
                var viewPortTop = $(document).scrollTop() + $('#l-lnb').height(),
                    viewPortBottom = $(document).scrollTop() + $(window).height();

                function isInViewPort(idx){
                    return ( sectorViewTop[idx] <= viewPortBottom && sectorViewBottom[idx] > viewPortBottom )
                        || ( sectorViewBottom[idx] <= viewPortBottom && sectorViewBottom[idx] >= viewPortTop )
                        || ( sectorViewTop[idx] >= viewPortTop && sectorViewBottom[idx] <= viewPortBottom )
                }

                _.forEach( sectorViewBottom, function( _sectorBottom , idx ){
                    if(isInViewPort(idx)){
                        if(!firstLoading){
                            $sector.eq(idx).trigger('parallax.visible');
                        }
                    } else{
                        $sector.eq(idx).trigger('parallax.invisible');
                    }
                });

                prevWinScrollTop = viewPortBottom;
            }

            $(document).on('scroll.parallax',function () {
                checkScrollPosition();
            });

            //공통리사이즈 이벤트
            $(window).on('resize.parallax',function(){
                _.each( $sector, function( el, index ){
                    $(el).trigger('parallax.resize');
                    sectorViewTop[index] = $(el).offset().top;
                    sectorViewBottom[index] = $(el).offset().top + $(el).height();
                });
            });

            $(window).load(function(){
                $(window).trigger('resize.parallax');
                $(document).trigger('scroll.parallax');
            });

        })();

    });

})(jQuery, window, document );




/****
 *
 * GNB 피쳐페이지만 1024 이상일때 top위치를 키비주얼 하단으로 이동시킴
 *
 */
$(function(){
   var $lnb = $('#l-lnb'),
       $kv = $('#keyvisual');	   

    var timer = null;

    
    var setLnbPosition = function(){
        
        
        
        if( GEAR.UTIL.getWinWidth() > 1024 ) {
            if ( !$lnb.hasClass('sticky-ing') ){
				if(($kv.height() + $kv.offset().top) - $(window).height() >= $(document).scrollTop() ) {
					$lnb.css('top', 'auto');					
					$lnb.css('bottom', 0);					
					$lnb.css('position', 'fixed');
					$lnb.data('sticky', $kv.height() - $lnb.height());
				}else {	
					$lnb.css('top', $kv.height() - $lnb.height());						
					$lnb.css('bottom', 'auto');					
					$lnb.css('position', 'absolute');			
					$lnb.data('sticky', $kv.height() - $lnb.height());
				}					
			}	            
        } else {

            if ( $lnb.css('position') != 'fixed' ){
                
                $lnb.data('sticky', $lnb.offset().top );
                $lnb.css('top', 0);				                                       
            }
        }
    };
    $(window).on('resize.featureLnb',function(){
        
        setTimeout(function(){
            setLnbPosition();
        },10);
    });
    $(document).on('scroll.featureLnb',function(){
        
        clearTimeout( timer );		
        timer = setTimeout(function(){
            setLnbPosition();
        },10);
    });
    setLnbPosition();
});


$(function(){
    var $btnViewMore = $('a.mod-button.reviewItem-more-btn'),
        $compareLayer = $('div.ly-box.ly-spec-box'),
        $btnLayerClose = $compareLayer.find('button.btn-close, a.mod-button'),
        $dropDownBtn = $('a.btn-spec'),
        specLayer=  null;


    $btnViewMore.click(function(event){
        event.preventDefault();

        $compareLayer.addClass('show');
        specLayer = new IScroll('.ly-inner', {
            mouseWheel: true,
            scrollbars: true,
            click : true,
            tab : true
        });
    });

    $btnLayerClose.click(function(event){
        event.preventDefault();
        $compareLayer.find('a.mod-button').hide();
        $compareLayer.removeClass('show');
        $compareLayer.find('a.mod-button').show();
        if(specLayer !== null){
            specLayer.destroy();
            specLayer = null;
        }
    });
});

$(document).ready(function () {
    var kvArea = function() {
        var 
        kWidth = $('.kv-wrap').outerWidth(),
        kHeight = $('.kv-wrap').outerHeight();
        $('.kv-figures').css({ 'width' : kWidth, 'height' :  kHeight});
    }
    kvArea();
    $(window).resize(function () {
        kvArea();
    });    
});
