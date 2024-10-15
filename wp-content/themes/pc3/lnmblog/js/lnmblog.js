$(function(){
  if($(".archive-post").length > 0){
    if(!$('.archive-post').hasClass('default') && $(window).width() > '767'){
      $(".archive-post").css({
        "width" : "calc("+Math.round(columns)+"% - "+gutter+"px)",
        "margin-bottom": gutter+"px"
      });
      $('.posts-wrapper').imagesLoaded(function(){
        $('.posts-wrapper').masonry({
          columnWidth: '.archive-post',
          itemSelector: '.archive-post',
          horizontalOrder: true,
          percentPosition: true,
          gutter: gutter,
        });
      }); 
    }
  }
  if($(".sidebar.mobile").length > 0){
    $(".sidebar-icon").click(function(){
      $(".sidebar.mobile").toggleClass("open"); 
    });
  }
});