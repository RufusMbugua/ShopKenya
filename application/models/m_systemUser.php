<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
/**
 *model to SystemUser entity
 */
use application\models\Entities\E_SystemUser;

class M_SystemUser extends MY_Model {
	var $isUser,$email,$userRights,$affiliation;

	function __construct() {
		parent::__construct();
		$this->isUser='false';
		$this->email='';$this->userRights='';$this->affiliation='';
	}

	function getUser() {
        $s=microtime(true); /*mark the timestamp at the beginning of the transaction*/
		
		if ($this -> input -> post()) {//check if a post was made
			
       //Working with an object of the entity
		$user = $this->em->getRepository('models\Entities\E_SystemUser')
						->findOneBy(array('username' => $this -> input -> post('username'), 'password' => $this -> input -> post('secret')));
	    
		
		
	    if($user){
	    	$this->email = $user -> getUsername();
			$this->userRights=$user->getUserRights();
			$this->affiliation=$user->getAffiliation();
			return $this->isUser='true';
	    }
		
		//test a device by user
		
		
		}//close the this->input->post
		$e=microtime(true);
		$this->executionTime=round($e-$s,'4');
		//return $this -> isUser = 'true';
	} /*end of getUser()*/
	
	function addUser(){
		
	}
	
	function deactivateUser(){
		
	}
	
	function activateUser(){
		
	}
	
	function listUsers(){
		
	}

}//end of class M_SystemUser
