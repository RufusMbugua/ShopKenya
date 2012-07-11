<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
/**
 *model to E_Category entity
 */
use application\models\entities\E_Category;

class M_Category  extends MY_Model {
	var $categories;
	function getAllCategories(){     
	      /*using DQL*/
	      
	      $query = $this->em->createQuery('SELECT c.categoryID,c.categoryName FROM models\entities\E_Category c');
          
          $this->categories = $query->getResult();
		  //if(!$this->categories->isEmpty());
		  /*start of test display--to be deleted*/
		  foreach ($this->categories as $key=>$value) {
									print $value['categoryName'].'<br />';
									//var_dump($this->categories);
								  }
		  /*end of test display--to be deleted*/
		   return $this->categories;
		   
	}/*close getAllCategories()*/
	
}