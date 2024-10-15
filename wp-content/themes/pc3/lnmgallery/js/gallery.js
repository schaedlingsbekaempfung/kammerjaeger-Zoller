function init(t){$(window).resize((function(){setcss(t)})),setTimeout((function(){$(".meta-btn").trigger("click")}),1500),$(".lnm-btn").on("click",(function(t){switch(!0){case $(this).hasClass("exit-btn"):$(".gallery-modal").length>0&&$(".gallery-modal").fadeOut().remove(),$("body").toggleClass("no-bars");break;case $(this).hasClass("meta-btn"):$(this).toggleClass("open"),$(".gallery-modal").length>0?$(".gallery-modal").toggleClass("show-meta"):$(this).closest(".gallery-wrapper").toggleClass("show-meta");break;default:updatethumbnails(t)}})),$(".thumbnails-wrapper").length>0&&$(".thumbnail").on("click",updatethumbnails),$(".thumbs-control").on("click",(function(t){var e=-parseInt($(".thumbnails-slider").css("top")),a=parseInt($(".thumbnails-slider").css("left")),i=$(".thumbnails-wrapper").outerHeight(!0)-$(".thumbnail").outerHeight(!0),s=$(".thumbnails-wrapper").outerWidth(!0)-$(".thumbnail").outerWidth(!0);switch(t.currentTarget.classList[1]){case"slide-up":animateThumbnailSlider("up",-(e-i));break;case"slide-down":animateThumbnailSlider("down",-(e+i));break;case"slide-left":animateThumbnailSlider("left",a+s);break;case"slide-right":animateThumbnailSlider("right",a-s)}})),"mobile"==t.attr("data-type")?(t.on("swipeleft",(function(t,e){$(".next-btn").trigger("click")})),t.on("swiperight",(function(t,e){$(".prev-btn").trigger("click")})),$(".mobile-meta-btn").on("tap",(function(){t.toggleClass("show-meta")})),$(".thumbs-btn").on("click",(function(){t.toggleClass("show-thumbs")}))):$(document).off("keydown").on("keydown",(function(e){switch(t.attr("data-type")){case"vertical":40==e.keyCode||39==e.keyCode?($(".next-btn").trigger("click").addClass("active"),setTimeout((function(){$(".next-btn").removeClass("active")}),80)):38!=e.keyCode&&37!=e.keyCode||($(".prev-btn").trigger("click").addClass("active"),setTimeout((function(){$(".prev-btn").removeClass("active")}),80));break;case"horizontal":37==e.keyCode?($(".prev-btn").trigger("click").addClass("active"),setTimeout((function(){$(".prev-btn").removeClass("active")}),80)):39==e.keyCode&&($(".next-btn").trigger("click").addClass("active"),setTimeout((function(){$(".next-btn").removeClass("active")}),80));break;case"grid":switch(e.keyCode){case 37:$(".prev-btn").trigger("click").addClass("active"),setTimeout((function(){$(".prev-btn").removeClass("active")}),80);break;case 38:$(".thumbnails-wrapper").length>0&&$(".thumbnail.active").index()>parseInt(t.attr("data-grid-columns"))-1&&$(".thumbnail:eq("+($(".thumbnail.active").index()-parseInt(t.attr("data-grid-columns")))+")").trigger("click");break;case 39:$(".next-btn").trigger("click").addClass("active"),setTimeout((function(){$(".next-btn").removeClass("active")}),80);break;case 40:$(".thumbnails-wrapper").length>0&&$(".thumbnail:eq("+($(".thumbnail.active").index()+parseInt(t.attr("data-grid-columns")))+")").trigger("click")}}27==e.keyCode&&$(".exit-btn").trigger("click")}))}function updatethumbnails(t){switch(t.currentTarget.className){case"lnm-btn prev-btn":$(".thumbnail.active").index()!=$(".thumbnail").first().index()&&($(".thumbnail.active").removeClass("active").prev().addClass("active"),updateimage($(".thumbnail.active")));break;case"lnm-btn next-btn":$(".thumbnail.active").index()!=$(".thumbnail").last().index()&&($(".thumbnail.active").removeClass("active").next().addClass("active"),updateimage($(".thumbnail.active")));break;case"thumbnail":$(".thumbnail").removeClass("active"),$(t.currentTarget).addClass("active"),$("[data-type='mobile']").hasClass("show-thumbs")&&$("[data-type='mobile']").toggleClass("show-thumbs"),updateimage($(this))}}function filter_gallery(t){if("all"===t)$(".gallery-image").show();else $(".gallery-image").hide(),$(".gallery-image[data-group='"+t+"']").show();$(".columns-width").length>0&&$(".gallery-images").masonry()}function setcss(t){switch(t.attr("data-type")){case"horizontal":$(".thumbnails-wrapper").css({height:parseInt($(".thumbnail").outerHeight(!0)),width:t.outerWidth(!0)}),$(".thumbnails-slider").css({width:parseInt($(".thumbnail").outerWidth(!0)*$(".thumbnail").length)}),$(".thumbnails-slider").outerWidth(!0)<t.outerWidth(!0)?($(".thumbnails-slider").addClass("horizontal-center"),$(".thumbs-control").remove()):$(".thumbnails-slider").css("left","40px"),$(".modal-section").css({height:parseInt($(".modal-section").parent().height()-$(".thumbnails-wrapper").height()),width:parseInt($(".modal-section").parent().width())}),$(".main-image img").css("max-height",parseInt($(".modal-section").parent().height()-$(".thumbnails-wrapper").height()));break;case"vertical":$(".thumbnails-wrapper").css({width:parseInt($(".thumbnail").outerWidth(!0)),height:t.height()}),$(".thumbnails-slider").css({height:parseInt($(".thumbnail").outerHeight(!0))*$(".thumbnail").length}).fadeIn(),$(".thumbnails-wrapper").height()<t.height()&&$(".thumbnails-wrapper").addClass("vertical-center"),$(".modal-section").css({width:parseInt($(".modal-section").parent().width()-$(".thumbnails-wrapper").width()),height:parseInt($(".modal-section").parent().height())}),$(".main-image img").css("max-height",parseInt($(".modal-section").parent().height()));break;case"grid":$(".thumbnail").outerWidth(100/$("[data-type='grid']").attr("data-grid-columns")+"%"),$(".thumbnails-wrapper").css({width:parseInt($(".thumbnail img").outerWidth())*t.attr("data-grid-columns")}),$(".thumbnails-slider").css({height:parseInt($(".thumbnail").outerHeight(!0))*Math.round($(".thumbnail").length/t.attr("data-grid-columns"))}),$(".modal-section").css({width:parseInt($(".modal-section").parent().width()-$(".thumbnails-wrapper").width())+"px",height:$(".modal-section").parent().height()});break;case"mobile":$(".thumbnails-wrapper").height(t.height(!0))}$(".modal-section,.thumbnails-wrapper").css("opacity","1")}function loadmodal(t){var e;switch(!0){case t.hasClass("lnm-post"):theid=t.attr("data-id");break;case t.hasClass("gallery-image"):theid=t.attr("data-id"),e=$(".gallery-filter").length>0?$(".gallery-filter li.active,.gallery-filter option:selected").attr("data-postid"):t.closest(".gallery-wrapper").attr("data-postid");break;case t.hasClass("gallery-button"):theid=t.attr("data-postid");break;default:theid=t.closest(".gallery-wrapper").attr("data-postid")}$spinner='<div class="spinnerwrapper"><div class="loadspinner"><i class="fa fa-spinner fa-pulse custom-pulse"></i></div></div>',$.ajax({url:directory_uri+"/lnmgallery/ajax_requests/create_modal.php",data:{post_id:theid,parent_id:e},beforeSend:function(){$("body").append($spinner)},success:function(t){$("body").addClass("no-bars"),$("body").append(t),$(".spinnerwrapper").fadeOut().remove()},error:function(t,e,a){alert(e+"\n"+a)},complete:function(){t.hasClass("gallery-button")||($(".thumbnail").removeClass("active"),$(".thumbnail[data-id="+t.attr("data-id")+"]").addClass("active")),$(".thumbnail").last().children("img").load((function(){setcss($(".gallery-modal"))})),updateimage(t),init($(".gallery-modal"))}})}function updateimage(t){(t.hasClass("gallery-button")||t.hasClass("lnm-post"))&&(t=$(".thumbnail").first()),$loadspinner='<div class="loadspinner"><i class="fa fa-spinner fa-pulse custom-pulse"></i></div>',$.ajax({url:directory_uri+"/lnmgallery/ajax_requests/get_gallery_images.php",data:{image_id:t.attr("data-id")},dataType:"json",beforeSend:function(){$(".main-image img").fadeOut(),$(".main-image").append($loadspinner)},success:function(t){$(".loadspinner").fadeOut().remove(),$(".main-image img").attr({src:t[0],alt:t[1]}).load((function(){$(this).fadeIn()}))},error:function(t,e,a){alert(e+"\n"+a)},complete:function(){actionType($(".thumbnail.active")),get_image_metadata()}})}function get_image_metadata(){$(".meta-btn").html();$.ajax({url:directory_uri+"/lnmgallery/ajax_requests/get_image_metadata.php",data:{image_id:$(".thumbnail.active").attr("data-id")},beforeSend:function(){$(".meta-btn").length>0?$(".meta-btn").siblings().remove():$(".metabox").fadeOut().empty()},success:function(t){$(".metabox").append(t).fadeIn()},error:function(t,e,a){alert(e+"\n"+a)},complete:function(){$("[data-metabox='overlay']").length<0&&$("[data-metabox]").length>0&&$(".metabox-description .md-content").css({height:parseInt($(".metabox").height()-$(".metabox-description .md-content").position().top),"padding-right":"5px"})}})}function actionType(t){var e=t.closest("[data-type]"),a=t.position().top,i=t.position().left,s=t.outerHeight(!0),l=t.outerWidth(!0),n=e.outerHeight(!0),r=e.outerWidth(!0),o=$(".thumbnails-slider").outerHeight(!0),c=$(".thumbnails-slider").outerWidth(!0),h=$(".thumbs-control").outerHeight(!0),d=$(".thumbs-control").outerWidth(!0),m=o-n+h,u=c-r,g=-parseInt($(".thumbnails-slider").css("top")),p=-parseInt($(".thumbnails-slider").css("left"));switch(e.attr("data-type")){case"horizontal":if(u>0)switch(!0){case i+l+d-p>r:animateThumbnailSlider("right",p-i-p+$(".thumbs-control").outerWidth(!0));break;case i<p+d:animateThumbnailSlider("left",-(i-(r-l-d)))}break;case"grid":case"vertical":if(m>0)switch(!0){case a+s-g>n:animateThumbnailSlider("down",g-a-g);break;case a<g:animateThumbnailSlider("up",-(g-(n-s-h-(a-g))))}break;case"mobile":$(".thumbnails-wrapper").height()>e.height()&&$(".thumbnails-wrapper").css("top",-thumbnail.position().top)}}function animateThumbnailSlider(t,e){switch(t){case"up":e<0?$(".thumbnails-slider").css("top",e):$(".thumbnails-slider").css("top","0");break;case"down":-e<(a=$(".thumbnails-slider").outerHeight(!0)-$(".thumbnails-wrapper").outerHeight(!0)+$(".thumbs-control").outerHeight(!0))?$(".thumbnails-slider").css("top",e):$(".thumbnails-slider").css("top",-a);break;case"left":e<"40"?$(".thumbnails-slider").css("left",e):$(".thumbnails-slider").css("left","40px");break;case"right":var a;-e<(a=$(".thumbnails-slider").outerWidth(!0)-$(".thumbnails-wrapper").outerWidth(!0)+$(".thumbs-control").outerWidth(!0))?$(".thumbnails-slider").css("left",e):$(".thumbnails-slider").css("left",-a)}}$((function(){switch($(".filtering").length>0&&($(".gallery-filter ul").length>0&&$(".gallery-filter li").on("click",(function(){$(".gallery-filter li").removeClass("active"),$(this).addClass("active"),filter_gallery($(this).attr("id"))})),$(".gallery-filter select").length>0&&$(".gallery-filter select").on("change",(function(){filter_gallery($(this).children("option:selected").attr("id"))}))),!0){case $(".lnm-posts-list").length>0:$(".lnm-post").on("click",(function(){loadmodal($(this))}));break;case $(".gallery-button").length>0:$(".gallery-button").on("click",(function(){loadmodal($(this))}));break;case $(".gallery-wrapper.no-modal").length>0:$(window).on("load",(function(){$(".thumbnail img").each((function(t,e){console.log("element"),t==$(".thumbnail").last().index()&&this.complete&&setcss($(".gallery-wrapper.no-modal"))}))})),init($(".gallery-wrapper.no-modal")),get_image_metadata($(".thumbnail.active"));break;default:$(".gallery-image").on("click",(function(){loadmodal($(this))}))}}));