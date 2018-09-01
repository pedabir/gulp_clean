jQuery(document).ready(function($) {
    $('.accordion').click(function(e) {
      var sidebar = $('.mobile-search');
      var sidebarWidth = $('.mobile-search').height();
      $('.accordion').addClass('show');
      if (sidebar.css('height') != sidebarWidth) {
        sidebar.addClass('active');
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
          if (!firstClick && $(e.target).closest('.sidebar').length == 0) {
            sidebar.removeClass('active');
            $('.accordion').removeClass('show');
            $(document).unbind('click.myEvent');
          }
          firstClick = false;
        });
      }
      e.preventDefault();
    });
  });
