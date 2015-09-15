<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST') {

		$image_file = $_FILES['image'];
		$target_file = $image_filename = Image::upload($image_file);

		Hotel::create($db, $_POST['name'], $_POST['city'], $_POST['region'], $_POST['shortname'], $_POST['description'], $_POST['excerpt']);
		$db->close_connection();
		echo "success";

	} else {
		
		$outp = Hotel::get_all($db);
	
		$db->close_connection();

		echo json_encode($outp);

	}


?>