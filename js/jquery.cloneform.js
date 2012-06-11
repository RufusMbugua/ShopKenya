//The Plugin Script
(function($) {

    $.fn.fieldclone = function(options) { 
    
		//==> Options <==//
		var settings = {
			newid_ : 0,
			target_: $(this),
			insert_: "before",
			limit_: 0
		};
        if (options) $.extend(settings, options);           

		if( (settings.newid_ <= (settings.limit_+1)) || (settings.limit_==0) ){	//Check the limit to see if we can clone

			//==> Clone <==//
			var fieldclone = $(this).clone();
			//alert("fieldclone: "+fieldclone);
			var node = $(this)[0].nodeName;
			var classes = $(this).attr("class");
				//alert("class: "+classes);

			//==> Increment every input id <==//
			var srcid = 1;
			$(fieldclone).find(':input').each(function(){
				var s = $(this).attr("name"); 
				var t = $(this).attr("id");			
				$(this).attr("name", s.replace(eval('/_'+srcid+'/ig'),'_'+settings.newid_)); 
				$(this).attr("id", t.replace(eval('/_'+srcid+'/ig'),'_'+settings.newid_)); 
			});

			//==> Locate Target Id <==//
			var targetid = $(settings.target_).attr("id");
			if(targetid.length<=0){
				targetid = "clonetarget";
				$(settings.target_).attr("id",targetid);
			}		

			//==> Insert Clone <==//
			var newhtml = $(fieldclone).html().replace(/\n/gi,"");
			newhtml = '<'+node+' class="'+classes+'">'+newhtml+'</'+node+'>';
			
			eval("var insertCall = $('#"+targetid+"')."+settings.insert_+"(newhtml)"); 
		}
    };

})(jQuery);    