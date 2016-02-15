/*
      TODO
      - PC일땐 3개씩 모바일일땐 1개씩 이동
      .partners-item  3개마다 .partners-item-group로 감싸져 있습니다.
        [모바일] 페이징 클릭 & 스와이프지원

    _this.$el.handler 로 100%씩 이동


      재생버튼 클릭 시,
        -> 재생버튼에 is-active 클래스 추가
        -> .box-img-add 를 차례대로 보여주고 ( left 값 0으로 순차적으로 이동 ) [ .box-img-add 갯수는 유동적 ]
        -> 마지막끝나면 일정시간뒤에 .box-img-add 모두 left 값 100%
        -> 재생버튼에서 is-active 클래스 제거
     */

$(function(){
    var $partnersSection = $('#partners'),
        $prevButton = $partnersSection.find('a.slider-arrow-prev'),
        $nextButton = $partnersSection.find('a.slider-arrow-next'),
        $partnerItemGroup = $partnersSection.find('div.partners-item-group'),
        $partnerItemContainer = $partnersSection.find('.partners-list'),
        $partnerItems = $partnersSection.find('div.partners-item'),
        $sliderPager = $partnersSection.find('div.slider-pager'),
        currentPage = 0,
        totalPages = $partnerItemGroup.length,
        currentTotalPages = totalPages,
        partnersCount = $partnerItems.length,
        isMobile = false,
        //defaultItemCount = 3,
        playMotions = {};

    //플레이 버튼 이벤트를 겁니다.
    $partnerItems.each(function(index, el){
        var $el = $(el),
            $playBtn = $el.find('a.info-brand-play'),
            $slideItems = $el.find('div.box img');

        if($slideItems.length === 1){
            $el.addClass('partners-item--alone');
            $playBtn.attr('href', 'javascript:;');
        } else {
            $playBtn.click(function(event){
                event.preventDefault();

                if(!$(this).hasClass('is-active')){
                    $(this).addClass('is-active played');

                    playItemMotion($playBtn, $slideItems);
                }
            });
        }
    });

    function playItemMotion($playBtn, $slideItems){
        var delay = ($playBtn.hasClass('played') ? 1 : 0);

        $slideItems.filter(':gt(0)').css('left', '100%');

        var tl = new TimelineLite({pause: true, delay : delay, onComplete : function(){
                $playBtn.removeClass('is-active');
            }
        });

        for(var i = 1, len = $slideItems.length; i < len ; i++ ){
             tl.add( TweenLite.to($slideItems.eq(i), 1, {'left': 0}) );
        }

        tl.play();
    }

    //PC UI 페이지 번호를 모바일 UI 인덱스 번호로 변환합니다.
    function convertPageToIndex(){
        $sliderPager.find('a').eq(currentPage).addClass('is-active').siblings().removeClass('is-active');
    }

    //모바일 UI 인덱스 번호를 PC UI 페이지 번호로 변환합니다.
    function convertIndexToPage(){
        //currentPage = (parseInt(currentSelectedIndex / defaultItemCount, 10) + 1 : parseInt(currentSelectedIndex / defaultItemCount, 10));
        checkNaviStatus();
    }

    //이전 다음 버튼 상태 체크
    function checkNaviStatus(){
        if(currentTotalPages === 0){
            dispNavi(false, false);
        } else {
            if(currentPage === 0){
                dispNavi(false, true);
            } else if(currentPage === currentTotalPages - 1){
                dispNavi(true, false);
            } else {
                dispNavi(true, true);
            }
        }
    }

    //이전 다음 버튼 노출 설정
    function dispNavi(prev, next){
        (prev) ? ($prevButton.show()) : ($prevButton.hide());
        (next) ? ($nextButton.show()) : ($nextButton.hide());
    }

    //이전 버튼 클릭 이벤트 바인딩
    $prevButton.click(function(event){
        event.preventDefault();
        if(currentPage !== 0){
            currentPage -= 1;
            slidePartnerItemGroup(currentPage);
            checkNaviStatus();
            convertPageToIndex();
        }
    });

    //다음 버튼 클릭 이벤트 바인딩
    $nextButton.click(function(event){
        event.preventDefault();
        if(currentPage < currentTotalPages - 1){
            currentPage += 1;
            slidePartnerItemGroup(currentPage);
            checkNaviStatus();
            convertPageToIndex();
        }
    });

    //파트너 리스트 슬라이딩 애니메이션
    function slidePartnerItemGroup(slideIdx){
        TweenMax.to($partnerItemGroup.eq(0), 0.5, {'margin-left' : -(slideIdx * 100) + '%', 'ease' : Quad.easeInOut });
    }


    //모바일 UI 용 페이지 쩜 만들기
    function makeMobilePagingItems(){
        var strPagerDots = [];
        for(var i=0; i < partnersCount; i++){
            strPagerDots.push('<a class="slider-pager-dot '+(i===currentPage ? ' is-active' : '') + '" role="button" href="#"><span class="sr-only">'+ (i+1) +'. '+ $partnerItems.eq(i).find('.info-brand strong').text() + '</span></a>');
        }

        $sliderPager.html(strPagerDots.join(''));
    }

    //모바일  UI 페이지 쩜 클릭 이벤트 바인딩
    $sliderPager.on('click', 'a', function(event){
        var $this = $(this);
        event.preventDefault();

        if(!$this.hasClass('is-active')){
            $(this).addClass('is-active').siblings().removeClass('is-active');
            currentPage = $(this).index();
            convertIndexToPage();
            slidePartnerItemGroup(currentPage);
        }
    });


    $partnerItemContainer.swipe({
         swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
             if (GEAR.UTIL.getScreenMode() === 'PC') {
                 return;
             }

             if (direction == 'left') {
                if(currentPage < partnersCount-1){
                    currentPage += 1;

                    $sliderPager.find('a').eq(currentPage).addClass('is-active').siblings().removeClass('is-active');

                    convertIndexToPage();
                    slidePartnerItemGroup(currentPage);
                }
             }

             if (direction == 'right') {
                if(currentPage !== 0){
                    currentPage -= 1;

                    $sliderPager.find('a').eq(currentPage).addClass('is-active').siblings().removeClass('is-active');

                    convertIndexToPage();
                    slidePartnerItemGroup(currentPage);
                }
             }
         },
         threshold: 100,
         allowPageScroll: 'vertical',
         excludedElements : []
    });

    checkNaviStatus();
    makeMobilePagingItems();
    function resize () {
        if(GEAR.UTIL.getScreenMode() === 'PC'){
            if (isMobile) {
                currentTotalPages = totalPages;
                currentPage = parseInt(currentPage/3);
                isMobile = false;
                checkNaviStatus();
                makeMobilePagingItems();
            }
            if( parseInt($partnerItemGroup.eq(0).css('margin-left'), 10) !== -(currentPage * 100) ){
                $partnerItemGroup.eq(0).css('margin-left', -(currentPage * 100) + '%');
            }
        } else {
            if (!isMobile) {
                currentTotalPages = totalPages*3;
                currentPage = parseInt(currentPage*3);
                isMobile = true;
                checkNaviStatus();
                makeMobilePagingItems();
            }
            if( parseInt($partnerItemGroup.eq(0).css('margin-left'), 10) !== -(currentPage * 100) ){
                $partnerItemGroup.eq(0).css('margin-left', -(currentPage * 100) + '%');
            }
        }

    }

    $(window).on("resize", resize);
    resize();
});