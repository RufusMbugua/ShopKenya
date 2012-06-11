// JavaScript Document
function validateForm()
{
	var x=document.forms['externalfortifiedB1']['visitDate']['visitTime'].value;
	if(x==null || x=="")
	{
		alert("First name must be filled out");
		return false;
	}
}