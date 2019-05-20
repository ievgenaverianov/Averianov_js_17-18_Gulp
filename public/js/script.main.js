(function($) {
  $(function() {
    $('.jcarousel').jcarousel({
        wrap: 'both'
    });

    $('.jcarousel-control-prev')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination();
  });
})(jQuery);



$(function(){

        $(".customCheckbox").mousedown(
            /* при клике на чекбоксе меняем его вид и значение */
            function() {

                changeCheck($(this));

            });

        $(".customCheckbox").each(
            /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
            function() {

                changeCheckStart($(this));

            });

    });

function changeCheck(el)
/*
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
    var el = el,
        input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    }
    return true;
}

function changeCheckStart(el)
/*
	если установлен атрибут checked, меняем вид чекбокса
*/
{
    var el = el,
        input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");
    }
    return true;
}
$(function(){
  var params = {
    changedEl: "select",
    visRows: 5,
    scrollArrows: true
  }
  cuSel(params);
})
$(function () {
    var $firstRangeDropdownItem = $('.dropdown_1');
    var $firstRangeDropdownLink = $('.dropdown_1  > a');

    $firstRangeDropdownLink.click(function (e) {
        var $submenu = $( $firstRangeDropdownItem ).find( ".submenu_1" );
        e.preventDefault();
        $submenu.slideToggle(500);
    })

    $firstRangeDropdownItem.mouseleave(function () {
        var $submenu = $( '.dropdown_1' ).find( ".submenu_1" );
        $submenu.slideUp(200);
    })

    var $secondRangeDropdownItem = $('.dropdown_2');
    $secondRangeDropdownItem.mouseover (function () {
        var $submenu = $(this).find( ".submenu_2" );
        $submenu.css('opacity', '1');
    })
    $secondRangeDropdownItem.mouseleave(function () {
        var $submenu = $(this).find( ".submenu_2" );
        $submenu.css('opacity', '0');
    })

})