<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST') {

		$request = file_get_contents('php://input');
		$input = json_decode($request);

		Hotel::create($db, $input->name, $input->city, $input->region, 
		           $input->shortname, $input->description, $input->excerpt, 
		           $input->imageId);

		$db->close_connection();
		echo "saved";	

	} elseif ($method == 'PUT') {
		$image_file = $_FILES['image'];
		$target_file = $image_filename = Image::upload($image_file);

		Hotel::update($db, $POST['hotel_id'], $_POST['name'], $_POST['city'], $_POST['region'], 
		           $_POST['shortname'], $_POST['description'], $_POST['excerpt'], 
		           $target_file);

		$db->close_connection();
		echo "PUT";

	}else {

		if(empty($_SERVER['PATH_INFO'])) {
			$outp = Hotel::get_all($db);
	
			$db->close_connection();

			echo json_encode($outp);
			
		} else {
			$request = explode('/', $_SERVER['PATH_INFO']);
			//echo $request[1];
			$outp = Hotel::get_By_Id($db, $request[1]);
	
			$db->close_connection();

			echo json_encode($outp);
		}	


	}


?>