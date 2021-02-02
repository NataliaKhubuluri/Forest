jQuery.bt.options.contentSelector = "$(this).data('bt')";
jQuery.bt.options.fill = '#fff';
jQuery.bt.options.width = 500;
jQuery.bt.options.cornerRadius = 10;
jQuery.bt.options.strokeWidth = 3;
jQuery.bt.options.strokeStyle = '#090';
jQuery.bt.options.shadow = true;
jQuery.bt.options.shadowOffsetX = 3;
jQuery.bt.options.shadowOffsetY = 3;
jQuery.bt.options.shadowBlur = 8;
jQuery.bt.options.shadowColor = 'rgba(0,0,0,.9)';
jQuery.bt.options.positions = ['bottom'];
jQuery.bt.options.showTip = function(box){
	var $content = $('.bt-content', box).hide();
	var $canvas = $('canvas', box).hide();
	var origWidth = $canvas[0].width;
	var origHeight = $canvas[0].height;
	$(box).show();
	$canvas
		.css({width: origWidth * .5, height: origHeight * .5, left: origWidth * .25, top: origHeight * .25, opacity: .1})
		.show()
		.animate({width: origWidth, height: origHeight, left: 0, top: 0, opacity: 1}, 400, 'easeOutBounce',
			function(){$content.show()}
		);
};
jQuery.bt.options.hideTip = function(box, callback){
	var $content = $('.bt-content', box).hide();
	var $canvas = $('canvas', box);
	var origWidth = $canvas[0].width;
	var origHeight = $canvas[0].height;
	$canvas.animate({width: origWidth * .5, height: origHeight * .5, left: origWidth * .25, top: origHeight * .25, opacity: 0}, 400, 'swing', callback);
};
$(function(){
	$("img").bt();
	$("#leafs").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 50);
		event.preventDefault();
	 });
})