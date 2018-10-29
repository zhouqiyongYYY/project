<?php
	$_username = isset($_GET["username"])? $_GET["username"] : "02";
    $_password = isset($_GET["password"])? $_GET["password"] : "0055";
    // echo $_username;
    // echo $_password;

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

	$sql = 'select * from userlist';
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    foreach($row as $item){          
            if($item ['usrname'] == $_username && $item ['password']== $_password){
                 echo "true";
                 break;
            }
        };
    $result->close();
    // echo json_encode($row);
    $conn->close();









?>