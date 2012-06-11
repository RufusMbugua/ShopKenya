<?php
## Extend CI_Model to include Doctrine Entity Manager

class  MY_Model  extends  CI_Model{

public $em, $response, $theForm;

function __construct() {
		parent::__construct();
		
		/* Instantiate Doctrine's Entity manage so we don't have
		   to everytime we want to use Doctrine */
		   
		$this->em = $this->doctrine->em;
		$this->response='';
		$this->theForm='';
	}

}