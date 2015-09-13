<?php

class PDO_database {

	private $conn;

	public function __construct() {
		
		$this->open_connection();

		
	}

	public function open_connection() {
	
		try {

			$this->conn = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
			
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           			
		}
  
		catch (PDOException $e) {
    		echo 'Connection failed: ' . $e->getMessage();
		}

	}

	public function get_connection() {
		return $this->conn;
	}

	public function close_connection() {

		$this->conn = null;
	} 

	public function query($sql) {

		$result = $this->conn->query($sql);

		return $result;
	}

}

?>