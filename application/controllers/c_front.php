<?php

class C_Front extends CI_Controller {
	var $data;
	public function _construct() {

		parent::_construct();
		$this -> load -> helper('url');

	}

	public function index() {
		$data['title'] = 'Welcome';
		$data['content'] = "<p>Shop Kenya</p>";
		$this -> load -> view('index', $data);
	}//End of index file

	public function getCategories() {
		$this -> load -> model('models_shopkenya/M_Category');
		$this -> M_Category -> getAllCategories();
		$this -> data['categories'] = $this -> M_Category -> categories;
	}

	public function getStores() {
		$this -> load -> model('models_shopkenya/M_Store');
		$this -> M_Store -> getAllStoresDetails();
		$this -> data['stores'] = $this -> M_Store -> stores;
	}

	public function getBranchesByStore() {
		$this -> load -> model('models_shopkenya/M_Branch');
		$this -> M_Branch -> getBranchByStoreName('Naivas');
		/*pass the client side/session variable of the store name*/
		$this -> data['branches'] = $this -> M_Branch -> branches;
	}

	public function getProductsByStore() {
		$this -> load -> model('models_shopkenya/M_Product');
		$this -> M_Product -> getProductsByStoreName('Naivas');
		/*pass the client side/session variable of the store name*/
		$this -> data['products'] = $this -> M_Product -> products;
	}

}
