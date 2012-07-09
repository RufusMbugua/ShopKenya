<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
/**
 *model to E_Branch entity
 */
use application\models\entities\E_Branch;

class M_Branch extends MY_Model {
	var $branches;
	function getBranchByStoreName($store){     
	      /*using DQL*/
	      
	      $query = $this->em->createQuery('SELECT b FROM models\entities\E_Branch b WHERE b.storeName= :name');
		  $query->setParameter('name',$store);
          
          $this->branches = $query->getResult();
		  /*start of test display--to be deleted*/
		  foreach ($this->branches as $key=>$value) {
									//print $value['branchAlias'].' || '.$value['branchLocation'].' || '.$value['branchManager'].'<br />';
									var_dump($this->branches);
									//print $key." ".$value['branchAlias'];
								  }
		  /*end of test display--to be deleted*/
		   return $this->branches;
		   
	}/*close getBranchByStoreName($store)*/
	
}