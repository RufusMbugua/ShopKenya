// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#internalFortified_B2").validate({

	// validate signup form on keyup and submit
		rules: {
			checkupDate: "required",
			blenderObservations: "required",
			balanceObservations:"required",
			pumpObservations:"required",
			drierObservations:"required",
			sprayerObservations:"required",
			checkupName:"required",
			
			checkupDate: {
				required: true
				
			},
			blenderObservations: {
				required: true
			},
			balanceObservations: {
				required: true
				
			},
			pumpObservations: {
				required: true
				
			},
			drierObservations: {
				required: true
				
			},
			
		
			sprayerObservations: {
				required: true
				
			},
			checkupName: {
				required: true
				
			}
			
			},
		messages: {
			checkupDate: "*Required",
			blenderObservations: "*Required",
			balanceObervations:"*Required",
			pumpObservations:"*Required",
			drierObservations:"*Required",
			sprayerObservations:"*Required",
			checkupName:"*Required",
			
			
				
		
		}
	});

	// propose username by combining first- and lastname
	
	$("#checkupDate").focus(function() {
		var checkupDate = $("#checkupDate").val();
		var blenderObservations = $("#blenderObseervations").val();
		var balanceObservations =$("#balanceObservations").val();
		var pumpObservations =$("#pumpObservations").val();
		var drierObservations =$("#drierObservations").val();
		var sprayerObservations =$("#sprayerObservations").val();
		var checkupName =$("#checkupName").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
