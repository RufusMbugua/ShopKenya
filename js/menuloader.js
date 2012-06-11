$(document).ready(function() {

	function saltMax() {
		$(".max.salt").hide('fast');
		$(".min.salt").show('fast');
		$(".menu.salt").animate({
			height : '100%'
		});
	}

	function saltMin() {
		$(".min.salt").hide('fast');
		$(".max.salt").delay(450).show('fast');
		$(".menu.salt").animate({
			height : '25px'
		});
	}

	function oilMax() {
		$(".max.oil").hide('fast');
		$(".min.oil").show('fast');
		$(".menu.oil").animate({
			height : '100%'
		});
	}

	function oilMin() {
		$(".min.oil").hide('fast');
		$(".max.oil").delay(450).show('fast');
		$(".menu.oil").animate({
			height : '25px'
		});
	}

	function sugarMax() {
		$(".max.sugar").hide('fast');
		$(".min.sugar").show('fast');
		$(".menu.sugar").animate({
			height : '100%'
		});
	}

	function sugarMin() {
		$(".min.sugar").hide('fast');
		$(".max.sugar").delay(450).show('fast');
		$(".menu.sugar").animate({
			height : '25px'
		});
	}

	function maizeMax() {
		$(".max.maize").hide('fast');
		$(".min.maize").show('fast');
		$(".menu.maize").animate({
			height : '100%'
		});
	}

	function maizeMin() {
		$(".min.maize").hide('fast');
		$(".max.maize").delay(450).show('fast');
		$(".menu.maize").animate({
			height : '25px'
		});
	}

	function wheatMax() {
		$(".max.wheat").hide('fast');
		$(".min.wheat").show('fast');
		$(".menu.wheat").animate({
			height : '100%'
		});
	}

	function wheatMin() {
		$(".min.wheat").hide('fast');
		$(".max.wheat").delay(450).show('fast');
		$(".menu.wheat").animate({
			height : '25px'
		});
	}


	$(".max.salt").click(function() {
		saltMax();
		wheatMin();
		sugarMin();
		maizeMin();
		oilMin();

	});

	$(".min.salt").click(function() {
		saltMin();
	});
	$(".max.oil").click(function() {
		oilMax();
		saltMin();
		sugarMin();
		maizeMin();
		wheatMin();

	});

	$(".min.oil").click(function() {
		oilMin();
	});

	$(".max.sugar").click(function() {
		sugarMax();
		saltMin();
		wheatMin();
		maizeMin();
		oilMin();

	});
	$(".min.sugar").click(function() {
		sugarMin();

	});

	$(".max.maize").click(function() {
		maizeMax();
		saltMin();
		sugarMin();
		wheatMin();
		oilMin();

	});
	$(".min.maize").click(function() {
		maizeMin();
	});

	$(".max.wheat").click(function() {
		wheatMax();
		saltMin();
		sugarMin();
		maizeMin();
		oilMin();

	});
	$(".min.wheat").click(function() {
		wheatMin();
	});
	
	

}); 