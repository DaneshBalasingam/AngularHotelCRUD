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

    public static function upload ($image_file) {

        try {

            $tmp_file = $image_file['tmp_name'];
            $upload_dir = "uploads";
            $target_file = basename($image_file['name']);

            if(move_uploaded_file($tmp_file, $upload_dir.DS.$target_file)) {
                return $target_file;
            } else {
                throw new file_upload_exception($file['error']);
            }
        }

        catch( file_upload_exception $e) {
            return $e;

        }

    }
}

?>