
//jQuery 出让 $符号的使用权限
jQuery.noConflict();

jQuery('.slide').zySlide({speed:2000}).css({
	'backgroundColor':'purple'
});
jQuery('#slide').zySlide({speed:5000}).css({
	'backgroundColor':'pink'
});

