<?php
    defined('DB_SERVER') ? null : define("DB_SERVER", "localhost");
	defined('DB_USER')   ? null : define("DB_USER", "root");
	defined('DB_PASS')   ? null : define("DB_PASSWORD", "");
	defined('DB_NAME')   ? null : define("DB_NAME", "hotelangular");
	defined('DB_DSN')   ? null : define("DB_DSN", "mysql:host=localhost;dbname=hotelangular");

	defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);

	require_once("database.php");
	require_once("defined_exceptions.php");
	require_once("image.php");
	require_once("hotels.php");
	
?>