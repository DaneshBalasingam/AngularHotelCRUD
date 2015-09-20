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

    	$result = $db->query("SELECT hotels.id, hotels.region, hotels.city, 
    		                  hotels.shortname, hotels.description, hotels.excerpt, 
    		                  images.name as image_name  
							  FROM hotels 
							  INNER JOIN images 
							  ON hotels.image_id = images.id");
    	
	
		return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function create($db, $hotel_name, $hotel_city, $hotel_region, $hotel_shortname, 
    	                          $hotel_desc, $hotel_excerpt, $image_id) {
			
		$stmt = $db->get_connection()
		        ->prepare("INSERT INTO hotels ( name, city, region, shortname, description, excerpt, image_id )
			               VALUES ( :name, :city, :region, :shortname, :description, :excerpt, :image_id )");

		$stmt->bindParam(':name', $hotel_name);
		$stmt->bindParam(':city', $hotel_city);
		$stmt->bindParam(':region', $hotel_region);
		$stmt->bindParam(':shortname', $hotel_shortname);
		$stmt->bindParam(':description', $hotel_desc);
		$stmt->bindParam(':excerpt', $hotel_excerpt);
		$stmt->bindParam(':image_id', $image_id);

		$stmt->execute();

		return 'success';
	    
	}

	public static function update ($db, $hotel_id, $hotel_name, $hotel_city, $hotel_region, $hotel_shortname, 
    	                          $hotel_desc, $hotel_excerpt, $image_name) {

		$stmt = $db->get_connection()
		        ->prepare("UPDATE hotels
		        	       SET name = :name, city = :city, region = :region, shortname = :shortname,
		        	           description = :description, excerpt = :excerpt, image_name = :image_name 
		        	       WHERE id = :hotel_id");

		$stmt->bindParam(':name', $hotel_name);
		$stmt->bindParam(':city', $hotel_city);
		$stmt->bindParam(':region', $hotel_region);
		$stmt->bindParam(':shortname', $hotel_shortname);
		$stmt->bindParam(':description', $hotel_desc);
		$stmt->bindParam(':excerpt', $hotel_excerpt);
		$stmt->bindParam(':image_name', $image_name);
		$stmt->bindParam(':hotel_id', $hotel_id);

		$stmt->execute();

		return 'success';


	}


}




?>