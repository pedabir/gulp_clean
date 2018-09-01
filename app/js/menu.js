jQuery(document).ready(function($) {
    $('.hamburger').click(function(e) {
      var sidebar = $('.menu');
      var sidebarWidth = $('.menu').width();
      $('.wrapper').addClass('open');
      if (sidebar.css('left') != sidebarWidth) {
        sidebar.addClass('open');
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
          if (!firstClick && $(e.target).closest('.sidebar').length == 0) {
            sidebar.removeClass('open');
            $('.wrapper').removeClass('open');
            $(document).unbind('click.myEvent');
          }
          firstClick = false;
        });
      }
      e.preventDefault();
    });
  });
