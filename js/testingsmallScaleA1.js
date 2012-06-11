// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#smallScale_A1").validate({

	// validate signup form on keyup and submit
		rules: {
			harvestYear: "required",
			controlDate: "required",
			supplierName:"required",
			controlKg:"required",
			iodineContent:"required",
			amountUsed:"required",
			inStock:"required",
			premixUsed:"required",
			controlLot:"required",
			
			harvestYear: {
				required: true
				
			},
			controlDate: {
				required: true
			},
			supplierName: {
				required: true
				
			},
			controlKg: {
				required: true
				
			},
			iodineContent: {
				required: true
				
			},
			
		
			amountUsed: {
				required: true
				
			},
			inStock: {
				required: true
				
			},
			premixAmount:{
				required:true
			},
			controlLot:{
				required:true
			}
			
			},
		messages: {
			harvestYear: "*Required",
			controlDate: "*Required",
			supplierName:"*Required",
			controlKg:"*Required",
			iodineContent:"*Required",
			amountUsed:"*Required",
			inStock:"*Required",
			premixAmount:"*Required",
			controlLot:"*Required",
			
				
		
		}
	});

	// propose username by combining first- and lastname
	
	$("#harvestYear").focus(function() {
		var harvestYear = $("#harvestYear").val();
		var controlDate = $("#controlDate").val();
		var supplierName =$("#supplierName").val();
		var controlLot=$("#controlLot").val();
		var controlKg =$("#controlKg").val();
		var iodineContent =$("#iodineContent").val();
		var amountUsed =$("#amountUsed").val();
		var inStock =$("#inStock").val();
		var premixAmount=$("#premixAmount").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
