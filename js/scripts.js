		//- Run the TAB plugin -->
		var base_url='http://'+window.location.host+'/fortified/front/vehicles/';
			$(function() {
				// Fast and dirty
				$('article.tabs section > h2').click(function() {
					$('article.tabs section').removeClass('ON');
					$(this).closest('section').addClass('ON');
				});
			});


			// Place all Javascript code here

			$(document).ready(function() {

				$("#showFancyModal").click(function() {
					$("#profile-fancy").addClass("show");
					return false;
				});

				$("#closeFancy").click(function() {
					$("#profile-fancy").removeClass("show");
					return false;
				});
				
					//call created functions
                date_time_create();
                mobi_scroller();
			});

	
		//initialize all date pickers-->

			var visit_site = '';
			var form_id = '#<?php echo $form_id ?>';
	
	function date_time_create() {
	var dates= ['#date','#inputDate', '#iodineDate1','#iodineExpiration',
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
	
	}; //end of date-time loaders
	
	
	function mobi_scroller(){/*the time picker plugin*/
        	//time
        	$('#startTime').scroller({preset:'time'});
        	 $('#endTime').scroller({preset:'time'});
        	 $('#productionTime').scroller({preset:'time'});
        	 $('#visitTime').scroller({preset:'time'});
        	 
                var t = 'default';
                var m = 'mixed';
                $('#startTime').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });
                $('#endTime').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });
                $('#productionTime').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });
                $('#visitTime').scroller('destroy').scroller({ preset: 'time', theme: t, mode: m });       
            
        } //end of mobi_scroller
	
	
	$(function() {
				/* For zebra striping */
				$("table tr:nth-child(odd)").addClass("odd-row");
				/* For cell text alignment */
				$("table td:first-child, table th:first-child").addClass("first");
				/* For removing the last border */
				$("table td:last-child, table th:last-child").addClass("last");
			});

	$().ready(function() {
	

	$("#reset_current_form").click(function() {

	});

	$("#close_opened_form").click(function() {
	
	window.location=base_url;
	
	});
	
	
	//on form submit
		$("#submit_form_data").click(function() {
	visit_site=''; //reset previous values if any
	if(form_id=='#externalFortified_B3')
	{
	//do collect visited sites
	$(form_id).find(':checkbox').each(function()
	{
	if($(this).is(':checked'))
	{

	visit_site=visit_site+$(this).val()+",";
	}
	});
	
	
	$('#areas_visited').val(visit_site);
	//alert("The checked ones: "+visit_site);
	}
	
	$('#<?php echo $form_id ?>').submit();
	
	}); //end of the on form submit

        
        $("#iodineDispatched,#iodineDrums").keyup(function(){
    	//alert('found: '+ $("#iodineDispatched").val());
    	
    	$('#iodineStock').val($('#iodineDrums').val()- $('#iodineDispatched').val());
    });
    
    
    $("#saltProduced").keyup(function(){
    	
    	
    	$('#saltProduced2').val($('#saltProduced').val());
    });
    
    
    $("#premixUsed").keyup(function(){
    	
    	
    	$('#premixUsed2').val($('#premixUsed').val());
    });
    
    
    $("#saltFortified").keyup(function(){
    	
    	
    	$('#saltFortified2').val($('#saltFortified').val());
    });
    
    
    $("#controlKg,#amountUsed").keyup(function(){
    	
    	
    	$('#inStock').val($('#controlKg').val()- $('#amountUsed').val());
    });
    
    
    $("#kgs,#amountsUsed").keyup(function(){
    	
    	$('#inStocks').val($('#kgs').val()- $('#amountsUsed').val());
    });
	
	});
	
		<script id="scripts" type="text/javascript">
		//load  scripts assynchronously
        (function() {

		 var myscript = document.createElement('script');
		
		 myscript.type = 'text/javascript';
		
		 myscript.src = ("<?php echo base_url()?>js/scripts.js");
		
		 var s = document.getElementById('scripts');
		
		 s.parentNode.insertBefore(myscript, s);})();
		</script>
		


	