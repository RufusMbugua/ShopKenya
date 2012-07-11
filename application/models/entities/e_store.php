<?php
namespace models\entities;

/**
 * @Entity
 * @Table(name="store")
 */
class E_Store{
	/**
	 * @Id
	 * @Column(name="storeId", type="integer", length=20, nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 * */
	private $storeId;
	
	/**
	 *  @Column(name="storeName", type="string", length=100, nullable=false)
	 * */
	private $storeName;
	
	/**
	 *  @Column(name="productLine", type="string", length=100, nullable=false)
	 * */
	private $productLine;
	
	public function getStoreId() {
		return $this -> storeId;
	}

	public function setStoreId($storeId) { $this -> storeId = $storeId;
	
	}
	
	public function getStoreName() {
		return $this -> storeName;
	}

	public function setStoreName($storeName) { $this -> storeName = $storeName;
	}
	
	public function getProductLine() {
		return $this -> categoryName;
	}

	public function setProductLine($productLine) { $this -> productLine = $productLine;
	}	
}