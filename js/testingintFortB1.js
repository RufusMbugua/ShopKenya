// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#internalFortified_B1").validate({

	// validate signup form on keyup and submit
		rules: {
			saltFactory: "required",
			year: "required",
			fortifiedDate:"required",
			fortifiedWeight:"required",
			compoundWeight:"required",
			finalWeight:"required",
			startTime:"required",
			endTime:"required",
			iodineWeight:"required",
			qcReview:"required",
			
			
			saltFactory: {
				required: true
				
			},
			year: {
				required: true,
				minlength: 4
			},
			fortifiedDate: {
				required: true
				
				
			},
			fortifiedWeight: {
				required: true
				
			},
			compoundWeight: {
				required: true
				
			},
			
		
			finalWeight: {
				required: true
				
			},
			startTime: {
				required: true
				
			},
			endTime: {
				required: true
				
			},
			iodineWeight: {
				required: true
			},
			qcReview: {
				required: true
			}
			
			},
		messages: {
			saltFactory: "*Required",
			year: "*Required",
			fortifiedDate:"*Required",
			fortifiedWeight:"*Required",
			compoundWeight:"*Required",
			finalWeight:"*Required",
			startTime:"*Required",
			endTime:"*Required",
			iodineWeight:"*Required",
			qcReview:"*Required",
			
			
		}
	});

	// propose username by combining first- and lastname
	
	$("#saltFactory").focus(function() {
		var saltFactory = $("#saltFactory").val();
		var year = $("#year").val();
		var fortifiedDate =$("#fortifiedDate").val();
		var compoundWeight =$("#compoundWeight").val();
		var finalWeight =$("#finalWeight").val();
		var startTime =$("#startTime").val();
		var endTime =$("#endTime").val();
		var iodineWeight=$("#iodineWeight").val();
		var qcReview =$("#qcReview").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
