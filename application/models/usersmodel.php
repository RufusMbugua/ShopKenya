<?php
class UsersModel extends CI_Model {

	var $user_id = '';
	var $user_name = '';
	var $user_secret = '';
	var $user_rights = '';
	var $user_login_stamp = '';
	var $user_logout_stamp = '';
	var $isUser = '';
	var $email = '';
	#boolean check of a valid user

	function __construct() {
		// Call the Model constructor
		parent::__construct();
		$this -> load -> helper('array');
	}

	function get_user() {
		#receive user credentials from the login page
		$this -> user_name = $this -> input -> post('username');
		$this -> user_secret = $this -> input -> post('secret');

		#CI query structure
		$query = $this -> db -> query("SELECT usersID,userName, userRights FROM users 
	 WHERE userName= '" . $this -> user_name . "' AND userPassword ='" . $this -> user_secret . "'");

		// $this->db->select('usersID','userName','userRights');
		//$this->db->get_where('users', array('userName' => $this->user_name, 'userPassword'=> $this->user_secret));
		//$query=$this->db->query($sql);

		// $this->db->where('userName', $name);
		//$this->db->where('userPassword', $secret);
		//$this->db->from('users');
		if ($query -> num_rows() > 0) {
			//set session variables

			$row = $query -> row();
			$this -> email = $row -> userName;
			

			$this -> isUser = true;
		} else {
			$this -> isUser = false;
		}
		return $this -> isUser;

	}

	function insert_user() {
		$this -> $user_name = $this -> input -> post('email');
		$this -> $user_secret = $this -> input -> post('password');
		$this -> $user_rights = $this -> input -> post('rights');

		$this -> db -> insert('users', $this);
	}

	function update_user() {
		$this -> $user_secret = $this -> input -> post('password');
		$this -> $user_rights = $this -> input -> post('rights');

		$this -> db -> update('entries', $this, array('id' => $this->input->post('id')));
	}

}
?>