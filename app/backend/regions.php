<?php

	require_once("initialize.php");

	$db = new PDO_database();

	
	if (isset($_POST['submit'])) {

	} else {
		
		$result = $db->query("SELECT * FROM regions");
	
		$outp = $result->fetchAll(PDO::FETCH_ASSOC);
	
		$db->close_connection();

		echo json_encode($outp);

	}


?>