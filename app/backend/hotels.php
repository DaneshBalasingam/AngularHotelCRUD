<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$result = $db->query("SELECT * FROM hotels");
	
	/*$outp = [];
	while($rs = $result->fetchAll(PDO::FETCH_ASSOC)) {
		$outp[] = $rs;
	}*/
	
	$outp = $result->fetchAll(PDO::FETCH_ASSOC);
	
	$db->close_connection();

	echo json_encode($outp);
?>