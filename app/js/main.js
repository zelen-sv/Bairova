;(function(){

  "use strict";

  $(function(){
    $('#site').html(tmpl.template({ start: 'Start' }));
  });

  $('.mobmenu__toggle').on('click', function(){
    $('body').toggleClass('open');
  });

})();