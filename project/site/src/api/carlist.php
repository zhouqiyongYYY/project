<?php
		// $_username = isset($_POST["username"])?$_POST["username"]:"has no";
  //       $_psw = isset($_POST["psw"])?$_POST["psw"]:"000000";
  //       // var_dump($_username);
  //       // var_dump($_psw);
  //       echo $_username;
  //       echo $_psw;
         
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "username";
        $conn = new mysqli($servername, $username, $password, $dbname);
        // if ($conn->connect_error) {
        //         die("连接失败: " . $conn->connect_error);
        //     } 
        $conn->set_charset('utf8');
         // echo "连接成功";    

        $sql = 'select * from carlist_ul';
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);




        $result->close();
        $conn->close();




?>