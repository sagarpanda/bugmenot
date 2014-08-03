<?php
header('Access-Control-Allow-Origin: *');
$arr = array(
	'result' => array(
		array('id' => 1, 'fname' => 'fname01', 'lname' => 'lname01', 'email' => 'fname01.lname@gmail.com'),
		array('id' => 2, 'fname' => 'fname02', 'lname' => 'lname02', 'email' => 'fname02.lname02@gmail.com'),
		array('id' => 3, 'fname' => 'fname03', 'lname' => 'lname03', 'email' => 'fname03.lname03@gmail.com'),
		array('id' => 4, 'fname' => 'fname04', 'lname' => 'lname04', 'email' => 'fname04.lname04@gmail.com'),
		array('id' => 5, 'fname' => 'fname05', 'lname' => 'lname05', 'email' => 'fname05.lname05@gmail.com'),
		array('id' => 6, 'fname' => 'fname06', 'lname' => 'lname06', 'email' => 'fname06.lname06@gmail.com'),
		array('id' => 7, 'fname' => 'fname07', 'lname' => 'lname07', 'email' => 'fname07.lname07@gmail.com'),
		array('id' => 8, 'fname' => 'fname08', 'lname' => 'lname08', 'email' => 'fname08.lname08@gmail.com'),
		array('id' => 9, 'fname' => 'fname09', 'lname' => 'lname09', 'email' => 'fname09.lname09@gmail.com')
	), 
	'status' => true, 
	'message' => ''
);
/*$arr = array(
	array('id' => 1, 'fname' => 'fname01', 'lname' => 'lname01', 'email' => 'fname01.lname@gmail.com'),
	array('id' => 2, 'fname' => 'fname02', 'lname' => 'lname02', 'email' => 'fname02.lname02@gmail.com'),
	array('id' => 3, 'fname' => 'fname03', 'lname' => 'lname03', 'email' => 'fname03.lname03@gmail.com'),
	array('id' => 4, 'fname' => 'fname04', 'lname' => 'lname04', 'email' => 'fname04.lname04@gmail.com'),
	array('id' => 5, 'fname' => 'fname05', 'lname' => 'lname05', 'email' => 'fname05.lname05@gmail.com'),
	array('id' => 6, 'fname' => 'fname06', 'lname' => 'lname06', 'email' => 'fname06.lname06@gmail.com'),
	array('id' => 7, 'fname' => 'fname07', 'lname' => 'lname07', 'email' => 'fname07.lname07@gmail.com'),
	array('id' => 8, 'fname' => 'fname08', 'lname' => 'lname08', 'email' => 'fname08.lname08@gmail.com'),
	array('id' => 9, 'fname' => 'fname09', 'lname' => 'lname09', 'email' => 'fname09.lname09@gmail.com')
);*/
echo json_encode($arr);
?>