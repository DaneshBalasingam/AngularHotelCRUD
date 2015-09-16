<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST') {

		$image_file = $_FILES['image'];
		$target_file = $image_filename = Image::upload($image_file);

		Hotel::create($db, $_POST['name'], $_POST['city'], $_POST['region'], 
		           $_POST['shortname'], $_POST['description'], $_POST['excerpt'], 
		           $target_file);
		$db->close_connection();
		echo "SAVE";	

	} elseif ($method == 'PUT') {
		$image_file = $_FILES['image'];
		$target_file = $image_filename = Image::upload($image_file);

		Hotel::update($db, $POST['hotel_id'], $_POST['name'], $_POST['city'], $_POST['region'], 
		           $_POST['shortname'], $_POST['description'], $_POST['excerpt'], 
		           $target_file);

		$db->close_connection();
		echo "PUT";

	}else {
		
		$outp = Hotel::get_all($db);
	
		$db->close_connection();

		echo json_encode($outp);

	}


?>