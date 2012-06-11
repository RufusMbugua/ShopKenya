// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#internalFortified_A2").validate({

	// validate signup form on keyup and submit
		rules: {
			iodineDate1: "required",
			iodineSupplier1: "required",
			iodineDrums:"required",
			iodineLot:"required",
			iodineExpiration:"required",
			iodineDispatched:"required",
			iodineStock:"required",
			iodineReceipt:"required",
			identification:"required",
			iodineKgs:"required",
			iodineIdentification:"required",
			iodineMgs:"required",
			reportingDate:"required",
			reportersName:"required",
			reportersSignature:"required",
			
			
			iodineDate1: {
				required: true
				
			},
			iodineSupplier1: {
				required: true
			},
			iodineDrums: {
				required: true
				
			},
			iodineLot: {
				required: true
				
			},
			iodineExpiration: {
				required: true
				
			},
			
		
			iodineDispatched: {
				required: true
				
			},
			iodineStock: {
				required: true
				
			},
			iodineReceipt: {
				required: true
				
			},
			identification: {
				required: true
				
			},
			iodineKgs: {
				required: true
				
			},
			iodineIdentification: {
				required: true
				
			},
			iodineMgs: {
				required: true
			
			},
			reportingDate: {
				required: true
				
			},
			reportersName: {
				required: true
				
			},
			reportersSignature: {
				required: true
				
			}
			
			},
		messages: {
			iodineDate1: "*Required",
			iodineSupplier1: "*Required",
			iodineDrums:"*Required",
			iodineLot:"*Required",
			iodineExpiration:"*Required",
			iodineDispatched:"*Required",
			iodineStock:"*Required",
			iodineReceipt:"*Required",
			identification:"*Required",
			iodineKgs:"*Required",
			iodineIdentification:"*Required",
			iodineMgs:"*Required",
			reportingDate:"*Required",
			reportersName:"*Required",
			reportersSignature:"*Required",
			
			
			iodineDate1: {
				required: "Required"
				
			},
			iodineSuppler1: {
				required: "Required"
				
			},
			iodineDrums: {
				required: "Required"
				
			},
		}
	});

	// propose username by combining first- and lastname
	
	$("#iodineDate1").focus(function() {
		var iodineDate1 = $("#iodineDate1").val();
		var iodineSupplier1 = $("#iodineSupplier1").val();
		var iodineDrums =$("#iodineDrums").val();
		var iodineLot =$("#iodineLot").val();
		var iodineExpiration =$("#iodineExpiration").val();
		var iodineDispatched =$("#iodineDispatched").val();
		var iodineStock =$("#iodineStock").val();
		var iodineReceipt =$("#iodineReceipt").val();
		var identification =$("#identification").val();
		var iodineKgs =$("#iodineKgs").val();
		var iodineIdentification =$("#iodineIdentification").val();
		var iodineMgs =$("#iodineMgs").val();
		var reportingDate =$("#reportingDate").val();
		var reportersName =$("#reportersName").val();
		var reportersSignature =$("#reportersSignature").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
