<?php

class PDO_database {

	private $conn;

	public function __construct() {
		
		$this->open_connection();
		//$this->magic_quotes_active = get_magic_quotes_gpc();
		//$this->real_escape_string_exists = function_exists( "mysql_real_escape_string" );

		
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

	public function close_connection() {

		$this->conn = null;
	} 

	public function query($sql) {

		$result = $this->conn->query($sql);

		return $result;
	}

}

?>