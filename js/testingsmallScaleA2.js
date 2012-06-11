// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#smallScale_A2").validate({

	// validate signup form on keyup and submit
		rules: {
			premixharvestYear: "required",
			premixDate: "required",
			premixSupplier:"required",
			premixKg:"required",
			premixContent:"required",
			premixAmount:"required",
			premixStock:"required",
			premixSalt:"required",
			premixLot:"required",
			
			premixharvestYear: {
				required: true
				
			},
			premixDate: {
				required: true
			},
			premixSupplier: {
				required: true
				
			},
			premixKg: {
				required: true
				
			},
			premixContent: {
				required: true
				
			},
			
		
			premixAmount: {
				required: true
				
			},
			premixStock: {
				required: true
				
			},
			premixSalt:{
				required:true
			},
			premixLot:{
				required:true
			}
			
			},
		messages: {
			premixharvestYear: "*Required",
			premixDate: "*Required",
			premixSupplier:"*Required",
			premixKg:"*Required",
			premixContent:"*Required",
			premixAmount:"*Required",
			premixStock:"*Required",
			premixSalt:"*Required",
			premixLot:"*Required",
			
				
		
		}
	});

	// propose username by combining first- and lastname
	
	$("#premixharvestYear").focus(function() {
		var premixharvestYear = $("#premixharvestYear").val();
		var premixDate = $("#premixDate").val();
		var premixSupplier=$("#premixSupplier").val();
		var premixLot=$("#premixLot").val();
		var premixKg =$("#premixKg").val();
		var premixContent =$("#premixContent").val();
		var premixSalt =$("#premixSalt").val();
		var premixStock =$("#premixStock").val();
		var premixAmount=$("#premixAmount").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
