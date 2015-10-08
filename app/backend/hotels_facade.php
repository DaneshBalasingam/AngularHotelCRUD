<?php

	require_once("initialize.php");

	$db = new PDO_database();

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST') {

		$request = file_get_contents('php://input');
		$input = json_decode($request);

		Hotel::create($db, $input->name, $input->city, $input->region, 
		           $input->shortname, $input->description, $input->excerpt, 
		           $input->image_id);

		$db->close_connection();
		echo "saved";	

	} elseif ($method == 'PUT') {

		$id = explode('/', $_SERVER['PATH_INFO'])[1];

		$request = file_get_contents('php://input');
		$input = json_decode($request);

		Hotel::update($db, $id, $input->name, $input->city, $input->region, 
		           $input->shortname, $input->description, $input->excerpt, 
		           $input->image_id);

		$db->close_connection();
		echo "PUT";

	} elseif ($method == 'DELETE') {

		$id = explode('/', $_SERVER['PATH_INFO'])[1];

	}else {

		if(empty($_SERVER['PATH_INFO'])) {
			$outp = Hotel::get_all($db);
	
			$db->close_connection();

			echo json_encode($outp);
			
		} else {
			$request = explode('/', $_SERVER['PATH_INFO']);
			
			$outp = Hotel::get_By_Id($db, $request[1]);
	
			$db->close_connection();

			echo json_encode($outp);
		}	


	}


?>