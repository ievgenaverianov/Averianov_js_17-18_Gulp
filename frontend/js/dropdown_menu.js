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