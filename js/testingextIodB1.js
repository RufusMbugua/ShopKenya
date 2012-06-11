// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#externalIodizationB1").validate({

	// validate signup form on keyup and submit
		rules: {
			inspectionRegistry: "required",
			inspectionDate: "required",
			inspecTor:"required",
			iodizationCenter:"required",
			inspectionAddress:"required",
			inspectorTelephone:"required",
			inspectorFax:"required",
			inspectorEmail:"required",
			sampleNumber:"required",
			iodineContent:"required",
			processedSamples:"required",
			iodineContents:"required",
			averageSample:"required",
			averageSamples:"required",
			nonCompliances:"required",
			improvementSuggestions:"required",
			insPector:"required",
			factoryRepresentative:"required",
			daTe:"required",
			inspectorSignature:"required",
			signatureRepresentative:"required",
			signatureDate:"required",
			supervisorName:"required",
			signatureSupervisor:"required",
			supervisorDate:"required",
			
			
			inspectionRegistry: {
				required: true
				
			},
			inspectionsDate: {
				required: true
			},
			inspecTor: {
				required: true
				
			},
			iodizationCenter: {
				required: true
				
			},
			inspectionAddress: {
				required: true
				
			},
			
		
			inspectorTelephone: {
				required: true
				
			},
			inspectorFax: {
				required: true
				
			},
			inspectorEmail: {
				required: true
				
			},
			sampleNumber: {
				required: true
				
			},
			iodineContent: {
				required: true
				
			},
			processedSamples: {
				required: true
				
			},
			iodineContents: {
				required: true
			
			},
			averageSample: {
				required: true
				
			},
			averageSamples: {
				required: true
				
			},
			nonCompliances: {
				required: true
				
			},
			improvementSuggestions:{
				required:true
			},
			insPector:{
				required:true
			},
			factoryRepresentative:{
				required:true
			},
			daTe:{
				required:true
			},
			inspectorSignature:{
				required:true
			},
			signatureRepresentative:{
				required:true
			},
			signatureDate:{
				required:true
			},
			supervisorName:{
				required:true
			},
			signatureSupervisor:{
				required:true
			},
			supervisorDate:{
				required:true
			}
			
			},
		messages: {
			inspectionRegistry: "*Required",
			inspectionsDate: "*Required",
			inspecTor:"*Required",
			iodizationCenter:"*Required",
			inspectionAddress:"*Required",
			inspectorTelephone:"*Required",
			inspectorFax:"*Required",
			inspectorEmail:"*Required",
			sampleNumber:"*Required",
			iodinContent:"*Required",
			processedSamples:"*Required",
			iodineContents:"*Required",
			averageSample:"*Required",
			averageSamples:"*Required",
			nonCompliances:"*Required",
			improvementSuggestions:"*Required",
			insPector:"*Required",
			factoryRepresentative:"*Required",
			daTe:"*Required",
			inspectorSignature:"*Required",
			signatureRepresentative:"*Required",
			signatureDate:"*Required",
			supervisorName:"*Required",
			signatureSupervisor:"*Required",
			supervisorDate:"*Required",
			
			
			
			
		}
	});

	// propose username by combining first- and lastname
	
	$("#inspectionRegistry").focus(function() {
		var inspectionRegistry = $("#inspectionRegistry").val();
		var inspectionsDate = $("#inspectionsDate").val();
		var inspecTor =$("#inspecTor").val();
		var iodizationCenter =$("#iodizationCenter").val();
		var inspectionAddress =$("#inspectionAddress").val();
		var inspectorTelephone =$("#inspectorTelephone").val();
		var inspectorFax =$("#inspectorFax").val();
		var inspectorEmail =$("#inspectorEmailt").val();
		var sampleNumber =$("#sampleNumber").val();
		var iodineContent =$("#iodineContent").val();
		var processedSamples =$("#processedSamples").val();
		var iodineContents =$("#iodineContents").val();
		var averageSample =$("#averageSample").val();
		var averageSamples =$("#averageSamples").val();
		var nonCompliances =$("#nonCompliances").val();
		var improvementSuggestions =$("improvementSuggestions").val();
		var insPector =$("insPector").val();
		var factoryRepresentative=$("factoryRepresentative").val();
		var daTe=$("daTe").val();
		var inspectorSignature=$("inspectorSignature").val();
		var signatureRepresentative=$("signatureRepresentative").val();
		var signatureDate=$("signatureDate").val();
		var supervisorName=$("supervisorName").val();
		var signatureSupervisor =$("signatureSupervisor").val();
		var supervisorDate=$("supervisorDate").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
