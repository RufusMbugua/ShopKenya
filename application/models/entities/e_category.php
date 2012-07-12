<?php
namespace models\entities;

/**
 * @Entity
 * @Table(name="category")
 */
class E_Category{
	/**
	 * @Id
	 * @Column(name="categoryID", type="integer", length=20, nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 * */
	private $categoryID;
	
	/**
	 *  @Column(name="categoryName", type="string", length=45, nullable=false)
	 * */
	private $categoryName;
	
	public function getCategoryID() {
		return $this -> categoryID;
	}

	public function setCategoryID($categoryID) { $this -> categoryID = $categoryID;
	
	}
	
	public function getCategoryName() {
		return $this -> categoryName;
	}

	public function setCategoryName($categoryName) { $this -> categoryName = $categoryName;
	}	
}