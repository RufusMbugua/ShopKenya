<?php
namespace models\entities;

/**
 * @Entity
 * @Table(name="product")
 */
class E_Product{
	/**
	 * @Id
	 * @Column(name="productID", type="integer", length=11, nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 * */
	private $productID;
	
	/**
	 *  @Column(name="productName", type="string", length=45, nullable=true)
	 * */
	private $productName;
	
	/**
	 * @ManyToOne(targetEntity="category",inversedBy="categoryID") 
	 * @Column(name="categoryID", type="integer", length=20, nullable=false)
	 * */
	private $categoryID;
	
	/**
	 *  @Column(name="productDescription", type="string", length=45, nullable=true)
	 * */
	private $productDescription;
	
	/**
	 *  @Column(name="productTags", type="string", length=100, nullable=false)
	 * */
	private $productTags;
	
	/**
	 *  @Column(name="productPrice", type="decimal", length=45, nullable=false)
	 * */
	private $productPrice;
	
	/**
	 *  @Column(name="productImage", type="string", length=45, nullable=true)
	 * */
	private $productImage;
	
	/**
	 * @ManyToOne(targetEntity="store",inversedBy="storeName")
	 * @Column(name="storeName", type="string", length=100, nullable=false)
	 * */
	private $storeName;
	
	public function getProductID() {
		return $this -> productID;
	}

	public function setProductID($productID) { $this -> productID = $productID;
	}
	public function getProductName() {
		return $this -> productName;
	}

	public function setProductName($productName) { $this -> productName = $productName;
	}
	public function getCategoryID() {
		return $this -> categoryID;
	}

	public function setCategoryID($categoryID) { $this -> categoryID = $categoryID;
	}
	
	public function getProductDescription() {
		return $this -> productDescription;
	}

	public function setProductDescription($productDescription) { $this -> productDescription = $productDescription;
	}
	
	public function getProductTags() {
		return $this -> productTags;
	}

	public function setProductTags($productTags) { $this -> productTags = $productTags;
	}
	
	public function getProductPrice() {
		return $this ->productPrice;
	}

	public function setProductPrice($productPrice) { $this -> productPrice = $productPrice;
	}
	
	public function getProductImage() {
		return $this ->productImage;
	}

	public function setProductImage($productImage) { $this -> productImage = $productImage;
	}
	
	public function getStoreName() {
		return $this ->storeName;
	}

	public function setStoreName($storeName) { $this -> storeName = $storeName;
	}
}
?>