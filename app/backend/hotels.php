<?php

class Hotel {

	protected $data = array();
	
	public function __construct($id) {
		$this->id = $id;
	}
	
	public function __set($name, $value)
    {
        $this->data[$name] = $value;
    }

    public function __get($name)
    {
        if (isset($this->data[$name])) {
            return $this->data[$name];
        } else {
            return false;
        }
    }

    public static function get_all($db) {

    	$result = $db->query("SELECT * FROM hotels");
	
		return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function create($db, $hotel_name, $hotel_city, $hotel_region, $hotel_shortname, 
    	                          $hotel_desc, $hotel_excerpt, $image_name) {
			
			$stmt = $db->get_connection()
			        ->prepare("INSERT INTO hotels ( name, city, region, shortname, description, excerpt, image_name )
				               VALUES ( :name, :city, :region, :shortname, :description, :excerpt, :image_name )");

			$stmt->bindParam(':name', $hotel_name);
			$stmt->bindParam(':city', $hotel_city);
			$stmt->bindParam(':region', $hotel_region);
			$stmt->bindParam(':shortname', $hotel_shortname);
			$stmt->bindParam(':description', $hotel_desc);
			$stmt->bindParam(':excerpt', $hotel_excerpt);
			$stmt->bindParam(':image_name', $image_name);

			$stmt->execute();

			return 'success';
	    
	}


}




?>