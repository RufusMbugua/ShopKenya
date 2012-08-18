$(document).ready(function() {

	function shoppingMax() {
		$(".anchor").hide('fast');
		$(".anchor.shopping").show('fast');
		$("awesome.shopping").show('fast');
		$('mini-menu.shopping').show('fast');
		
	}
	
		function shoppingMin() {
		$(".anchor").show('fast');
	    $("awesome.shopping").show('hide');
		
	}

	$(".anchor.shopping").click(function() {
		shoppingMax();

	});
	
	$(".awesome.shopping").click(function() {
		shoppingMin();

	});

	
	
	

}); 