<?php
        $_username = isset($_POST["username"])?$_POST["username"]:"has no";
        $_psw = isset($_POST["psw"])?$_POST["psw"]:"000000";
        // var_dump($_username);
        // var_dump($_psw);
        echo $_username;
        echo $_psw;

        header("Access-Control-Allow-Origin: *");
         
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

        $sql = 'select * from userlist';
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
        // mysqli_query($conn,"INSERT INTO userlist (username,password) VALUES ('$_username', '$_psw')");
        $res = $conn ->query('insert into userlist(usrname,password)values("'.$_username.'","'.$_psw.'")');
        if ($res) {
            echo "true";
        } else {
            echo "Error: " . $res . "<br>" . $conn->error;
        }




        $result->close();
        $conn->close();


        





?>