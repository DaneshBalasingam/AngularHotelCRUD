<?php

class Image {

	protected $data = array();
	
	public function __construct($id) {
		$this->user_id = $id;
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

        $result = $db->query("SELECT * FROM images");
    
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function upload ($db, $image_file) {

        try {

            $tmp_file = $image_file['tmp_name'];
            $upload_dir = "uploads";
            $curr_file = basename($image_file['name']);
            $ext = pathinfo($curr_file, PATHINFO_EXTENSION);
            $target_file = time() . '.' . $ext;

            if(move_uploaded_file($tmp_file, $upload_dir.DS.$target_file)) {
                $image_id = self::create($db, $target_file);
                return $image_id;
            } else {
                throw new file_upload_exception($file['error']);
            }
        }

        catch( file_upload_exception $e) {
            return $e;

        }

    }

    public static function create ($db, $target_file) {
        $stmt = $db->get_connection()->prepare("INSERT INTO images ( name ) VALUES ( :name )");

        $stmt->bindParam(':name', $target_file);

        $stmt->execute();

        return $db->get_connection()->lastInsertId();
        
    }
}

?>