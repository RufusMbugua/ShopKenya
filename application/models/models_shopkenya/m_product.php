<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
/**
 *model to E_Product entity
 */
use application\models\entities\E_Product;

class M_Product extends MY_Model {
	var $products;
	function getProductsByStoreName($store){     
	      /*using DQL*/
	      
	      $query = $this->em->createQuery('SELECT p FROM models\entities\E_Product p WHERE p.storeName= :name');
		  $query->setParameter('name',$store);
          
          $this->products = $query->getResult();
		  // if(!$this->products->isEmpty());
		  /*start of test display--to be deleted*/
		 
		  foreach ($this->products as $key=>$value) {
									
									var_dump($this->products);
									//print $key." ".$value['branchAlias'];
								  }
		  /*end of test display--to be deleted*/
		   return $this->products;
		   
	}/*close getProductsByStoreName($store)*/
	
	function getProductsByCategoryAndStore($store,$category){     
	      /*using DQL*/
	      
	      $query = $this->em->createQuery('SELECT p FROM models\entities\E_Product p WHERE p.storeName= :name AND p.categoryID= :category');
		  $query->setParameter('name',$store);
		  $query->setParameter('category',$category);
          
          $this->products = $query->getResult();
		  // if(!$this->products->isEmpty());
		  /*start of test display--to be deleted*/
		 
		  foreach ($this->products as $key=>$value) {
									
									var_dump($this->products);
									//print $key." ".$value['branchAlias'];
								  }
		  /*end of test display--to be deleted*/
		   return $this->products;
		   
	}/*close getProductsByCategoryAndStore($store)*/
	
}