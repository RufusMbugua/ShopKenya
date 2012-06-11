<?php
#processes all the form data before sending to the database for storage or update
class Submit extends CI_Controller
{
	//the constructor, a must for all classes you'll create
	public function _construct()
	{
		parent::_construct();
		$this -> load -> helper('url');
	}
		
		
	public function form_externalFort_B3()
	{
		//load the associated model
		$this->load->model('form/ExternalFort_B3');
		
		//now access the insert function
		$this->ExternalFort_B3->insert_record();
		
		if($this->ExternalFort_B3->$query_reponse =='ok'){
			#respond back to the user :-)	
			$data['server_response'] = '<p>Record has been submitted!<p>';
		    $this -> load -> view('pages/vehicles/index', $data); #redirect user to the same page
		}else{
			//query failed..so ....stay put
			$data['server_response'] = '<p>An error occured! Record was not submitted<p>';
		 	 $this -> load -> view('pages/vehicles/index', $data); #stay on same page..ajax will be needed to do this beta :)
		}
	} // end of form_externalFort_B3()
}
?>