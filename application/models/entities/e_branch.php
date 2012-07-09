<?php
namespace models\entities;

/**
 * @Entity
 * @Table(name="branch")
 */
class E_Branch{
	/**
	 * @Id
	 * @Column(name="branchId", type="integer", length=20, nullable=false)
	 * @GeneratedValue(strategy="AUTO")
	 * */
	private $branchId;
	
	/**
	 *  @ManyToOne(targetEntity="store", inversedBy="storeName")
	 *  @Column(name="storeName", type="string", length=100, nullable=false)
	 * */
	private $storeName;
	
	/**
	 *  @Column(name="branchAlias", type="string", length=100, nullable=true)
	 * */
	private $branchAlias;
	
	/**
	 *  @Column(name="branchLocation", type="string", length=100, nullable=false)
	 * */
	private $branchLocation;
	
	/**
	 *  @Column(name="branchManager", type="string", length=45, nullable=false)
	 * */
	private $branchManager;
	
	/**
	 *  @Column(name="branchContactInfo", type="string", length=100, nullable=false)
	 * */
	private $branchContactInfo;
	
	public function getBranchId() {
		return $this -> branchId;
	}

	public function setBranchId($branchId) { $this -> branchId = $branchId;
	
	}
	
	public function getStoreName() {
		return $this -> storeName;
	}

	public function setStoreName($storeName) { $this -> storeName = $storeName;
	}
	
	public function getBranchAlias() {
		return $this -> branchAlias;
	}

	public function setBranchAlias($branchAlias) { $this -> branchAlias = $branchAlias;
	}
	
	public function getBranchLocation() {
		return $this -> branchLocation;
	}

	public function setBranchLocation($branchLocation) { $this -> branchLocation = $branchLocation;
	}
	
	public function getBranchManager() {
		return $this -> branchManager;
	}

	public function setBranchManager($branchManager) { $this -> branchManager = $branchManager;
	}
	
	public function getBranchContactInfo() {
		return $this -> branchContactInfo;
	}

	public function setBranchContactInfo($branchContactInfo) { $this -> branchContactInfo = $branchContactInfo;
	}
}