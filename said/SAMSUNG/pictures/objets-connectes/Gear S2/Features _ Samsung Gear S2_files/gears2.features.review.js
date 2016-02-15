$(function () {
    var protocol = $(location).attr("protocol"),
        ApiVersion = '5.4',
        PassKey = 'i327klh1hhp7bt4aasd407v0g',
        ProductID = 'SM-R7200ZWAXEF',

        reviewLimitCount = 2,
        itemoffset = 0,
        currentSort = '';

    var strReviewItemTmpl = [],
        strReviewItemWrapper = '<div class="row"></div>';

    strReviewItemTmpl.push('<div class="item">');
    strReviewItemTmpl.push('<div class="item-head">');
    strReviewItemTmpl.push('    <p class="item-head-info"><span class="item-head-writer">__WRITER__</span><span class="item-head-date">__REGIDATE__</span></p>');
    strReviewItemTmpl.push('    <span class="review-star"><span class="review-star-bg"><span class="review-star-active" style="width:__STARRATE__%;"></span></span></span>');
    strReviewItemTmpl.push('</div>');
    strReviewItemTmpl.push('<ul class="review-point">');
    strReviewItemTmpl.push('    <li data-item="Features">');
    strReviewItemTmpl.push('        <em class="review-point-label">Features</em>');
    strReviewItemTmpl.push('        <span class="review-point-score"><strong class="review-point-score--num">5.0</strong><span class="review-point-score--max">/5.0</span></span>');
    strReviewItemTmpl.push('     </li>');
    strReviewItemTmpl.push('     <li data-item="Performance">');
    strReviewItemTmpl.push('         <em class="review-point-label">Performance</em>');
    strReviewItemTmpl.push('         <span class="review-point-score"><strong class="review-point-score--num">5.0</strong><span class="review-point-score--max">/5.0</span></span>');
    strReviewItemTmpl.push('      </li>');
    strReviewItemTmpl.push('    <li data-item="Design">');
    strReviewItemTmpl.push('        <em class="review-point-label">Design</em>');
    strReviewItemTmpl.push('        <span class="review-point-score"><strong class="review-point-score--num">4.0</strong><span class="review-point-score--max">/5.0</span></span>');
    strReviewItemTmpl.push('    </li>');
    strReviewItemTmpl.push('    <li data-item="Value">');
    strReviewItemTmpl.push('        <em class="review-point-label">Value</em>');
    strReviewItemTmpl.push('        <span class="review-point-score"><strong class="review-point-score--num">5.0</strong><span class="review-point-score--max">/5.0</span></span>');
    strReviewItemTmpl.push('    </li>');
    strReviewItemTmpl.push('</ul>');
    strReviewItemTmpl.push('<div class="item-body">');
    strReviewItemTmpl.push('    <strong class="item-body-tit">__REVIEWTITLE__</strong>');
    strReviewItemTmpl.push('    <p class="item-body-cont">');
    strReviewItemTmpl.push('        __REVIEWCONTENT__');
    strReviewItemTmpl.push('    </p>');
    strReviewItemTmpl.push('    <div class="item-body-btns">');
    strReviewItemTmpl.push('        <button class="item-body-btn item-body-btn--more" data-show="show more" data-close="show less">show more</button>');
    strReviewItemTmpl.push('    </div>');
    strReviewItemTmpl.push('</div>');
    strReviewItemTmpl.push('</div>');

    strReviewItemTmpl = strReviewItemTmpl.join('');

    //리뷰항목 래퍼 템플릿을 반환합니다.
    function getReviewRowTmpl() {
        return $(strReviewItemWrapper);
    }

    //리뷰항목 템플릿을 반환합니다.
    function getReviewItemTmpl() {
        return $(strReviewItemTmpl);
    }

  
    var $reviewSection = $('section.review'),
        $reviewHeader = $reviewSection.find('div.review-head'),
        $reviewOverRollWrap = $reviewSection.find('div.review-overall-wrap'),
        $reviewListArea = $reviewSection.find('section.reviewList'),
        $reviewSortMenu = $reviewListArea.find('#reviewList-sort-items li'),
        $reviewItemContainer = $reviewListArea.find('div.reviewItems'),
        $reviewItemMore = $reviewListArea.find('div.reviewItem-more'),
        $reviewListHeader = $reviewListArea.find('div.reviewList-head');

    //초기 정렬 항목 값을 결정합니다.
    if ($reviewSortMenu.filter('.active').length) {
        currentSort = $reviewSortMenu.filter('.active').data('sort');
    } else {
        currentSort = $reviewSortMenu.eq(0).data('sort');
    }
    
    //전체 리뷰 상황을 요청합니다.
    function getTotalReviewsState(){       
        $.ajax({
            type: 'get',
            cache: false,
            url: protocol
                + '//api.bazaarvoice.com/data/reviews.json?ApiVersion=' + ApiVersion
                + '&PassKey=' + PassKey
                + '&Filter=ProductId:' + ProductID
                + '&Sort=Rating:desc&Include=Products&Stats=Reviews',
            dataType: 'jsonp',
            jsonp: 'callback',
            contentType: 'application/json',
            success: function (data) {               
                if (data.TotalResults > 0) {                    
                    makeReviewOverrollArea(data);                    
                    bindSortMenuEvent();

                    if (data.TotalResults > reviewLimitCount) {
                        $reviewItemMore.show();
                        bindReviewMoreBtnEvent();
                    }
                }
            },
            error: function (xmlData) {
                
            },
            complete: function (data) {

            }
        });
    }


    //리뷰 전체 상황을 화면에 출력합니다. 
    function makeReviewOverrollArea( data ) {
        var overviewStatics = data.Includes.Products[ProductID].ReviewStatistics,
            $overrollText = $reviewOverRollWrap.find('p.review-overall-txt'),
            $overRollStar = $reviewOverRollWrap.find('span.review-star-active'),
            $overRollPoints = $reviewOverRollWrap.find('li');

        $reviewSection.show();
        $reviewHeader.find('span.review-totalCount').text('(' + data.TotalResults + ')');

        $overRollStar.css('width', (overviewStatics.RecommendedCount / overviewStatics.TotalReviewCount * 100).toFixed(0) + '%');
        $overrollText.text($overrollText.text().replace('__RECOCNT__', overviewStatics.RecommendedCount));
        $overrollText.text($overrollText.text().replace('__TOTALCNT__', overviewStatics.TotalReviewCount));
        $overrollText.text($overrollText.text().replace('__STARRATE__', (overviewStatics.RecommendedCount / overviewStatics.TotalReviewCount * 100).toFixed(0)));

        $overRollPoints.each(function (idx, ele) {
            var $ele = $(ele),
                eleDataItem = $ele.data('item');

            $ele.find('strong.review-point-score--num').text(overviewStatics.SecondaryRatingsAverages[eleDataItem].AverageRating.toFixed(1));
        });
    }

    //정렬 항목 이벤트를 바인딩합니다.
    function bindSortMenuEvent() {
        $reviewSortMenu.each(function (idx, ele) {
            var $ele = $(ele),
                sortData = $ele.data('sort');

            $ele.click(function (event) {
                getReviewItems(sortData);
            });
                
        });

        //$reviewSortMenu.filter('[data-sort="' + currentSort + '"]').click();
    }

    //더보기 버튼에 관한 이벤트를 바인딩합니다.
    function bindReviewMoreBtnEvent() {

        $reviewItemMore.click(function (event) {
            event.preventDefault();
            $reviewListHeader.show();
            getReviewItems(currentSort);
        });
    }

    //리뷰 항목 자료를 요청합니다.
    function getReviewItems(sortData) {
        if (sortData != currentSort) {
            itemoffset = 0;
            currentSort = sortData;
        }

        $.ajax({
            type: 'get',
            cache: false,
            url: protocol
                + '//api.bazaarvoice.com/data/reviews.json?ApiVersion=' + ApiVersion
                + '&PassKey=' + PassKey
                + '&Filter=ProductId:' + ProductID
                + '&Sort=' + sortData
                + '&Offset=' + itemoffset
                + '&Limit=' + reviewLimitCount,
            dataType: 'jsonp',
            jsonp: 'callback',
            contentType: 'application/json',
            success: function (data) {
                if (data.Results.length) {
                    if (itemoffset == 0) {
                        $reviewItemContainer.html('');
                    }

                    itemoffset += (data.Results.length - 1);

                    if (itemoffset >= data.TotalResults) {
                        $reviewItemMore.hide();
                    }

                    makeReviewItems(data.Results);
                }
            },
            error: function (xmlData) {

            },
            complete: function (data) {

            }
        });

    }

    //리뷰항목을 맹급니다.
    function makeReviewItems(reviewDatas) {
        var itemLength = reviewDatas.length,
            $reviewItem, $reviewRow,
            totalPoint = 0, getPoint = 0;

        for (var i = 0; i < itemLength ; i++) {

            if (i % 2 == 0) {
                $reviewRow = getReviewRowTmpl();
            }

            $reviewItem = getReviewItemTmpl();
                       
            $reviewItem.find('span.item-head-writer').text(reviewDatas[i].UserNickname);
            $reviewItem.find('span.item-head-date').text(reviewDatas[i].SubmissionTime.substr(0, 10));
            $reviewItem.find('strong.item-body-tit').text(reviewDatas[i].Title);
            $reviewItem.find('p.item-body-cont').text(reviewDatas[i].ReviewText);

            $reviewItem.find('li').each(function (idx, ele) {
                var $ele = $(ele),
                    eledata = $ele.data('item');

                $ele.find('strong.review-point-score--num').text(reviewDatas[i].SecondaryRatings[eledata].Value.toFixed(1));
                totalPoint += reviewDatas[i].SecondaryRatings[eledata].ValueRange;
                getPoint += reviewDatas[i].SecondaryRatings[eledata].Value
            });

            $reviewItem.find('span.review-star-active').css('width', ((getPoint / totalPoint) * 100).toFixed(0) + '%');

            totalPoint = 0;
            getPoint = 0;

            $reviewRow.append($reviewItem);

            if (i % 2 == 1) {
                $reviewItemContainer.append($reviewRow);                
            } 
        }

        $('.review').find('.item-body-cont').sEllipsis();
    }

    if( PassKey != '' &&  ProductID != ''){
        getTotalReviewsState();
    }    

});