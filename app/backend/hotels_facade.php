<?php

	require_once("initialize.php");
	require_once("hotels.php");

	$db = new PDO_database();

	//$new_hotel = Hotel::create($db, 'hotel 3', 'auckland', 'auckland region', 'hotel_3', 'a typical hotel', 'blah blah');

	//$db->close_connection();

	//echo $new_hotel;
	if (isset($_POST['submit'])) {

		

	} else {
		
		$outp = Hotel::get_all($db);
	
		$db->close_connection();

		echo json_encode($outp);

	}


?>