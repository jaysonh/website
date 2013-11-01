jQuery(document).ready(function($){

    $('.clearme').clearme();
	
    var speed = 750;
	$('#nav li a').click(function(e){
		
		var li = $(this).parent();
		var sub = li.children('.sub-menu');
		
		if(sub.length>0){
			if(li.siblings().find('.sub-menu').length>0){
				li.siblings().find('.sub-menu').slideUp(speed, function(){
					if(sub.is(':visible')){
						sub.slideUp(speed);
					} else {
						sub.slideDown(speed);
					}
				});
			} else {
				if(sub.is(':visible')){
						sub.slideUp(speed);
					} else {
						sub.slideDown(speed);
					}
			}
			e.preventDefault();
		} 
		
	});

	
	$("a.fancybox").fancybox({
		overlayOpacity:0.9,
		overlayColor:'#fff',
		titlePosition:'inside',
		titleFormat       : function(title, currentArray, currentIndex, currentOpts) {
			var desc = '';
			if($(currentArray[currentIndex]).data('desc') != undefined){
				desc = '<div class="slide-description">'+$(currentArray[currentIndex]).data('desc')+'</div>';
			}
			return '<div class="slide-title">'+title+'</div>'+ desc;
		}
	});
	
	
	/*** lazyload images ***/
	$("img.lazy").lazyload();
	
	$("img.lazy").lazyload({ threshold : 600 });
	$(".home-images .col").eq(1).find('img.lazy:lt(3)').trigger('appear');
	$(".home-images .col").eq(2).find('img.lazy:lt(3)').trigger('appear');
});