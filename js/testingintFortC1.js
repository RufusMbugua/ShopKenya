// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#internalFortified_C1").validate({

	// validate signup form on keyup and submit
		rules: {
			dateC1: "required",
			productionTime: "required",
			saltProduced:"required",
			premixUsed:"required",
			saltFortified:"required",
			notes:"required",
			comments:"required",
			logDate:"required",
			productionTime1:"required",
			saltProduced1:"required",
			premixUsed1:"required",
			saltsFortified1:"required",
			notes1:"required",
			comments1:"required",
			logDate1:"required",
			saltProduced2:"required",
			premixUsed2:"required",
			salFortified2:"required",
			notes2:"required",
			responsible:"required",
			sigNature:"required",
			saltProduced3:"required",
			premixUsed3:"required",
			saltFortified3:"required",
			notes3:"required",
			
			
			
			dateC1: {
				required: true
				
			},
			productionTime: {
				required: true
			},
			saltProduced: {
				required: true
				
			},
			premixUsed: {
				required: true
				
			},
			saltFortified: {
				required: true
				
			},
			
		
			notes: {
				required: true
				
			},
			comments: {
				required: true
				
			},
			logDate: {
				required: true
				
			},
			productionTime1: {
				required: true
				
			},
			saltProduced1: {
				required: true
				
			},
			premixUsed1: {
				required: true
				
			},
			saltsFortified1: {
				required: true
			
			},
			notes1: {
				required: true
				
			},
			comments1: {
				required: true
				
			},
			logDate1: {
				required: true
				
			},
			saltProduced2: {
				required: true
				
			},
			premixUsed2: {
				required: true
				
			},
			saltFortified2: {
				required: true
				
			},
			notes2: {
				required: true
				
			},
			responsible: {
				required: true
				
			},
			sigNature: {
				required: true
				
			},
			saltProduced3: {
				required: true
				
			},
			premixUsed3: {
				required: true
				
			},
			saltFortified3: {
				required: true
				
			},
			notes3: {
				required: true
				
			}
			
			
			},
		messages: {
			dateC1: "*Required",
			productionTime: "*Required",
			saltProduced:"*Required",
			premixUsed:"*Required",
			saltFortified:"*Required",
			notes:"*Required",
			comments:"*Required",
			logDate:"*Required",
			productionTime1:"*Required",
			saltProduced1:"*Required",
			premixUsed1:"*Required",
			saltsFortified1:"*Required",
			notes1:"*Required",
			comments1:"*Required",
			logDate1:"*Required",
			saltProduced2:"*Required",
			premixUsed2:"*Required",
			saltFortified2:"*Required",
			notes2:"*Required",
			responsible:"*Required",
			sigNature:"*Required",
			saltProduced3:"*Required",
			premixUsed3:"*Required",
			saltFortified3:"*Required",
			notes3:"*Required",
			
		}
	});

	// propose username by combining first- and lastname
	
	$("#dateC1").focus(function() {
		var dateC1 = $("#dateC1").val();
		var productionTime = $("#productionTime").val();
		var saltProduced =$("#saltProduced").val();
		var premixUsed =$("#premixUsed").val();
		var saltFortifed =$("#saltFortified").val();
		var notes =$("#notes").val();
		var comments =$("#comments").val();
		var logDate =$("#logDate").val();
		var productionTime1 =$("#productionTime1").val();
		var saltProduced1 =$("#saltProduced1").val();
		var premixUsed1 =$("#premixUsed1").val();
		var saltsFortified1 =$("#saltsFortified1").val();
		var notes1 =$("#notes1").val();
		var comments1 =$("#comments1").val();
		var logDate1 =$("#logDate1").val();
		var saltProduced2 =$("#saltProduced2").val();
		var premixUsed2 =$("#premixUsed2").val();
		var saltFortified2 =$("#saltFortified2").val();
		var notes2 =$("#notes2").val();
		var responsible =$("#responsible").val();
		var sigNature=$("#sigNature").val();
		var saltProduced3 =$("#saltProduced3").val();
		var premixUsed3 =$("#premixUsed3").val();
		var saltFortified3 =$("#saltFortified3").val();
		var notes3 =$("#notes3").val();
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
