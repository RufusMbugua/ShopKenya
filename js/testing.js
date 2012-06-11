// JavaScript Document

/*	$.validator.setDefaults({
	submitHandler: function() { 
	//show some notification on submission
	alert("submitted!"); }

	});*/
$().ready(function() {
    $.validator.addMethod('positiveNumber',
    function (value) { 
        return Number(value) > 0;
    }, 'Value must be > 0');
    
     $.validator.addMethod('zeroAndAbove',
    function (value) { 
        return Number(value) >= 0;
    }, 'Value must be >= 0');
    
    
   $.validator.addMethod("alphaNumerals", function(value, element) {
        return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
    }, "Only letters (a-z), numbers(0-9), or dash (-) is allowed.");
    
     $.validator.addClassRules({
        cloned:{
        required: true
    },
    positive:{
    	positiveNumber:true
    	},
    fromZero:{
    	zeroAndAbove:true
    	}
    });
    
   


	// validate iodine inspection form on keyup and submit
	$("#internalFortified_A1").validate({
		rules: {
			manufacturer:"required",
			productType:"required",
			date:"required",
			
			quantity:{
				required:true,
				positiveNumber:true},
				
			integrityObservation:{
				required:true,
				alphaNumerals:false},
				
			lotObservation:"required",
			productObservation:"required",
			expirationObservation:"required",
			contentObservation:"required",
			certificateObservation:"required",
			receivedBy:"required",
			inspectedBy:"required",
			inputDate:"required",
			iodine_compounds_batch_status:"required",
			purchaseOrder: {
				required: true,
				minlength: 1
			},
			actionsTaken: {
				required: true
			},
			accepted:"required"
		},
		messages: {
			productType: "Please enter the productType",
			manufacturer:"please enter the manufacturer name",
			inspectedBy:"please enter the name of the inspector",
			receivedBy:"Please provide a name of the person who received the order",
			date:"Please enter the date of inspection",
			quantity:{
				required:"Provide the quantity as observed"
			},
			integrityObservation:{required:"Comment on the quantity as observed"},
			lotObservation:"Comment on the lot number as observed",
			productObservation:"Comment on the production date as observed",
			expirationObservation:"Comment on the expiration date as observed",
			contentObservation:"Comment on the content claimed on label as observed",
			certificateObservation:"Comment on the Certificate of Analysis as observed",
			iodine_compounds_batch_status:"Do you reject or accept the order?",
			
			productType: {
				required: "Please enter a product type"
			},
			purchaseOrder: {
				required: "Please provide the purchase order #",
				minlength: "The purchase order # must be > 1 character"
			},
			actionsTaken: {
				required: "Please comment on reasons for rejection/action taken"
			},
			accepted:"Rejected or Accepted?",
			cloned:{required:"required"}
		}
		});
		
		// validate external audit  form of fortified salt on keyup and submit
	$("#externalFortified_B2").validate({
		rules: {
			inspection_registry:"required",
			inspectionDate:"required",
			inspection_officer:"required",
			mill_name:"required",
			address:"required",
			telephone:"required",
			email: {
				required: true,
				email: true
			},
			iodineType:"required",
			inspectionOfficerName:"required",
			inspectionOfficerSign:"required",
			inspectionDate:"required",
			supervisorSign:"required",
			supervisionDate:"required",
			productionArea:"required",
			packagingArea:"required",
			warehouse:"required",
			staffFacilities:"required",
			hygiene:"required",
			protectiveClothing:"required",
			trainedInTask:"required",
			receiptAndStorage:"required",
			premixDilution:"required",
			feederVerification:"required",
			samplingSalt:"required",
			saltIodineTest:"required",
			iodineInventoryUptodate:"required",
			certificateOfAnalysis:"required",
			iodineStoredWell:"required",
			fifoSystem:"required",
			iodineHandling:"required",
			premixPreparation:"required",
			storageHandlingArea:"required",
			iodineHandling:"required",
			storageHandling:"required",
			feederRecordsAvailable:"required",
			premixLevelAdequate:{required:true},
			saltRecordsUptodate:"required",
			ratioAction:"required",
			iodineResultsLevel:"required",
			saltSamplesAnalyzed:"required",
			internalTest:"required",
			externalLab:"required",
			dailyCompoPrepared:"required",
			lastSamplesStored:"required",
			goodLabeling:"required",
			fortifiedSaltStored:"required",
		},
		messages: {
			inspectionRegistry:"Provide an inspection registry #",
			inspectionDate:"Please provide the date of inspection",
			inspectionOfficer:"Name of inspection officer is required",
			millName:"Provide the name of the mill name",
			address:"Provide the address of the factory/mill",
			telephone:"Provide the telephone # of the factory/mill",
			email:{
				required:"Please provide an email address",
				email:"Not a valid email address. E.g john.doe@moh.go.ke"},
			iodineType:"Specifiy the iodine type in the salt",
			inspectionOfficerName:"Please provide the name of the inspection officer",
			inspectionOfficerSign:"Please sign with the initials of the inspection officer",
			inspectionDate:"Provide the date of inspection",
			supervisorName:"Please provide the name of the supervising officer",
			supervisorSign:"Please sign with the initials of the supervising officer",
			supervisionDate:"Date of supervision",
			productionArea:"Is the production area clean and sanitable?",
			packagingArea:"Is the packaging area clean and sanitable?",
			warehouse:"Is the warehouse area clean and sanitable?",
			staffFacilities:"Are the staff facilities and toilettes clean and sanitable?",
			hygiene:"Is the hygiene at the required level?",
			protectiveClothing:"Do personnel wear protective clothing?",
			trainedInTask:"Are the personnel trained in their tasks?",
			receiptAndStorage:"Are there receipt and storage written procedures or instructions?",
			premixDilution:"Are there premix dilution written procedures or instructions?",
			feederVerification:"Written procedures or instructions exist for this?",
			samplingSalt:"Written procedures or instructions exist for this?",
			saltIodineTest:"Written procedures or instructions exist for this?",
			iodineInventoryUptodate:"Is the inventory up to date?",
			certificateOfAnalysis:"Is there a certificate of analysis?",
			iodineStoredWell:"Has the iodine been stored well?",
			fifoSystem:"Does a 'first-in first-out' system exist?",
			iodineHandling:"Is the hadling of the iodine upto standard?",
			premixPreparation:"Is there a premix preparation?",
			storageHandlingArea:"How adequate is the storage handling area?",
			iodineHandling:"Iodine handling adequate?",
			storageHandling:"Storage handling adequate?",
			feederRecordsAvailable:"Available?",
			premixLevelAdequate:{required:"Adequate premix level?"},
			saltRecordsUptodate:"Are the fortified salt records up to date?",
			ratioAction:"Is there any action taken on the ratio of fortified salt/premix?",
			iodineResultsLevel:"Is the iodine reuslts< 40mg/kg",
			saltSamplesAnalyzed:"Analysis of the salt samples?",
			internalTest:"Use of internal test?",
			externalLab:"Use of external test?",
			dailyCompoPrepared:"Is there preparation of a daily composite sample?",
			lastSamplesStored:"Have the last 30 samples been stored?",
			goodLabeling:"Does labeling meet the requirements",
			fortifiedSaltStored:"Is the fortified salt storeed adequately?"
		}
		});
		
		$("#internalFortified_A2").validate({/*salt module*/

	
		rules: {
			
			iodineSupplier1: "required",
			iodineDrums:{
				required:true,
				positiveNumber:true},
			iodineLot:"required",
			iodineExpiration:"required",
			iodineDispatched:"required",
			iodineStock:{required:false,zeroAndAbove:true},
			iodineReceipt:"required",
			identification:"required",
			iodineKgs:{
				required:true,
				positiveNumber:true},
			iodineIdentification:"required",
			iodineMgs:{
				required:true,
				positiveNumber:true},
			reportingDate:"required",
			reportersName:"required",
			reportersSignature:"required",
			
			
			iodineDate_1: {
				required: true
				
			},
			iodineSupplier1: {
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
			iodineReceipt: {
				required: true
				
			},
			identification: {
				required: true
				
			},
			iodineIdentification: {
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
			iodineSupplier1: "*Required",
			iodineDrums:"*Required",
			iodineLot:"*Required",
			iodineExpiration:"*Required",
			iodineDispatched:"*Required",
			iodineStock:{required:"*Required"},
			iodineReceipt:"*Required",
			identification:"*Required",
			iodineKgs:{
				required:"Required"},
			iodineIdentification:"*Required",
			iodineMgs:{
				required:"Required"},
			reportingDate:"*Required",
			reportersName:"*Required",
			reportersSignature:"*Required",
			
			
			iodineDate_1: {
				required: "Required"
				
			},
			iodineSuppler1: {
				required: "Required"
				
			},
			iodineDrums: {
				required: "Required",
				
				
			}
		}
	}); /*end of #internalFortified_A2*/
	
	$("#smallScale_A2").validate({

	// validate form on keyup and submit
		rules: {
			premixLot:"required",
			
			harvestYear: {
				required: true
				
			},
			premixDate: {
				required: true
			},
			SupplierNames: {
				required: true
				
			},
			premixKg: {
				required: true,positiveNumber:true
				
			},
			premixContent: {
				required: true,positiveNumber:true
				
			},
			
		
			premixAmountUsed: {
				required: true,positiveNumber:true
				
			},
			premixInStock: {
				required: true, zeroAndAbove:true
				
			},
			premixSaltProduced:{
				required:true,positiveNumber:true
			}
			
			},
		messages: {
			premixharvestYear:{required:"*Required"},
			premixDate:{required:"*Required"},
			SupplierNames:{required:"*Required"},
			premixKg:{required:"*Required"},
			premixContent:{required:"*Required"},
			premixAmountUsed:{required:"*Required"},
			premixInStock:{required:"*Required"},
			premixSaltProduced:{required:"*Required"},
			premixLot:"*Required"
			
		}
	});
	
	$("#smallScale_A1").validate({
		rules: {
			harvestYear: "required",
			controlDate: "required",
			supplierName:"required",
			controlKg:{
				required:true,
				positiveNumber:true},
			iodineContent:{
				required:true,
				positiveNumber:true},
			amountUsed:{
				required:true,
				positiveNumber:true},
			inStock:{
				required:true,
				zeroAndAbove:true},
			premixAmount:{
				required:true,
				positiveNumber:true},
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
			
			controlLot:{
				required:true
			}
			
			},
		messages: {
			harvestYear: "*Required",
			controlDate: "*Required",
			supplierName:"*Required",
			controlKg:{
				required:"*Required"},
			iodineContent:{required:"*Required"},
			amountUsed:{required:"*Required"},
			inStock:{required:"*Required"},
			premixAmount:{required:"*Required"},
			controlLot:"*Required"
		}
	});
	
	$("#externalfortifiedB1").validate({

	// validate  form on keyup and submit
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
			auditorClosing:"*Required"

		}
	});
	
	$("#externalIodizationB1").validate({
		rules: {
			inspectionRegistry: "required",
			inspectionDate: "required",
			inspecTor:"required",
			iodizationCenter:"required",
			inspectionAddress:"required",
			inspectorTelephone:"required",
			inspectorEmail:"required",
			sampleNumber:"required",
			iodineContent:"required",
			processedSamples:{required:true,positiveNumber:true},
			iodineContents:{required:true,positiveNumber:true},
			averageSample:{required:true,positiveNumber:true},
			averageSamples:{required:true,positiveNumber:true},
			nonCompliances:"required",
			improvementSuggestions:"required",
			insPector:"required",
			inspectorSignature:"required",
			signatureRepresentative:"required",
			
			
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
				required: false
				
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
				required:false
			},
			externalIodB1_date_rep_signed:{
				required:false
			},
			inspectorSignature:{
				required:true
			},
			signatureRepresentative:{
				required:true
			},
			signatureDate:{
				required:false
			},
			supervisorName:{
				required:false
			},
			signatureSupervisor:{
				required:false
			},
			supervisorDate:{
				required:false
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
			processedSamples:{required:"*Required"},
			iodineContents:{required:"*Required"},
			averageSample:{required:"*Required"},
			averageSamples:{required:"*Required"},
			nonCompliances:"*Required",
			improvementSuggestions:"*Required",
			insPector:"*Required",
			factoryRepresentative:"*Required",
			externalIodB1_date_rep_signed:"*Required",
			inspectorSignature:"*Required",
			signatureRepresentative:"*Required",
			signatureDate:"*Required",
			supervisorName:"*Required",
			signatureSupervisor:"*Required",
			supervisorDate:"*Required",
			
			
			
			
		}
	});
	
	$("#internalFortified_B1").validate({

	// validate  form on keyup and submit
		rules: {
			saltFactory: "required",
			year: "required",
			fortifiedDate:"required",
			fortifiedWeight:{
				required:true,
				positiveNumber:true
			},
			compoundWeight:{
				required:true,
				positiveNumber:true
			},
			finalWeight:{
				required:true,
				positiveNumber:true
			},
			startTime:"required",
			endTime:"required",
			iodineWeight:{
				required:true,
				positiveNumber:true
			},
			qcReview:"required",
			
			
			saltFactory: {
				required: true
				
			},
			year: {
				required: true
			},
			fortifiedDate: {
				required: true
				
				
			},
			startTime: {
				required: true
				
			},
			endTime: {
				required: true
				
			},
			qcReview: {
				required: true
			}
			
			},
		messages: {
			saltFactory: "*Required",
			year: {required:"*Required"},
			fortifiedDate:"*Required",
			fortifiedWeight:{required:"*Required"},
			compoundWeight:{required:"*Required"},
			finalWeight:{required:"*Required"},
			startTime:"*Required",
			endTime:"*Required",
			iodineWeight:{required:"*Required"},
			qcReview:"*Required",
			
			
		}
	});
	
	$("#internalFortified_C1").validate({/*salt module*/

	// validate form on keyup and submit
		rules: {
			dateC1: "required",
			productionTime: "required",
			saltProduced:{required:true,positiveNumber:true},
			premixUsed:{required:true,positiveNumber:true},
			saltFortified:{required:true,positiveNumber:true},
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
			saltProduced2:{required:true,zeroAndAbove:true},
			premixUsed2:{required:true,zeroAndAbove:true},
			salFortified2:{required:true,zeroAndAbove:true},
			notes2:"required",
			responsible:"required",
			sigNature:"required",
			saltProduced3:{required:true,zeroAndAbove:true},
			premixUsed3:{required:true,zeroAndAbove:true},
			saltFortified3:{required:true,zeroAndAbove:true},
			notes3:"required",
			
			
			
			dateC1: {
				required: true
				
			},
			productionTime: {
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
				required: true,zeroAndAbove:true
				
			},
			premixUsed2: {
				required: true,zeroAndAbove:true
				
			},
			saltFortified2: {
				required: true,zeroAndAbove:true
				
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
				required:true,zeroAndAbove:true
				
			},
			premixUsed3: {
				required:true,zeroAndAbove:true
				
			},
			saltFortified3: {
				required:true,zeroAndAbove:true
				
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
			saltProduced:{required:"*Required"},
			premixUsed:{required:"*Required"},
			saltsFortified:{required:"*Required"},
			notes1:"*Required",
			comments1:"*Required",
			logDate1:"*Required",
			notes2:"*Required",
			responsible:"*Required",
			sigNature:"*Required",
			saltProduced3:"*Required",
			premixUsed3:"*Required",
			saltFortified3:"*Required",
			notes3:"*Required",
			
		}
	});
	
	$("#internalFortified_B2").validate({/*salt module*/

	// validate form on keyup and submit
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
			checkupName:"*Required"
		}
	}); /*end of internalFortified_B2*/
	
	
	$("#externalFortified_B3").validate({

	// validate  form on keyup and submit
		rules: {
			inspection_registry: "required",
			inspections_date: "required",
			factory_name:"required",
			factory_rep:"required",
			address:"required",
			telephone:"required",
			cbo_production: {
				required: false //,checkOne:true
				
			},
			cbo_packaging:{
				required:false //,checkOne:true
			},
			cbo_fortification_site:{
				required:false //,checkOne:true
			},
			cbo_labaratory:{
				required:false //,checkOne:true
			},
			cbo_warehouse:{
				required:false //,checkOne:true
			},
			cbo_rm_salt_warehouse:{
				required:false //,checkOne:true
			},
			cbo_other:{
				required:false //,checkOne:true
			},
			compliances_list:"required",
			suggestions:"required",
			health_officer:"required",
			ho_signature:"required",
			ho_signature_date:"required",
			supervisor_name:"required",
			
			inspection_registry: {
				required: true
				
			},
			inspections_date: {
				required: true
			},
			factory_name: {
				required: true
				
			},
			factory_reps: {
				required: true
				
			},
			address: {
				required: true
				
			},
			
		
			telephone: {
				required: true
				
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
				required:false
			},
			ho_signature:{
				required:true
			},
			ro_signature:{
				required:false
			},
			ho_signature_date:{
				required:true
			},
			roSignature:{
				required:false
			},
			supervisor_name:{
				required:false
			},
			s_signature_date:{
				required:false
			}
			},
		messages: {
			inspection_registry: "*Required",
			inspections_date: "*Required",
			factory_name:"*Required",
			factory_rep:"*Required",
			address:"*Required",
			telephone:"*Required",
			cbo_production:{required:"*Required"},
			cbo_packaging:{required:"*Required"},
			cbo_fortification_site:{required:"*Required"},
			cbo_labaratory:{required:"*Required"},
			cbo_warehouse:{required:"*Required"},
			cbo_rm_salt_warehouse:{required:"*Required"},
			cbo_other:{required:"*Required"},
			compliances:"*Required",
			suggestions:"*Required",
			health_officer:"*Required",
			factory_reps:"*Required",
			ho_signature:"*Required",
			ro_signature:"*Required",
			ho_signature_date:"*Required",
			roSignature:"*Required",
			supervisor_name:"*Required",
			s_signature_date:"*Required"
				
		
		}
	});
	
   /*start of oil module*/
   $("#fortifiedOil_A1").validate({/*oil module*/

	
		rules: {
			
			dateReported: {
				required: true
				
			},
			transactedBy: {
				required: true
			}
			
          /*the rest are validated in the class error 'cloned'*/
			
			},
		messages: {
			dateReported:{
				required:"Required"},
			transactedBy:{required:"*Required"}		
			}
	}); /*end of #fortifiedOil_A1*/
	
	$("#fortifiedOil_B1").validate({/*oil module*/

	
		rules: {
			
			oilFactory: {
				required: true
				
			},
			harvestYear: {
				required: true
			},
			nameSignature:{
				required:true
			}
			
          /*the rest are validated in the class error 'cloned'*/
			
			},
		messages: {
			dateReported:{
				required:"Required"},
			transactedBy:{
				required:"*Required"},
			nameSignature:{
				required:"*Required"}	
			}
			
	}); /*end of #fortifiedOil_B1*/
	
	$("#fortifiedOil_B2").validate({/*oil module*/

	// validate form on keyup and/or submit
		rules: {
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
			stirrersObservations: {
				required: true
				
			},
			feedingTubesObservations:{
				required:true
			},
			blendingTankObservations:{
				required:true
			},
			checkupName: {
				required: true
				
			}
			
			},
		messages: {
			checkupDate: {
				required: "*Required"
				
			},
			blenderObservations: {
				required: "*Required"
			},
			balanceObservations: {
				required: "*Required"
				
			},
			pumpObservations: {
				required: "*Required"
				
			},
			stirrersObservations: {
				required: "*Required"
				
			},
			feedingTubesObservations:{
				required:"*Required"
			},
			blendingTankObservations:{
				required:"*Required"
			},
			checkupName: {
				required: "*Required"
				
			}
		}
	});/*end of fortifiedOil_B2*/
	
		$("#fortifiedOil_C1").validate({/*oil module*/

	// validate form on keyup and submit
		rules: {
			dateC1:{required:true},
			logDate:{required:true},
			oilProduced2:{required:true,zeroAndAbove:true},
			premixUsed2:{required:true,zeroAndAbove:true},
			oilFortified2:{required:true,zeroAndAbove:true},
			notes2:{required:true},
			responsible:{required:true},
			sigNature:{required:true},
			oilProduced3:{required:true,zeroAndAbove:true},
			premixUsed3:{required:true,zeroAndAbove:true},
			oilFortified3:{required:true,zeroAndAbove:true},
			notes3:{required:true},
			},
		messages: {
			dateC1:{required:"*Required"},
			logDate:{required:"*Required"},
			oilProduced2:{required:"*Required"},
			premixUsed2:{required:"*Required"},
			oilFortified2:{required:"*Required"},
			notes2:{required:"*Required"},
			responsible:{required:"*Required"},
			sigNature:{required:"*Required"},
			oilProduced3:{required:"*Required"},
			premixUsed3:{required:"*Required"},
			oilFortified3:{required:"*Required"},
			notes3:{required:"*Required"}
			
		}
	}); /*end of fortifiedOil_C1*/
	
   /*end of oil module*/
});