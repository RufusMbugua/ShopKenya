/*all jquery custom functions are loaded from here*/
$(document).ready(function() {
	/**
	 * variables
	 */
	var visit_site = ''; 
	var devices="";
	var nthChild=''; //to get the vaue of the last cloned row
	var form_id = '';
	
	/*start of clone trigger functions*/
	$('#clonetrigger').click(function() {
					var yourclass = ".clonable";
					//The class you have used in your form
					var clonecount = $(yourclass).length;
					//how many clones do we already have?
					var newid = Number(clonecount) + 1;
					//Id of the new clone

					$(yourclass + ":first").fieldclone({//Clone the original element
						newid_ : newid, //Id of the new clone, (you can pass your own if you want)
						target_ : $("#formbuttons"), //where do we insert the clone? (target element)
						insert_ : "before", //where do we insert the clone? (after/before/append/prepend...)
						limit_ : 0							//Maximum Number of Clones
					});
					
					
					$('.clonable label.error').remove();
					$('.cloned').removeClass('error');
					$('.autoDate').removeClass('hasDatepicker error');
		            $('.autoDate').datepicker({dateFormat:"yy-mm-dd"});
		          
		         
		            $('.mobiscroll').removeClass('scroller');
                    $('.mobiscroll').scroller({preset:'time'});

					var t = 'default';
					var m = 'mixed';
					$('.mobiscroll').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });
					
					$(".cloned").on("keyup", function(){
	                    //alert("active element: "+$("input:text:focus").attr("id"));
	                    //do some calculations on key typed
	                  var id=$("input:text:focus").attr("id");
	                  var no=id.substr(id.indexOf('_')+1,id.length);
	                 // alert("append: "+no);
	                switch(form_id){
	               case '#smallScale_A1':/*salt module*/
	               $("#controlKg_"+no+",#amountUsed_"+no).on("keyup",function(){
				
					$('#inStock_'+no).val($('#controlKg_'+no).val()- $('#amountUsed_'+no).val());
					});
					break;
					case '#smallScale_A2':/*salt module*/
					 $("#premixKg_"+no+",#premixAmountUsed_"+no).on("keyup",function(){
				
					$('#premixInStock_'+no).val($('#premixKg_'+no).val()- $('#premixAmountUsed_'+no).val());
					  });
					  break;
					  case '#internalFortified_A2':/*salt module*/
					 $("#iodineDrums_"+no+",#iodineDispatched_"+no).on("keyup",function(){
		                $('#iodineStock_'+no).val($('#iodineDrums_'+no).val()- $('#iodineDispatched_'+no).val());
						});
						break;
					  case '#internalFortified_C1':/*salt module*/
					  $("#saltProduced_"+no+",#premixUsed_"+no+",#saltFortified_"+no).on("keyup",function(){
				      sp=0;pu=0;sf=0;
				      for(i=1;i<=no;++i){
					  sp=sp+parseFloat($('#saltProduced_'+i).val());
					  pu=pu+parseFloat($('#premixUsed_'+i).val());
					  sf=sf+parseFloat($('#saltFortified_'+i).val());
					  
					 // alert(sp+' '+pu+' '+sf);
					  }
					  
					   $('#saltProduced2').val(sp.toFixed(2));
					  $('#premixUsed2').val(pu.toFixed(2));
					  $('#saltFortified2').val(sf.toFixed(2));
					 /*  $('#saltProduced2').val($('#saltProduced_'+no).val());
					  $('#premixUsed2').val($('#premixUsed_'+no).val());
					  $('#saltFortified2').val($('#saltFortified_'+no).val());*/
					  
					  $('#saltProduced3').val($('#saltProduced2').val());
					  $('#premixUsed3').val($('#premixUsed2').val());
					  $('#saltFortified3').val($('#saltFortified2').val());
						}); 
					break;
					case '#fortifiedOil_A1':/*oil module*/
					$("#numberOfCans_"+no+",#dispatchedLotID_"+no).on("keyup",function(){
		                $('#inStock_'+no).val($('#numberOfCans_'+no).val()- $('#dispatchedLotID_'+no).val());
						});
					break;
					case '#fortifiedOil_C1':/*oil module*/
					  $("#oilProduced_"+no+",#premixUsed_"+no+",#oilFortified_"+no).on("keyup",function(){
				      sp=0;pu=0;sf=0;
				      for(i=1;i<=no;++i){
					  sp=sp+parseFloat($('#oilProduced_'+i).val());
					  pu=pu+parseFloat($('#premixUsed_'+i).val());
					  sf=sf+parseFloat($('#oilFortified_'+i).val());
					  }
					  
					   $('#oilProduced2').val(sp.toFixed(2));
					  $('#premixUsed2').val(pu.toFixed(2));
					  $('#oilFortified2').val(sf.toFixed(2));
					  $('#oilProduced3').val($('#oilProduced2').val());
					  $('#premixUsed3').val($('#premixUsed2').val());
					  $('#oilFortified3').val($('#oilFortified2').val());
						}); 
					break;
	                    } /*end of the case*/
	                });
		 
					return  false;
				});/*end of clone trigger*/
				
				/*----------------------------------------------------------------------------------------------------------------*/
				
				/*start of datetime functions*/
				$(function() {
				var dates= ['#date','#inputDate','.autoDate',
				'#reportingDate','#fortifiedDate','#checkupDate','#dateC1','#visitDate',
				'#inspection_date','#supervision_date','#inspector_date','#inspectionsDate',
				'#signatureDate','#supervisorDate','#controlDate','#premixDate',
				'#inspections_date','#inspectionDate','#roSignature','#ho_signature_date',
				'#s_signature_date','#externalIodB1_date_rep_signed'];
				
				
				//initialize all datepickers
				for ( var i=0, iLen=dates.length ; i<iLen ; i++){
				$(dates[i]).datepicker({dateFormat:"yy-mm-dd"});
				}
				
				for(i=new Date().getFullYear();i>1990; i--)// year picker
				{
				$('#year').append($('<option/>').val(i).html(i));
				$('#harvestYear').append($('<option/>').val(i).html(i));
				}
				}); /*end of datetime functions*/
				
				/*----------------------------------------------------------------------------------------------------------------*/
				//submit button event here
				/*----------------------------------------------------------------------------------------------------------------*/
				
				/*start of reset_current_form click event*/
				$("#reset_current_form").click(function() {

				});/*end of reset_current_form click event*/
				
				/*----------------------------------------------------------------------------------------------------------------*/
				
				/*start of mobiscroller time picker function*/
				$(function(){
				$('.mobiscroll').scroller({preset:'time'});
			
				var t = 'default';
				var m = 'mixed';
				$('.mobiscroll').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });
			
				});/*end of mobiscroller time picker function*/
				
				/*----------------------------------------------------------------------------------------------------------------*/
				
				/*start of form calculations on key up*/
				$("#saltProduced_1,#premixUsed_1,#saltFortified_1").keyup(function(){/*salt module*/
				
			      $('#saltProduced2').val($('#saltProduced_1').val());
				  $('#premixUsed2').val($('#premixUsed_1').val());
				  $('#saltFortified2').val($('#saltFortified_1').val());
				  
				  $('#saltProduced3').val($('#saltProduced2').val());
				  $('#premixUsed3').val($('#premixUsed2').val());
				  $('#saltFortified3').val($('#saltFortified2').val());
				});
				
				$("#oilProduced_1,#premixUsed_1,#oilFortified_1").keyup(function(){/*oil module*/
				
			      $('#oilProduced2').val($('#oilProduced_1').val());
				  $('#premixUsed2').val($('#premixUsed_1').val());
				  $('#oilFortified2').val($('#oilFortified_1').val());
				  
				  $('#oilProduced3').val($('#oilProduced2').val());
				  $('#premixUsed3').val($('#premixUsed2').val());
				  $('#oilFortified3').val($('#oilFortified2').val());
				});
				
				
				$("#controlKg_1,#amountUsed_1").keyup(function(){
				   $('#inStock_1').val($('#controlKg_1').val()- $('#amountUsed_1').val());
				});
				
								
			     $("#premixKg_1,#premixAmountUsed_1").keyup(function(){	
				   $('#premixInStock_1').val($('#premixKg_1').val()- $('#premixAmountUsed_1').val());
				  });
				  
				
				 $("#iodineDispatched_1,#iodineDrums_1").keyup(function(){/*salt module*/
					$('#iodineStock_1').val($('#iodineDrums_1').val()- $('#iodineDispatched_1').val());
				});
				
				
				$("#numberOfCans_1,#dispatchedLotID_1").on("keyup",function(){/*oil module*/
			       $('#inStock_1').val($('#numberOfCans_1').val()- $('#dispatchedLotID_1').val());
				});
				
				
				$("#saltProduced").keyup(function(){
				  $('#saltProduced2').val($('#saltProduced').val());
				});
				
			
				$("#premixUsed").keyup(function(){
				  $('#premixUsed2').val($('#premixUsed').val());
				});
				
			
				$("#saltFortified").keyup(function(){
				  $('#saltFortified2').val($('#saltFortified').val());
				});/*end of form calculations on key up*/
				/*----------------------------------------------------------------------------------------------------------------*/
				
});/*end of parent document ready function*/