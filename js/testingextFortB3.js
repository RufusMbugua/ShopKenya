// JavaScript Document
	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }

	});
$().ready(function() {
	// validate the comment form when it is submitted
	$("#table-b2").validate({

	// validate signup form on keyup and submit
		rules: {
			inspection_registry: "required",
			inspections_date: "required",
			factory_name:"required",
			factory_rep:"required",
			address:"required",
			telephone:"required",
			cbo_production:"required",
			cbo_packaging:"required",
			cbo_fortification_site:"required",
			cbo_labaratory:"required",
			cbo_warehouse:"required",
			cbo_rm_salt_warehouse:"required",
			cbo_other:"required",
			compliances_list:"required",
			suggestions:"required",
			health_officer:"required",
			factory_reps:"required",
			ho_signature:"required",
			ro_signature:"required",
			ho_signature_date:"required",
			roSignature:"required",
			supervisor_name:"required",
			s_signature_date:"required",
			
			inspection_registry: {
				required: true
				
			},
			inspections_date: {
				required: true
			},
			factory_name: {
				required: true
				
			},
			factory_rep: {
				required: true
				
			},
			address: {
				required: true
				
			},
			
		
			telephone: {
				required: true
				
			},
			cbo_production: {
				required: true
				
			},
			cbo_packaging:{
				required:true
			},
			cbo_fortification_site:{
				required:true
			},
			cbo_labaratory:{
				required:true
			},
			cbo_warehouse:{
				required:true
			},
			cbo_rm_salt_warehouse:{
				required:true
			},
			cbo_other:{
				required:true
			},
			compliances_list:{
				required:true
			},
			suggestions:{
				required:true
			},
			health_officer:{
				required:true
			},
			factory_reps:{
				required:true
			},
			ho_signature:{
				required:true
			},
			ro_signature:{
				required:true
			},
			ho_signature_date:{
				required:true
			},
			roSiganture:{
				required:true
			},
			supervisor_name:{
				required:true
			},
			s_signature_date:{
				required:true
			}
			
			
			
			},
		messages: {
			inspection_registry: "*Required",
			inspections_date: "*Required",
			factory_name:"*Required",
			factory_rep:"*Required",
			address:"*Required",
			telephone:"*Required",
			cbo_production:"*Required",
			cbo_packaging:"*Required",
			cbo_fortification_site:"*Required",
			cbo_labaratory:"*Required",
			cbo_warehouse:"*Required",
			cbo_rm_salt_warehouse:"*Required",
			cbo_other:"*Required",
			compliances:"*Required",
			suggestions:"*Required",
			health_officer:"*Required",
			factory_reps:"*Required",
			ho_signature:"*Required",
			ro_signature:"*Required",
			ho_signature_date:"*Required",
			roSignature:"*Required",
			supervisor_name:"*Required",
			s_signature_date:"*Required",
				
		
		}
	});

	// propose username by combining first- and lastname
	
	$("#inspection_registry").focus(function() {
		var inspection_registry = $("#inspection_registry").val();
		var inspections_date = $("#inspections_date").val();
		var factory_name =$("#factory_name").val();
		var factory_rep=$("#factory_rep").val();
		var address =$("#address").val();
		var telephone =$("#telephone").val();
		var cbo_production =$("#cbo_production").is(":checked");
		var cbo_packaging =$("#cbo_packaging").is(":checked");
		var cbo_fortification_site =$("#cbo_fortification_site").is(":checked");
		var cbo_labaratory =$("#cbo_labaratory").is(":checked");
		var cbo_warehouse =$("#cbo_warehouse").is(":checked");
		var cbo_rm_salt_warehouse =$("#cbo_rm_salt_warehouse").is(":checked");
		var cbo_other =$("#cbo_other").is(":checked");
		var compliances_list =$("#compliances_list").val();
		var suggestions=$("suggestions").val();
		var health_officer=$("health_other").val();
		var factory_reps=$("factory_reps").val();
		var ho_signature=$("ho_signature").val();
		var ro_signature=$("ro_signature").val();
		var ho_signature_date=$("ho_signature_date").val();
		var roSignature=$("roSignature").val();
		var supervisor_name=$("supervisor_name").val();
		var s_signature_date=$("s_signature_date").val();
		
	})

	//code to hide topic selection, disable for demo
	
	// newsletter topics are optional, hide at first
	
	

});
$().ready;
