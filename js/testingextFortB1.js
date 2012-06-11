// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#externalfortifiedB1").validate({

	// validate signup form on keyup and submit
		rules: {
			visitDate: "required",
			visitTime: "required",
			oilFactory:"required",
			visitAddress:"required",
			phealthOfficer:"required",
			auditorName:"required",
			auditorPosition:"required",
			auditorSignature:"required",
			auditorOpening:"required",
			auditorClosing:"required",
			
			visitDate: {
				required: true
				
			},
			visitTime: {
				required: true
			},
			oilFactory: {
				required: true
				
			},
			visitAddress: {
				required: true
				
			},
			phealhOfficer: {
				required: true
				
			},
			
		
			auditorName: {
				required: true
				
			},
			auditorPosition: {
				required: true
				
			},
			auditorSignature:{
				required:true
			},
			auditorOpening:{
				required:true
			},
			auditorClosing:{
				required:true
			}
			
			},
		messages: {
			visitDate: "*Required",
			visitTime: "*Required",
			oilFactory:"*Required",
			visitAddress:"*Required",
			phealthOfficer:"*Required",
			auditorName:"*Required",
			auditorPosition:"*Required",
			auditorSignature:"*Required",
			auditorOpening:"*Required",
			auditorClosing:"*Required",
			
				
		
		}
	});

	// propose username by combining first- and lastname
	
	$("#visitDate").focus(function() {
		var vsitDate = $("#visitDate").val();
		var visitTime = $("#visitTime").val();
		var oilFactory =$("#oilFactory").val();
		var visitAddress=$("#visitAddress").val();
		var phealthOfficer =$("#phealthOfficer").val();
		var auditorName =$("#auditorName").val();
		var auditorPosition =$("#auditorPosition").val();
		var auditorSiganture =$("#auditorSiganture").val();
		var auditorOpening=$("#auditorOpening").val();
		var auditorClosing= $("#auditorClosing").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
