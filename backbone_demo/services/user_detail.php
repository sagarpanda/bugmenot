<?php
header('Access-Control-Allow-Origin: *');
$id = $_GET['id'];
$arr = array(
	'result' => array('id' => intval($id), 'fname' => 'fname'.$id, 'lname' => 'lname'.$id, 'email' => 'fname'.$id.'.lname'.$id.'@gmail.com'), 
	'status' => true, 
	'message' => ''
);
echo json_encode($arr);
?>