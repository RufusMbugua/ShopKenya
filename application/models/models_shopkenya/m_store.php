<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
/**
 *model to E_Store entity
 */
use application\models\entities\E_Store;

class M_Store  extends MY_Model {
	var $stores;
	function getAllStoresDetails(){     
	      /*using DQL*/
	      
	      $query = $this->em->createQuery('SELECT s.storeId,s.storeName,s.productLine FROM models\entities\E_Store s');
          
          $this->stores = $query->getResult();
		  //if(!$this->stores->isEmpty());
		  /*start of test display--to be deleted*/
		   
		  foreach ($this->stores as $key=>$value) {
									print $value['storeName'].' || '.$value['productLine'].'<br />';
									//var_dump($this->stores);
								  }
		  /*end of test display--to be deleted*/
		   return $this->stores;
		   
	}/*close getAllStoresDetails()*/
	
}