<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST') {

		$image_file = $_FILES['image'];
		//$image_file = $_FILES['name'];
		$image_id = Image::upload($db, $image_file);

		$db->close_connection();
		
		echo $image_id;

	} else {

		$outp = Image::get_all($db);
	
		$db->close_connection();

		echo json_encode($outp);
	}


?>