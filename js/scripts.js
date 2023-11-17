(function($){
	jQuery(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		jQuery('.show-modal').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'tUmeqF_qZDc'
          	});
      	});

		jQuery('.show-modal2').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'vnhTrLEFqhE'
          	});
      	});

		jQuery('.show-modal3').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'pxam1_ZI5eA'
          	});
      	});

		jQuery('.show-modal4').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: '-xPHPzgyhTQ'
          	});
      	});

		jQuery('.show-modal5').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'b3Du-z7yIUc'
          	});
      	});

		jQuery('.show-modal6').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'hP_MRDbO5Bw'
          	});
      	});

		jQuery('.show-modal7').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'pxam1_ZI5eA'
          	});
      	});

		jQuery('.show-modal8').on('click', function () {
          	jQuery.showYtVideo({
              	videoId: 'ITkx_oLxYaU'
          	});
      	});

      	jQuery(".box").hover(
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(1) a").addClass("active")
      		},
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(1) a").removeClass("active")
      		},
      	);

      	jQuery(".box2").hover(
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(2) a").addClass("active")
      		},
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(2) a").removeClass("active")
      		},
      	);

      	jQuery(".box3").hover(
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(3) a").addClass("active")
      		},
      		function() {
      			jQuery(".warning-item-inner ul li:nth-of-type(3) a").removeClass("active")
      		},
      	);


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);