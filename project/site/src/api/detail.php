<?php
	header("Access-Control-Allow-Origin: *");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "username";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        } 
    $conn->set_charset('utf8');
     // echo "连接成功";    

	$sql = 'select * from detail_list';
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);  
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    $result->close();
    $conn->close();






?>